import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";

const app = express();
const PORT = 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Api Working');
});

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
})