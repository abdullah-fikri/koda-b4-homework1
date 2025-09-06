const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
    // TODO: Log the answer in a database




let keranjang =[]
let historyBlj = []

function lobby(){
    console.log(`
        1. Menu
        2. Keranjang
        3. Histori
        4. Exit
    `)
    rl.question(' SELAMAT DATANG DI GACOAN DELIVERY ', (answer) => {
        answer = parseInt(answer)
        switch(answer){
            case 1:
                daftarMenu()
                break
            case 2 :
                prosesKeranjang()
                break
            case 3 : 
                history()
                break
            case 4 :
                rl.close()
                break
            default :
                console.log('Error')
                lobby()
        }
    })
}

lobby()

function history(){
    console.log(historyBlj)
    rl.question('Kembali ke lobby (yes/no)', (answer) => {
    if (answer === 'yes'){
        lobby()
    }else {
        history()
    }
    })
}

let menu = [
    {
        makanan: 'mie gacoan',
        harga : 15000
    },
    {
        makanan: 'mie gacoan lvl 2',
        harga : 15000
    },
    {
        makanan: 'mie gacoan lvl 3',
        harga : 15000
    },
    {
        makanan: 'mie suit',
        harga : 15000
    },
    {
        makanan: 'mie suit lvl 2',
        harga : 15000
    },
    {
        makanan: 'mie suit lvl 3',
        harga : 15000
    },
    {
        makanan: 'udang rambutan',
        harga : 14000
    },
    {
        makanan: 'pangsit',
        harga : 14000
    },
    {
        makanan: 'udang keju',
        harga : 14000
    },
    {
        makanan: 'iced tea',
        harga : 6500
    },
    {
        makanan: 'air mineral',
        harga : 6500    
    },
]
function pilihMenu (a){
    console.log(menu[a])
    rl.question('Mau berapa banyak? ', (answer) => {
        answer = parseInt(answer)
        let pilihanUsr = menu[a]
        pilihanUsr = {...pilihanUsr, ...{quantity: answer}, ...{subTotal: pilihanUsr.harga * answer}}
        keranjang = [
            ...keranjang,
            ...[pilihanUsr]
        ]
        console.log(keranjang)
        rl.question('mau pesan lagi? (yes/no) ', (answer) => {
            if (answer === 'yes' ){
                daftarMenu()
            }else {
                lobby()
            }
        })
    })
}

function prosesKeranjang(){
    let total = 0
    for (let i = 0; keranjang[i] !== undefined; i++){
        total += keranjang[i].subTotal
    }
    console.log(keranjang)
    console.log(`total : ${total}`)
    rl.question('Bayar Sekarang? (yes/no)', (answer) => {
        if(answer === 'yes'){
            historyBlj = [
                ...historyBlj,
                ...keranjang
            ]
            keranjang = []
            rl.question('Pembayaran berhasil. \n Silahkan tunggu dan selamat menikmati makanan & minuman anda', () => {
                lobby()
            })
        }else{
            lobby()
        }
    })
}

function daftarMenu(){
        console.log(menu)
        rl.question('Mau yang mana?', (answer) => {
        answer = parseInt(answer)
        switch(answer){
            case 1 :
                pilihMenu(0) 
                break
            case 2 : 
                pilihMenu(1)
                break
            case 3 : 
                pilihMenu(2)
                break
            case 4 : 
                pilihMenu(3)
                break
            case 5 : 
                pilihMenu(4)
                break
            case 6 : 
                pilihMenu(5)
                break
            case 7 : 
                pilihMenu(6)
                break
            case 8 : 
                pilihMenu(7)
                break
            case 9 : 
                pilihMenu(8)
                break
            case 10 : 
                pilihMenu(9)
                break
            case 11 : 
                pilihMenu(10)
                break
            default: 
                console.log('Error')
                daftarMenu()
                break
        }
    })
}