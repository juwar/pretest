function cetak(alastinggi){
    let prima =['2','3','5','7','11',"13",'17','23','31']
    let lihat =''
    for(let i = 1; i <= alastinggi; i++){
        for(let l = 0; l < i; l++){
            lihat += prima[l] + ' '
        }
        lihat += '\n'
    }

    return lihat
}

function validasi(nilai){
    if (0 < nilai && nilai < 10){
        console.log(cetak(nilai));
    } else {
        console.log('Angka harus lebih dari 0 dan kurang dari 10');
    }
}

console.log(validasi(5))