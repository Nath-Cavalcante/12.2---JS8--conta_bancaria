import leia = require("readline-sync");
import { Colors } from './src/util/Colors';
import { Conta } from './src/model/Conta'; //updade de Conta

export function main (){

    let opcao: number;
        const conta: Conta = new Conta (1, 123, 1, "Nathalia", 10000);
        conta.visualizar();
        conta.sacar(10500);
        conta.visualizar();
        conta.depositar(5000);
        conta.visualizar();

    while (true){
        console.log(Colors.bg.black, Colors.fg.yellow,
        "\n\n*******************************************");
        console.log("                                           ");
        console.log("            BANCO DO BRAZIL COM Z          ");
        console.log("                                           ");
        console.log("*******************************************");
        console.log("                                           ");
        console.log("    1 - Criar conta                        ");
        console.log("    2 - Listar todas as contas             ");
        console.log("    3 - Buscar conta por numero            ");
        console.log("    4 - Atualizar dados da conta           ");
        console.log("    5 - Apagar conta                       ");
        console.log("    6 - Sacar                              ");
        console.log("    7 - Depositar                          ");
        console.log("    8 - Transferir valores entre contas    ");
        console.log("    9 - Sair                               ");
        console.log("                                           ");
        console.log("*******************************************");
        console.log("                                           ",  Colors.reset);

        console.log(Colors.fg.whitestrong,
            "Entre com a opção desejada: ", Colors.reset);
        opcao = leia.questionInt("");

        if (opcao == 9){
            console.log (Colors.fg.greenstrong,
                "\n Banco do Brazil com Z - O seu futuro começa aqui!");
            process.exit(0);
        }

        switch (opcao){
            case 1:
                console.log(Colors.fg.whitestrong,
                    "\n\nCriar conta\n\n", Colors.reset);
                break;
            
            case 2:
                console.log(Colors.fg.whitestrong,
                    "\n\nListar todas as contas\n\n", Colors.reset);
                break;
            
            case 3:
                console.log(Colors.fg.whitestrong,
                    "\n\nConsultar dados da conta - por número\n\n", Colors.reset);
                break;
        
            case 4:
                console.log(Colors.fg.whitestrong,
                    "\n\nAtualizar dados da conta\n\n", Colors.reset);
                break;

            case 5:
                console.log(Colors.fg.whitestrong,
                    "\n\nApagar uma conta\n\n", Colors.reset);
                break;
                       
            case 6:
                console.log(Colors.fg.whitestrong,
                    "\n\nSaque\n\n", Colors.reset);
                break;
                                       
            case 7:
                console.log(Colors.fg.whitestrong,
                    "\n\nDeposito\n\n", Colors.reset);
                break;
                                       
            case 8:
                console.log(Colors.fg.whitestrong,
                    "\n\nTransferência entre contas\n\n", Colors.reset);
                break;
                default:
                   console.log(Colors.fg.whitestrong,
                    "\nOpção inválida!\n", Colors.reset);
                    keyPress()
                   break;
        }
        
    }
}

function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}
main();