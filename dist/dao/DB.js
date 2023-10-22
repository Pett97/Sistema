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
const promise_1 = __importDefault(require("mysql2/promise"));
class BancoDeDados {
    constructor(config) {
        this.config = config;
        this.conexao = null;
    }
    conectar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.conexao = yield promise_1.default.createConnection(this.config);
                console.log('Conexão bem-sucedida!');
            }
            catch (err) {
                console.error('Erro ao conectar ao banco de dados:', err);
                throw err;
            }
        });
    }
    desconectar() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.conexao) {
                yield this.conexao.end();
                console.log('Conexão encerrada.');
            }
        });
    }
    salvarCliente(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.conectar();
                const COMANDOSQL = "INSERT INTO CLIENTES (nome,endereco) VALUES (?,?)";
                let nomeCliente = cliente.getNome();
                let enderecoCliente = cliente.getEndereco();
                const [result] = yield this.conexao.execute(COMANDOSQL, [nomeCliente, enderecoCliente]);
                console.log(`Cliente inserido com`);
            }
            catch (err) {
                console.error("Erro ao salvar o cliente:", err);
                throw err;
            }
            finally {
                yield this.desconectar();
            }
        });
    }
}
exports.default = BancoDeDados;
const DADOSACESSO = {
    host: 'localhost',
    user: 'peterson',
    password: 'P@ndora9124',
    database: 'TESTETS',
};
//const banco = new BancoDeDados(DADOSACESSO);
//let x = new Cliente("TESTE","turvo");
// Exemplo de uso
//anco.conectar();
//banco.desconectar();
//banco.salvarCliente(x);
