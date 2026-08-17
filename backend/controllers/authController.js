import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    db.query(
      "SELECT * FROM users WHERE email=?",
      [email],
      async (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.length > 0) {
          return res.status(400).json({
            message: "Email already exists",
          });
        }

        const hash = await bcrypt.hash(password, 10);

        db.query(
          "INSERT INTO users(name,email,password) VALUES(?,?,?)",
          [name, email, hash],
          (err) => {
            if (err) return res.status(500).json(err);

            res.json({
              success: true,
              message: "Registration Successful",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length === 0) {
        return res.status(404).json({
          message: "User Not Found",
        });
      }

      const user = result[0];

      const match = await bcrypt.compare(
        password,
        user.password
      );

      if (!match) {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      res.json({
        success: true,
        token,
        user,
      });
    }
  );
};

export const getProfile = (req, res) => {
  db.query(
    "SELECT id,name,email FROM users WHERE id=?",
    [req.user.id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result[0]);
    }
  );
};