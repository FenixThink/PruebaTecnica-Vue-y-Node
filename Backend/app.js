import Express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import festivalRouter from './src/routes/festivals.routes.js';  

const app = Express();

app.use(cors());
app.options('*', cors());

app.use(Express.json());
app.use(festivalRouter);
const url = 'http://localhost:5173';
app.listen(8000, () => {
    console.log(`Listening of Port: 8000`);
  })

const uri = "mongodb+srv://root:IzP1UypHEOnui4iF@cluster0.ithkbzf.mongodb.net/prueba_tecnica";
mongoose.set('strictQuery', true);
mongoose.connect(uri).then(() => console.log('Connected to mongo atlas'))
  .catch(e => console.log(e))
