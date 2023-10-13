import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";
const clothesDb = db.collection('clothes');

const theClothes = {
    brand: 'Louis Vuiton',
    type: 'Shirt',
    color: 'Green',
    size: 'L',
    quality: 'Coton',
    origin: 'France',
}

// add an item
export async function addAClothes() {
    const clothesAdded = await db.collection('clothes').insertOne(theClothes);
    console.log('clothesAdded ->', clothesAdded)
}

// Get All items
export async function getAllClothes() {
    const clothesList = await db.collection('clothes').find({}).toArray();
    console.table(clothesList);
}

// Update item
export async function updateOneClothe(){
    const cleanId = new ObjectId('652961ad3f0087ae92689c75')
    const dataToUpdate = { color: 'blue'}
    const updatedClothe = await clothesDb.findOneAndUpdate({_id: cleanId}, {$set: dataToUpdate})
    console.log('updateClothe ->',updatedClothe)
}