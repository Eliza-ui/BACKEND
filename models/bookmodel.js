import pool from "./db.js";

export const getAllBooks = async () => {
  const [rows] = await pool.query("SELECT * FROM tblbook");
  return rows;
};