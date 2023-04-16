const getPrayer = async (req, res) => {
  res.json({ message: "getting prayers" });
};

const postPrayer = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please submit a text");
  }
  res.json({ message: "creating a prayer" });
};

const putPrayer = async (req, res) => {
  res.json({ message: `updating prayer for ${req.params.id}` });
};

const deletePrayer = async (req, res) => {
  res.json({ message: `deleting prayer for ${req.params.id}` });
};

module.exports = { getPrayer, postPrayer, putPrayer, deletePrayer };
