import db from "../config/db.js";

// Get All Rooms
export const getRooms = (req, res) => {
  db.query(
    "SELECT * FROM rooms",
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json(result);
    }
  );
};

// Get Single Room
export const getRoom = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM rooms WHERE id=?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json(result[0]);
    }
  );
};

// Add New Room
export const addRoom = (req, res) => {
  const { name, price, rating, guests } = req.body;
  const image = req.file ? req.file.filename : "";

  db.query(
    "INSERT INTO rooms (name, price, rating, guests, image) VALUES (?, ?, ?, ?, ?)",
    [name, price, rating, guests, image],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ success: true, message: "Room added successfully" });
    }
  );
};

// Update Room
export const updateRoom = (req, res) => {
  const id = req.params.id;
  const { name, price, rating, guests } = req.body;

  if (req.file) {
    const image = req.file.filename;
    db.query(
      "UPDATE rooms SET name=?, price=?, rating=?, guests=?, image=? WHERE id=?",
      [name, price, rating, guests, image, id],
      (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, message: "Room updated successfully" });
      }
    );
  } else {
    db.query(
      "UPDATE rooms SET name=?, price=?, rating=?, guests=? WHERE id=?",
      [name, price, rating, guests, id],
      (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, message: "Room updated successfully" });
      }
    );
  }
};

// Delete Room
export const deleteRoom = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM rooms WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true, message: "Room deleted successfully" });
  });
};