const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res, next) => {
  console.log("getAll called");
  const result = await mongodb
    .getDb()
    .db("contact-db")
    .collection("contacts")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  console.log("getSingle called");
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("contact-db")
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const postSingle = async (req, res) => {
  // for testing
  console.log("postSingle called");
  console.log(req.body);

  const result = await mongodb
    .getDb()
    .db("contact-db")
    .collection("contacts")
    .insertOne(req.body);

  // could send back the body this way
  // res.status(201).json({
  //   received: req.body
  // })

  // for this assignment 3, I'm sending it back this way, with send()
  res
    .status(201)
    .send(`New contact created with the following id: ${result.insertedId}`);

  // optionally, send a message of success to the console
  console.log(
    `New contact created with the following id: ${result.insertedId}`
  );
};

const deleteSingle = async (req, res) => {
  console.log("deleteSingle called");
  const userId = new ObjectId(req.params.id);

  const result = await mongodb
    .getDb()
    .db("contact-db")
    .collection("contacts")
    .deleteOne({ _id: userId });

  res.status(200).send(`Deleted contact with id: ${userId}`);

  // optionally, send a message of success to the console
  console.log(`Deleted contact with id: ${userId}`);
};

const putSingle = async (req, res) => {
  console.log("putSingle called");
  const userId = new ObjectId(req.params.id);

  const result = await mongodb
    .getDb()
    .db("contact-db")
    .collection("contacts")
    .updateOne({ _id: userId }, { $set: req.body});

  res.status(204).send();

  // optionally, send a message of success to the console
  console.log(`Modified (PUT) contact with id: ${userId}`);
};

module.exports = { getAll, getSingle, postSingle, deleteSingle, putSingle };
