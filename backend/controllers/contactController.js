const db = require("../config/db");

exports.sendMessage = (req, res) => {

  const { name, email, subject, message } = req.body;

  db.query(
    "INSERT INTO contacts(name,email,subject,message) VALUES(?,?,?,?)",
    [name, email, subject, message],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Message Sent Successfully",
      });

    }
  );

};