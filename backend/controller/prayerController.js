const asyncHandler = require("express-async-handler");
const Prayer = require("../models/prayersModel");

const getPrayer = asyncHandler(async (req, res) => {
  const prayers = await Prayer.find();

  res.json(prayers);
});

const postPrayer = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please submit a text");
  }
  const prayers = await Prayer.create({
    text: req.body.text,
  });

  res.json(prayers);
});

const putPrayer = asyncHandler(async (req, res) => {
  const prayers = await Prayer.findById(req.params.id);

  if (!prayers) {
    res.status(400);
    throw new Error("Prayer not found");
  }

  const updatedPrayer = await Prayer.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.json(updatedPrayer);
});

const deletePrayer = asyncHandler(async (req, res) => {
  res.json({ message: `deleting prayer for ${req.params.id}` });
});

module.exports = { getPrayer, postPrayer, putPrayer, deletePrayer };
