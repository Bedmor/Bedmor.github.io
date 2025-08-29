const alfabe = "abcçdefgğhıijklmnoöprsştuüvyz";
const tersAlfabe = alfabe.split("").reverse().join("");
let bos = "";

// Node.js için readline kullanıyoruz
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('İsminizi giriniz: ', (isim) => {
    isim = isim.toLowerCase();

    for (let harf of isim) {
        if (alfabe.includes(harf)) {
            const index = alfabe.indexOf(harf);
            bos = bos + tersAlfabe[index];
        } else {
            process.stdout.write(harf);
        }
    }

    console.log("\nTers çevrilmiş isim:", bos);
    rl.close();
});
