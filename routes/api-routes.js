// const router = require("express").Router();
// const Book = require("../models/Books.js");

// // tested, working with seeded value and posted value
// router.get("/api/books", (req, res) => {
//   Book.find({})
//     .sort({ date: -1 })
//     .then(dbbook => {
//       res.json(dbbook);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


// //add one book (yes, I know)
// //tested with tempinput.html
// router.post("/api/books", ({ body }, res) => {
//   console.log(body)
//   var newBook ={
//     title: body.volumeInfo.title,
//     description: body.volumeInfo.description,
//     image: body.volumeInfo.imageLinks.thumbnail,
//     authors: body.volumeInfo.authors,
//     link: body.volumeInfo.infoLink
//   }
//   Book.create(newBook)
//     .then(newBook => {
//       res.json(newBook);
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(400).json(err);
//     });
// });

// // testing
// router.delete("/api/books/:id", (req, res) => {
//   Book.deleteOne({
//     "_id": req.params.id
//   }).then(() => res.status(200).json(true))
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// // do not define route "*", that is in server.js

// module.exports = router;
