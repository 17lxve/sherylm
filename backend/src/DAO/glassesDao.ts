import mongoose, { Document } from 'mongoose'
import { glassesModel } from '../models'

class glassesDao {
  async getGlasses() {
    return await mongoose.connection.db.collection('glasses').find().toArray()
  }
  async getSomeGlasses(num: number) {
    let arr: object[] = []
    //@ts-ignore
    const curr_count = await mongoose.connection.db.collection('counters').find().toArray()
    const cc = curr_count[0].sequence_value
    for (let i = 0; i < num; i++) {
      //@ts-ignore
      const n = await mongoose.connection.db
        .collection('glasses')
        .findOne({ _id: Math.floor(Math.random() * cc) })
      if (n != null) {
        arr.push(n)
      }
    }
    return arr
  }
}

export default glassesDao
