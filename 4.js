function shortir(){
    const array = [6,22,34,15,2,13,26,57,42,32]
    const panjang = array.length

    naik = array.sort((a, b) => a > b ? 1 : -1)
    let a = 'Data Terkecil : ' + naik[0] + '\n'
    let b = 'Data Terbesar : ' + naik[(panjang - 1)] + '\n'

    let c = 'Ascending Sort : '
    for(let i = 0; i < panjang; i++){
        c += array[i] + ', '
    }
    c += '\n'

    turun = array.sort((a, b) => a > b ? -1 : 1)
    let  d = 'Descending Sort : '
    for(let i = 0; i < panjang; i++){
        d += array[i] + ', '
    }
    d += '\n'


    let hasil = a + b + c + d
    return hasil
}

console.log(shortir())