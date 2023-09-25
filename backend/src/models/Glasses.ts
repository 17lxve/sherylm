import mongoose from 'mongoose'

const glasses = {
  _id: Number,
  name: String,
  colors: [String],
  picture: String
}

const glassesSchema = new mongoose.Schema(glasses, { collection: 'glasses' })
const glassesModel = mongoose.model('Glasses', glassesSchema)
export default glassesModel
