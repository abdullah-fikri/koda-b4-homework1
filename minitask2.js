const buah = ["semangka", " apel ", " durian ", " pepaya"]
const milikAdi = ["pisang"]

// concat() = menyalin variabel yang sudah ada dan dimasukkan kedalam variabel baru tanpa mengubah variabel yg lama
let store = buah.concat (milikAdi)
console.log(store)

// slice() = mengambil nilai dari variabel lain tapi cuma sebagian
let milikAgus = buah.slice(0,3)
console.log(milikAgus)

// sort() = mengurutkan elemen array dan mengembalikan nilai, jika berbentuk string akan diurutkan berdasarkan abjad huruf pertamanya, jika number akan diurutkan dari yg terkecil
let urut = buah.sort()
console.log(urut)

let angka = [2,1,8,5,90]
let angkaUrut = angka.sort()
console.log(angkaUrut)

// reverse() = kebalikan dari sort()
let reverse = buah.reverse()
console.log(reverse)
let angkaReverse = angka.reverse()
console.log(angkaReverse)

// replace() = mengembalikan string baru sesuai dengan apa yg digantikan
let string = 'hello koda'
let ganti = string.replace("hello", "hi")
console.log(ganti)

// split() = memecah objek string menjadi beberapa string/sub-String
let split = string.split(" ")
console.log(split)

// object assign() = menyalin semua data milik sendiri dan menyalin data milik object dan mengembalikan nilai semua data milik sendiri dan salinan data milik target
let utama = {nama: "fiki"}
let kedua = {umur: 19, bootcmp: 'koda'}
Object.assign(utama, kedua)
console.log(utama)

// object freeze() = membekukan objek sehingga tidak dapat diubah lagi
Object.freeze(utama) 

// objek seal() = menyegel objek sehingga tidak dapat ditambahkan key/properti baru namun bisa reassignment properti/key yg ada
let profile = {nama: "agus", umur: 25, sekolah: "antartika 2 sulawesi"}
Object.seal(profile)

// toExponential() = meengembalikan string yang mewakili objek angka dalam notasi eksponensial
let num = 9987659
console.log(num.toExponential(3))

// toPrecision() = mengembalikan string yg mewakili objek angka dengan posisi yg ditentukan
let num2 = 123.46567
console.log(num2.toPrecision (6))

// Math.abs() = mengembalikan nilai absolut angka. absolut angka adalah nilai non negatif 
let mtk = -100
console.log(Math.abs(mtk))

// Math.ceil() = membulatkan angka ke bilangan bulat terdekat. Mengembalikan bilangan bulat terkecil yg lebih besar dari atau sama dengan angka yang diberikan
let bilangan = 11.3
console.log(Math.ceil(bilangan))

// Math.floor() = membulatkan angka ke bilangan bulat terkecil
console.log(Math.floor(bilangan))

// Math.pow() = menghitung nilai yang dipangkat eksponen
console.log(Math.pow(2, 10))

// math.sqrt() = mengembalikan akar kuadrat suatu angka
console.log(Math.sqrt(25))

// Math.trunc() = mengembalikan bilangan bulat dan menghapus pecahannya
console.log(Math.trunc(6.9))

// getHours() = mengembalikan menit
let date = new Date()
let hour = date.getHours()
console.log('ini adalah jam ' + hour)

// getMinutes() =  mengembalikan menit
let minutes = date.getMinutes()
console.log('ini adalah menit ' + minutes)

// getSeconds() = mengembalikan detik
let seconds = date.getSeconds()
console.log('ini adalah seconds' + seconds)

// getMiliSeconds()
let miliSeconds = date.getMilliseconds()
console.log('ini adalah mili seconds' + miliSeconds)


// built in function

// parseInt() = mengubah string menjadi integer
let num3 = '19500'
num3 = parseInt(num3)
console.log(num3)

// parseFloat() = mengubah string menjadi integer dan mengembalikan pecahannya juga
let num4 = '99.9'
num4 = parseFloat(num4)
console.log(num4)

// isNan() = memeriksa apakah suatu nilai berisi is Not-a-number
let nilai = 'susu coklat'
let num5 = 12345
console.log(isNaN(nilai))
console.log(isNaN(num4))

// alert() = menampilkan pesan popup
// alert("halo javascript")

// prompt() = memunculkan popup dan menerima masukan teks dari pengguna
// promt('masukkan yang anda cari')

// console.log() = memunculkan sesuatu dalam konsol web
console.log('ini adalah contoh penggunaan console.log()')