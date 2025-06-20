import { RowDataPacket } from "mysql2";
import { db } from "../db";
import { Contact } from "../types/Contact";

// Returnează doar mesajele din tabela contact


export const findAllMessages = (callback: Function) => {
  const queryString = `SELECT mesaj FROM contact`;
  db.query<RowDataPacket[]>(queryString, (err, rows) => {
    if (err) {
      return callback(err);
    }
    // rows este deja RowDataPacket[]
    const messages = rows.map((row) => ({ mesaj: row.mesaj }));
    callback(null, messages);
  });
};