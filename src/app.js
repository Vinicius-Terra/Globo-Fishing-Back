import express from 'express';
import router from './routes/index.js';
import cors from 'cors';

//Starting the server 
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT|| 5000, () => {
    console.log(`Server is runing.`);
});