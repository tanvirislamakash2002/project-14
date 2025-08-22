
"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "../../../lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);

  const { email, password, name } = payload;
  if (!email || !password) return null;

  const user = await userCollection.findOne({ email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;

    const result = await userCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString()
    return result;
  }

  return null;
};
