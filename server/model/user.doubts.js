import {Schema , model} from 'mongoose';

const DoubtsSchema = new Schema({
    doubt : {
        type : String,
        required : true,
    },
    user:{
        type :  Schema.Types.ObjectId,
        ref : 'user',
       // required : true,
    }
},
{
   timestamps:true,
})

const Doubts = model('doubt', DoubtsSchema);

export default Doubts;
