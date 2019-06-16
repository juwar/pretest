function pohon(X,Y){
    let tinggi = 0
    tinggi = X
    for(let i = 0; i < Y; i++){
        tinggi = 2 * tinggi
        tinggi = tinggi + 1
    }
    return tinggi
}

function validasi(X,Y){
    if (0 < X && 0 < Y){
        console.log(pohon(X,Y));
    } else {
        console.log('X dan Y harus lebih dari 0');
    }
}

console.log(validasi(5,2))