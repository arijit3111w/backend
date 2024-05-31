import mongoose from "mongoose"

const orderItemSchema= new mongoose.Schema({
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    required: true,
  },
})
const orderSchema = mongoose.Schema(
  {
    orderPrice:{
      type: Number,
      required:true,
    },
    customer:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    OrderItems:{
      type:[orderItemSchema],
    },
    address:{
      type:String,
      required:true ,
    },
    status:{
      type:String,
      enum:["PENDING","CANCELLED","DELIVERED"], // required field but only this     
      default:"PENDING",                        // options can be used
      
    },

  },
  {timestamps:true})

export const Order = mongoose.model("Order",orderSchema)
