import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';
import Cliente from '../model/Cliente';
export default class BancoDeDados {
    private conexao: Connection | null = null;

    constructor(private config: ConnectionOptions) {}

    public async conectar(): Promise<void> {
        try {
            this.conexao = await mysql.createConnection(this.config);
            console.log('Conexão bem-sucedida!');
        } catch (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
            throw err;
        }
    }


    public async desconectar(): Promise<void> {
        if (this.conexao) {
            await this.conexao.end();
            console.log('Conexão encerrada.');
        }
    }

    public async salvarCliente(cliente:Cliente): Promise<void>{
        try{
            await this.conectar();

            const COMANDOSQL = "INSERT INTO CLIENTES (nome,endereco) VALUES (?,?)";
            let nomeCliente = cliente.getNome();
            let enderecoCliente = cliente.getEndereco();

            const [result] = await this.conexao.execute(COMANDOSQL,[nomeCliente, enderecoCliente]);
            console.log(`Cliente inserido com`);
        }catch (err) {
            console.error("Erro ao salvar o cliente:", err);
            throw err;
        }finally{
            await this.desconectar();
        }
    }

    
}

const DADOSACESSO: ConnectionOptions = {
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
