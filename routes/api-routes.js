// const router = require("express").Router();
// const Expedition = require("../models/Expedition.js");

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

// router.post("/api/createexpedition/:size", ({ body }, res) => {
//   console.log(body)
//   var newExpedition ={
//     hunts: body
//   }
//   Expedition.create(newExpedition)
//     .then(newExpedition => {
//       res.json(newExpedition);
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
