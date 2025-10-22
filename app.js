import express from "express";
const app = express();

const port =3000;

//middleware
app.use(express.json());

try{
app.listen(port,() => {
    console.log('Listening port 3000... ');
});

}catch(e){
    console.log(e);
}

app.get('/', async(request, response)=>{
    response.status(200).json({message: "Hello there I am Isay"})
});