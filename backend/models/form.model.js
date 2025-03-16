import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    vitemail: {
        type: String,
        required: true,
    },
    query: {
        type: String,
        required: true,
    },
},{timestamps:true , collection: 'form', database: 'vitform'});

const Form = new mongoose.model("Form", formSchema);
export default Form;