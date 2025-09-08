const angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
const genap = angka.filter(function(nilai){
    return nilai % 2 == 0;
})
// console.log(genap)

// cara lama
let genap1 = []
for(let i = 0; i < angka.length; i++){
    if(angka[i] % 2 == 0){
        genap1[genap1.length] = angka[i] 
    }

}
console.log(genap1)