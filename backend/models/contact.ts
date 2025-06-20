
import { db } from "../db";
import { RowDataPacket } from "mysql2";
import { Contact } from "../types/Contact";
// Get all posts
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM contact`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err); 
    }
    const rows = <RowDataPacket[]>result;
    const messages: Contact[] = [];
    rows.forEach((row) => {
      const message: Contact = {
        id: row.id,
        nume: row.nume,
        prenume: row.prenume,
        email: row.email,
        data_adaugare: row.data_adaugare,
        mesaj: row.mesaj
      };
      messages.push(message);
    });
    callback(null, messages);
  });
};