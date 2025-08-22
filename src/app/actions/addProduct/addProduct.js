"use server"
import dbConnect, { collectionNameObj } from "../../../lib/dbConnect";

export const addProduct = async (payload) => {
  const productCollection = dbConnect(collectionNameObj.servicesCollection);


if(payload){
  const result = await productCollection.insertOne(payload);
  result.insertedId = result.insertedId.toString()
  return result;
}
 

  return null;
};