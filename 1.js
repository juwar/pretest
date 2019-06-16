function hitung(nilai){
    const harga = 2500
    let dapat = nilai / harga
    let sisa = dapat % 4
    let bonus = (dapat - sisa) / 4
    let hasil = dapat + bonus 
    return hasil
}

console.log(hitung(50000))