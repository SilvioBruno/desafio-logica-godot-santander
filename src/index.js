const prompt = require('prompt-sync')();

var N = parseInt(prompt("Insira o número de players que queira saber o Xp "))
var Level = ""

    for (var i = 0 ; i < N ; i++) {
        var Xp = parseInt(prompt("Digite seu Xp: "))
        var Name = prompt("Digite o nome do jogador: ")

    if (Xp < 1000) {
        Level = "Ferro"
    }
    else if (Xp > 1000 && Xp < 2001) {
        Level = "Bronze"
    }
    else if (Xp > 2000 && Xp < 5001) {
        Level = "Prata"
    }
    else if (Xp > 5000 && Xp < 7001) {
        Level = "Ouro"
    }
    else if (Xp > 7000 && Xp < 8001) {
        Level = "Platina"
    }
    else if (Xp > 8000 && Xp < 9001){
        Level = "Ascendente"
    }
    else if (Xp > 9000 && Xp < 10001) {
        Level = "Imortal"
    }
    else{
        Level = "Radiante"
    }
    
        console.log("O Herói de nome: " + Name + " está no nível de " + Level)
}




