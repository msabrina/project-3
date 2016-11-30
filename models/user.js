const bcrypt = require('bcrypt');
const db     = require('../lib/dbConnect.js');
const auth   = require('../lib/auth.js');
const { isValidEmail } = require('../lib/lib.js');

const SALTROUNDS = 10;

function createUser (req, res, next) {
  // get data
  const first = req.body.firstName;
  const last = req.body.lastName;
  const email = req.body.email.toLowerCase();
  const password = bcrypt.hashSync(req.body.password, SALTROUNDS);

  // validate data
  if (!(first || last || email || password)) next(new Error('Please check that all fields were filled out properly.'));
  if (!isValidEmail(email)) next(new Error('Please submit a valid email address.'));

  // build query
  const query = `INSERT INTO "user" (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING user_id, fname, lname, email;`;
  // prepare values array
  const values = [
    first,
    last,
    email,
    password,
  ];

  // execute query with the data...
  db.one(query, values)
  .then((data) => {
    // ...then get a token for the user and send it back to the caller
    auth.getUserToken(data)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
  })
  /* end of db then; catch db errors now */
  .catch(err => next(err));
}

function getUserData (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  auth.getUserData(token)
  .then((user) => res.userInfo = user.data)
  .then(() => next())
  .catch(err => next(err));
}

function getUserPosts (req, res, next) {
  const values = [res.userInfo.user_id];
  const query = `SELECT * FROM post INNER JOIN user_post_ref ON user_post_ref.post_id = post.post_id WHERE user_post_ref.user_id = $1;`;
  // const query = `SELECT p.*, u.email, i.* FROM post p INNER JOIN user_post_ref ur ON ur.post_id = p.post_id INNER JOIN "user" u ON u.user_id = $1 INNER JOIN image_post_ref ir ON ir.post_id = p.post_id INNER JOIN image i ON i.image_id = ir.image_id WHERE u.user_id = $1;`;
  db.any(query, values)
  .then(posts => res.userPosts = posts)
  .then(() => next())
  .catch(err => next(err));
}

function getUserWatches (req, res, next) {
  const values = [res.userInfo.user_id];
  const query = `SELECT * FROM post INNER JOIN watched_items_ref ON watched_items_ref.post_id = post.post_id WHERE watched_items_ref.user_id = $1;`;
  db.any(query, values)
  .then(watches => res.userWatches = watches)
  .then(() => next())
  .catch(err => next(err));
}

function prepareResponse (req, res, next) {
  const userInfo = res.userInfo;
  const userPosts = res.userPosts;
  const userWatches = res.userWatches;

  const retObj = {
    user_info: userInfo,
    user_posts: userPosts,
    user_watched_items: userWatches,
  }

  res.rows = retObj;
  next();
}

// logIn is a middleware function that expects to receive an email and a plain text password in the request,
// and checks the combination against the database to see if the credentials are correct. If the credentials
// exist in the database, logIn calls the getUserToken method with the user object received from the db to generate
// a JWT to send back to the user for future calls to protected routes.
function logIn (req, res, next) {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  if (!email || !password) next(new Error('Logging in requires both an email and a password.'));

  if (!isValidEmail(email)) next(new Error('Please submit a valid email address.'));

  // build query and value variables
  const query = `SELECT * FROM "user" WHERE email = $1;`;
  const values = [email];

  // execute query, expecting either one row or none - for emails that don't exist
  db.oneOrNone(query, values)
  .then((data) => {
    // if email doesn;t exist, reject the user
    if (!data) next(new Error('Invalid login credentials.'));

    // email definitely exists; next step:
    // check if submitted password matches the one in the db
    if (bcrypt.compareSync(password, data.password)) {
      // password matches - good to go!
      // build out an object that we're going to send to the getUserToken method as payload to jwt.sign
      const userObj = {};
      for (let key in data) {
        if (key != 'password') userObj[key] = data[key];
      }
      // call getUserToken on user's data and send it back to the user
      auth.getUserToken(userObj)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
    } else {
      // if password doesn't match, reject the login attempt
      next(new Error('Invalid login credentials.'));
    }
  })
  /* all that happend inside the then of the db call; now we catch db errors */
  .catch(err => next(err));
}

function updateUser (req, res, next) {
  if (!isValidEmail(req.body.email)) next(new Error('Please submit a valid email address.'));

  let query = `UPDATE "user" SET `;
  let params = [req.body.firstName, req.body.lastName, req.body.email, req.body.password];
  let columns = ['fname', 'lname', 'email', 'password'];
  let values = [];

  params.forEach((val, i) => {
    if (val) {
      if (columns[i] == 'password') {
        values.push(bcrypt.hashSync(params[i], SALTROUNDS))
        query += `${columns[i]} = $${values.length}, `
      } else {
        values.push(params[i])
        query += `${columns[i]} = $${values.length}, `
      }
    }
  });
  query = query.slice(0, -2);
  query += ` WHERE user_id = $${values.length + 1} RETURNING user_id, fname, lname, email;`;
  values.push(res.userInfo.user_id);

  // execute query with the data...
  db.one(query, values)
  .then((data) => {
    // ...then get a token for the user and send it back to the caller
    auth.getUserToken(data)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
  })
  /* end of db then; catch db errors now */
  .catch(err => next(err));
}

function deleteUser (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  auth.getUserData(token)
  .then((user) => {
    const query = `DELETE FROM "user" WHERE user_id = $1;`;
    const values = [user.data.user_id];
    db.none(query, values)
    .then(() => next())
    .catch(err => next(err));
    // console.log('Deleting ', user);
    res.rows = `Deleted ${user}`;
    next();
  })
  .catch(err => next(err));
}

module.exports = {
  createUser,
  getUserData,
  getUserPosts,
  getUserWatches,
  prepareResponse,
  logIn,
  updateUser,
  deleteUser,
}
