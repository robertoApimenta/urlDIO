import mongoose from "mongoose";
import { config } from "../config/Constants";

export class MongoConn {
  public async connect(): Promise<void> {
    try {
        await mongoose.connect(config.MONGO_CONN);
        console.log('conn db');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
  }
}
