const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose')
const graphql=require('express-graphql');

const schema=require('./schema/schema');

const app=express();
app.use(cors());

const connection="mongodb+srv://"+process.argv[2]+":"+process.argv[3]+"@cluster0.5faxc.mongodb.net/Restaurant?retryWrites=true&w=majority";

mongoose.connect(connection,{useNewUrlParser: true,useUnifiedTopology: true});

app.use('/graphql',graphql.graphqlHTTP({
    schema: schema,
    graphiql:true
}))
app.get("/",(req,res) => {
    res.send("Hello World!");
})



app.listen(5000,() => {
    console.log("Running on port 5000");
})