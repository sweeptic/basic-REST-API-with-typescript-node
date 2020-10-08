"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos")); //always pick the default export from this file 
const app = express_1.default();
const port = 3000;
app.use(body_parser_1.default.json());
app.use(todos_1.default);
app.listen({ port: 8080 });
