import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }, stars: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    }, 
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
},{
    timestamps: true
})

export default mongoose.model("Review", reviewSchema)