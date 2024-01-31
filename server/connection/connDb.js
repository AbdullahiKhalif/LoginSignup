import mongoose from 'mongoose';
import { dbUrl } from '../config/config.js';

const connectToMongo = async() => {
    try{
        const conn = mongoose.connect(dbUrl);
        console.log(`Successfully connected ✔`)

    }catch(err){
        console.log(`NOT CONNECT TO THE DATABASE , ${err}`)
    }
}
export default connectToMongo;