function convert(nilai){
    let hasil = ''
    for(let i = 0; i < nilai; i++){
        
        if( nilai % 2 == 0){
            hasil += '0'
            nilai = nilai / 2
            if(nilai == 1){
                hasil += '1'
            }
        } else {
            hasil += '1'
            nilai = (nilai - 1) / 2
            if(nilai == 1){
                hasil += '1'
            }
        }
    }

    hasil = hasil.split('').reverse().join('')

    return hasil
}

console.log(convert(12))