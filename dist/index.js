"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const URLController_1 = require("./controller/URLController");
const MongoConn_1 = require("./db/MongoConn");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const db = new MongoConn_1.MongoConn;
db.connect();
app.get('/home', (req, res) => {
    res.send({
        msg: 'Mensagem home',
    });
});
const urlController = new URLController_1.URLController();
app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);
app.listen(5000, () => {
    console.log('rodando na porta 5000 teste dev');
});
//# sourceMappingURL=index.js.map