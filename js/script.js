/* console.log("aqui está um texto");

let nome ="Vinícius", idade = 20;

console.log(`seu nome é ${nome} e sua ${idade} é`); 

let suaIdade = prompt ("Sua Idade: ")

if (suaIdade >= 18) {
    console.log ("Você pode entrar!");
    
}    else {
        console.log("Acesso negado!");

} */

    function pessoa (nome, idade){
        this.nome = nome;
        this.idade = idade;

        return console.log(`Olá ${nome}, sua idade é ${idade}. \n Seja bem-vindo!`);
    }

    let nome = prompt("Digite seu nome: ");
    let idade = prompt("Digite sua idade: ");
    
    console.log(pessoa("Vinícius", 20));

    let numero = 20

    function parImpar (numero){
        let numero = prompt ("Digite um número: ");

        if(numero % 2 == 0){
            let numero = 10;
            console.log("É par!");
            console.log(numero);
        }else{
            console.log("É impar!");
        }
    }

    parImpar(numero);
    console.log(numero);

    // Function Arrow

    function potencia (numero){
        return numero * numero;
    }

    console.log(potencia(6));