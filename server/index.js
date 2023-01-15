import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json({ limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true }));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://sainyamagg:test123@website1.jcg5tgf.mongodb.net/tree?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5556;

mongoose.set("strictQuery", false);

mongoose.connect(CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    });
})
.catch((err) => {
    console.log(err.message);
});

