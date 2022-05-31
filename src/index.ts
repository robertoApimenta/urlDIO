import express, { Request, Response } from 'express';
import { URLController } from "./controller/URLController";
import { MongoConn } from './db/MongoConn';

const app = express();
app.use(express.json());

const db = new MongoConn;
db.connect();

app.get('/home', (req: Request, res: Response) => {
    res.send({
        msg: 'Mensagem home',
    });
});

const urlController = new URLController();
app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);

app.listen(5000, () => {
    console.log('rodando na porta 5000 teste dev');
});