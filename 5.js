function pencarian(string,kata){
    let a = string.length
    let b = 0
    let c = kata.length
    let hasil = 0
    let balik = ''
    

    for (let i = 0; i < a; i++){
        if (string.slice(b+i,c+i) == kata ){
            hasil++
        }

        balik = string.split('').reverse().join('')
        if (balik.slice(b+i,c+i) == kata ){
            hasil++
        }
    }

    return hasil++
}

console.log(pencarian('banananana','nana'))