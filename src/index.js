var Xp = parseInt(prompt("Digite seu Xp"))
var Name = prompt("Digite o nome do jogador")
var Level = ""
if (Xp < 1000) {
    Level = "Ferro"
}
else if (Xp > 1000 && Xp < 2001) {
    Level = "Bronze"
}
else if (Xp > 2000 && Xp < 5001) {
    Level = "Prata"
}

console.log("O Herói de nome:" + nome + "está no nível de " + Level)