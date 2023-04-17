const asyncHandler = require("express-async-handler");
const Prayer = require("../models/prayersModel");
const User = require("../models/userModel");

const getPrayer = asyncHandler(async (req, res) => {
  const prayers = await Prayer.find({ user: req.user.id });

  res.json(prayers);
});

const postPrayer = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please submit a text");
  }
  const prayers = await Prayer.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.json(prayers);
});

const putPrayer = asyncHandler(async (req, res) => {
  const prayers = await Prayer.findById(req.params.id);

  if (!prayers) {
    res.status(400);
    throw new Error("Prayer not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
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
  const prayers = await Prayer.findById(req.params.id);

  if (!prayers) {
    res.status(400);
    throw new Error("Prayer not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Prayer.findByIdAndRemove(req.params.id);

  res.json({ id: req.params.id });
});

module.exports = { getPrayer, postPrayer, putPrayer, deletePrayer };
