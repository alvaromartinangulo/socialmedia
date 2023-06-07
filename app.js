const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

console.log(uri);

const client = new MongoClient(uri);
const dbname = "socialmedia";
const collectionName = "user";

const userCollection = client.db(dbname).collection(collectionName)

const connectToDataBase = async () =>{
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    }
}

const main = async () =>{
    try{
        await connectToDataBase();
    } catch(err){
        console.error(`Error connecting to the database: ${err}`)
    } finally{
        await client.close();
    }
}

main();