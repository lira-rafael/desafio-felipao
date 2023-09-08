// Variáveis
let nomeHeroi = "Yusuke Urameshi"
let pontosXp = 13.000

// EStrutura de desição
let nivelHeroi = 0

if (pontosXp < 1.000) {
    nivelHeroi = "Ferro";
} else if (pontosXp >= 1.001 && pontosXp <= 2.000){
    nivelHeroi = "Bronze";
} else if (pontosXp >= 2.001 && pontosXp <= 5.000) {
    nivelHeroi = "Prata";
} else if (pontosXp >= 6.000 && pontosXp <= 7.000) {
    nivelHeroi = "Ouro";
} else if (pontosXp >= 7001 && pontosXp <= 8.000) {
    nivelHeroi = "Platina Diamante";
} else if (pontosXp >= 8.001 && pontosXp <= 9.000) {
    nivelHeroi = "Ascendente";
} else if (pontosXp >= 9.001 && pontosXp <= 10.000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante"
}

//Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`)