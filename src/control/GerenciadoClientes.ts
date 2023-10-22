import Cliente from "../model/Cliente";
import BancoDeDados from "../dao/DB";

const DADOSACESSO = {
    host: 'localhost',
    user: 'peterson',
    password: 'P@ndora9124',
    database: 'TESTETS',
};

export default class GerenciadorClientes {
    private db: BancoDeDados; 


    constructor() {
        this.db = new BancoDeDados(DADOSACESSO); 
    }

    public  async criarNovoCliente(nome:string,endereco:string){
        let c:Cliente = new Cliente(nome, endereco);
        console.log(c);
        this.db.salvarCliente(c);
    }

    
}

let GC = new GerenciadorClientes();

GC.criarNovoCliente("ADA","capcom");
