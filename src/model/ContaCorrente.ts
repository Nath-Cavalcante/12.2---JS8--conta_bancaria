import { Conta } from './Conta';
import { Colors } from './Colors';

export class ContaCorrente extends Conta{
    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number,
         titular: string, saldo: number,limite: number){
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }

    public get limite(){
        return this._limite;
    }public set limite(limite: number){
        this._limite = limite;
    }

    public sacar(valor: number): boolean {
        if ((this.saldo + this._limite) < valor){
            console.log(Colors.fg.redstrong,"\n Saldo insuficiente", Colors.reset);
            return false;
        }

        this.saldo = this.saldo = valor;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(Colors.fg.yellowstrong,"Limite: " + this._limite.toFixed(2), Colors.reset);
    }
}
