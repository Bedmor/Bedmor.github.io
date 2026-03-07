const alfabe = "abcçdefgğhıijklmnoöprsştuüvyz";
const tersAlfabe = alfabe.split("").reverse().join("");
let bos = "";

// Node.js için readline kullanıyoruz
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cümlenizi giriniz: ', (cümle) => {
    for (let harf of cümle) {
        if (alfabe.includes(harf.toLowerCase())) {
            const index = alfabe.indexOf(harf.toLowerCase());
            if (harf.toUpperCase() === harf) {
                bos = bos + tersAlfabe[index].toUpperCase();
            } else {
                bos = bos + tersAlfabe[index];
            }
        } else {
            bos = bos + harf;
        }
    }

    console.log("\nTers çevrilmiş cümle:", bos);
    rl.close();
});
