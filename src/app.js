console.log("Merhaba Kodlama.io")

// JS type safe degildir
// let degisken tanimlamak icin kullanilir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

// const sabit degerleri tutmak icin kullanilir
const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("<ul>")


console.log(konutKredileri)
