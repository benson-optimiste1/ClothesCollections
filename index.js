import { closeClient } from "./src/connectDb.js";
//import { addAClothes, getAllClothes, updateOneClothe } from "./src/Clothes.js";

import { addAStores, getAllStores, getStoresById } from "./src/stores.js";
//await addAStores();
//await getAllStores();
//await addAStores2(),
await getStoresById();
//await addAClothes();
//await getAllClothes();
//await updateOneClothe();


closeClient();
