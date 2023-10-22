"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("../model/Cliente"));
const DB_1 = __importDefault(require("../dao/DB"));
const DADOSACESSO = {
    host: 'localhost',
    user: 'peterson',
    password: 'P@ndora9124',
    database: 'TESTETS',
};
class GerenciadorClientes {
    constructor() {
        this.db = new DB_1.default(DADOSACESSO);
    }
    criarNovoCliente(nome, endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            let c = new Cliente_1.default(nome, endereco);
            console.log(c);
            this.db.salvarCliente(c);
        });
    }
}
exports.default = GerenciadorClientes;
//let GC = new GerenciadorClientes();
//GC.criarNovoCliente("ADA", "capcom");
