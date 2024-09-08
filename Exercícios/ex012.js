let agora = new Date();

if (agora.getHours() >= 19) {
    console.log(`Boa noite`);
} else if (agora.getHours() >= 13) {
    console.log(`Boa tarde`);
} else {
    console.log(`Bom dia`);
}
