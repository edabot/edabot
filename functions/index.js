const functions = require('firebase-functions');
const admin = require('firebase-admin')
const cors = require('cors')({origin: true})
const app = require('express')()

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

app.get(
  ['/', '/:id'],
  functions.https.onRequest((req, res) => {
    const postid = req.params.id
    let reference  = "posts"
    reference += postid ? '/' + postid : ""

    cors(req, res, () => {
      return admin
        .database()
        .ref(reference)
        .once('value')
        .then(snapshot => {
          if (snapshot.val() !== null) {
            res.status(200).send(JSON.stringify(snapshot))
          } else {
            res.status(200).send({})
          }
        })
    })
  })
)

app.post(
  "/",
  functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      let content = req.body.content ? req.body.content.trim() : null
      if (content === null) {
        res.status(200).send({error: "Missing Content"})
        return
      }

      let title = req.body.title ? req.body.title.trim() : req.body.content.substr(0,20) + "..."

      let postDate = admin.database.ServerValue.TIMESTAMP

      let postData = { title: title, content: content, created: postDate}

      let postKey = admin.database().ref("posts").push().key

      admin.database()
      .ref('/posts')
      .child(postKey)
      .set(postData, () => {
        return admin
        .database()
        .ref("/posts/" + postKey)
        .once("value")
        .then(function(snapshot) {
          if (snapshot.val() !== null) {
            res.status(200).send(JSON.stringify(snapshot));
          } else {
            res.status(200).send({ error: "Unable to save post" });
          }
        });
      })
    })
  })
)

exports.posts = functions.https.onRequest((req, res) => {
  // Handle routing of /posts without a trailing /,
  if (!req.path) {
    // prepending "/" keeps query params, path params intact
    req.url = `/${req.url}`;
  }
  return app(req, res);
});
