import db from "../config/db.js";

export const getFoods = (req, res) => {
  db.query("SELECT * FROM foods", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

export const getFood = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM foods WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

export const addFood = (req, res) => {
  const { food_name, price } = req.body;
  const image = req.file ? req.file.filename : "";

  db.query(
    "INSERT INTO foods (food_name, price, image) VALUES (?, ?, ?)",
    [food_name, price, image],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ success: true, message: "Food added successfully" });
    }
  );
};

export const updateFood = (req, res) => {
  const id = req.params.id;
  const { food_name, price } = req.body;

  if (req.file) {
    const image = req.file.filename;
    db.query(
      "UPDATE foods SET food_name=?, price=?, image=? WHERE id=?",
      [food_name, price, image, id],
      (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, message: "Food updated successfully" });
      }
    );
  } else {
    db.query(
      "UPDATE foods SET food_name=?, price=? WHERE id=?",
      [food_name, price, id],
      (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, message: "Food updated successfully" });
      }
    );
  }
};

export const deleteFood = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM foods WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true, message: "Food deleted successfully" });
  });
};