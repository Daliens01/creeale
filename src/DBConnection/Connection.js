import mongoose from "mongoose"

 const ConnectionDB = async() =>{
   try {
    await mongoose.connect(
        "mongodb+srv://ortizbarahona2:PASSwrd5618@cluster0.b7yn7et.mongodb.net/?retryWrites=true&w=majority"
    )
    console.log("DB CONNECTED");
   } catch (error) {
    console.log(error);
   }
}
export {ConnectionDB}