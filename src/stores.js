import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";
const storesDb = db.collection('stores');

const theStores = {
    name: 'BenStores',
    product: {
        jeans: '👖',
        shoes: '👟',
        shirt: '👔',
        t_shirt: '👕',
        dress: '👗',
    },
    size: ' XS,S,M,L,XL,XXL ',
    addresse: ('4322, sample street'), 
    
}
// add an store
export async function addAStores() {
    const storesAdded = await db.collection('stores').insertOne(theStores);
    console.log('storesAdded ->', storesAdded)
}


// get all stores
export async function getAllStores() {
    const storesList = await db.collection('stores').find({}).toArray();
    console.table(storesList);
    console.table(storesList[0].product)
}

// GET STORE BY ID

const theStores2 = {
    name: 'bJStores',
    product: {
        jeans: '👖',
        shoes: '👟',
        shirt: '👔',
        t_shirt: '👕',
        dress: '👗',
    },
    size: ' M,L,XL,XXL ',
    addresse: ('5302, sample street'), 
    
}
export async function getStoresById(){
    const cleanId = new ObjectId('65298a593be744d4d81d55da')
   
    const findById = await storesDb.findOne({_id: cleanId})
    console.log('findById ->', findById)
}
