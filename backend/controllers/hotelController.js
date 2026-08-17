import db from "../config/db.js";

export const getHotels = (req, res) => {

    db.query("SELECT * FROM hotels ORDER BY id DESC",

    (err,result)=>{

        if(err) return res.status(500).json(err);

        res.json(result);

    });

};

export const getHotel=(req,res)=>{

const id=req.params.id;

db.query("SELECT * FROM hotels WHERE id=?",[id],

(err,result)=>{

if(err) return res.status(500).json(err);

res.json(result[0]);

});

};

export const addHotel = (req, res) => {
  const { name, location, price, rating } = req.body;
  const image = req.file ? req.file.filename : "";

  db.query(
    "INSERT INTO hotels (name, location, price, rating, description, image) VALUES (?, ?, ?, ?, ?, ?)",
    [name, location, price, rating, "", image],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({
        success: true,
        message: "Hotel Added Successfully",
      });
    }
  );
};

export const updateHotel = (req, res) => {
  const id = req.params.id;
  const { name, location, price, rating } = req.body;

  if (req.file) {
    const image = req.file.filename;
    db.query(
      "UPDATE hotels SET name=?, location=?, price=?, rating=?, image=? WHERE id=?",
      [name, location, price, rating, image, id],
      (err) => {
        if (err) return res.status(500).json(err);
        res.json({
          success: true,
          message: "Hotel Updated",
        });
      }
    );
  } else {
    db.query(
      "UPDATE hotels SET name=?, location=?, price=?, rating=? WHERE id=?",
      [name, location, price, rating, id],
      (err) => {
        if (err) return res.status(500).json(err);
        res.json({
          success: true,
          message: "Hotel Updated",
        });
      }
    );
  }
};

export const deleteHotel=(req,res)=>{

const id=req.params.id;

db.query(

"DELETE FROM hotels WHERE id=?",

[id],

(err)=>{

if(err) return res.status(500).json(err);

res.json({

success:true,

message:"Hotel Deleted"

});

}

);

};