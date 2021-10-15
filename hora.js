let s = 3672


let hora =  parseInt(s/3600);
let resto = parseInt(s % 3600);
let minutos = parseInt(resto/60);
let segundos = parseInt(minutos%60);



console.log(`${hora}:${minutos}:${segundos}`)