// import { model, models, Schema } from 'mongoose';

// const codeSchema = Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
//   code: {
//     type: String,
//     required: true,
//   }, 
//   tags: {
//     type: [String],
//     default: [],
//   }, 
  
// });
 
// export const Code = models?.Keyword || model('Code', codeSchema);
 
import { model, models, Schema } from 'mongoose';

const codeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  }, 
  category: {
    type: String,
    required: true,
  },
  owner:{ 
    type:String,
    required: true,
  }
},{
  timestamps: true});
 
export const Code = models?.Code || model('Code', codeSchema);
