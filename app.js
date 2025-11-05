import express from 'express';
import 'dotenv/config.js';
import studentRouters from './routers/studentRouters.js';
import bookRouters from './routers/bookRouters.js';


const app = express();

app.use(express.json());
try{
app.listen (process.env.PORT || 3000, () => {
    console.log (`Listening to port ${process.env.PORT || 3000}...`);
     
});

}catch(e) {
    console.log(e); 

}

app.use('/book', bookRouters);
app.use('/student', studentRouters);
