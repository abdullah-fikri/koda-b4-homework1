const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

let cart = [];
let orderHistory = [];

const menuList = [
  { name: "Mie Gacoan", price: 15000 },
  { name: "Mie Gacoan Lv 2", price: 15000 },
  { name: "Mie Gacoan Lv 3", price: 15000 },
  { name: "Mie Suit", price: 15000 },
  { name: "Mie Suit Lv 2", price: 15000 },
  { name: "Mie Suit Lv 3", price: 15000 },
  { name: "Udang Rambutan", price: 14000 },
  { name: "Pangsit", price: 14000 },
  { name: "Udang Keju", price: 14000 },
  { name: "Iced Tea", price: 6500 },
  { name: "Air Mineral", price: 6500 },
];

function showMainMenu() {
  console.log(`
===============================


 WELCOME TO GACOAN DELIVERY


===============================

1. Menu Makanan
2. Keranjang
3. Riwayat Pesanan
4. Keluar
   `);
  rl.question("Pilih menu (1-4): ", (answer) => {
    switch (answer) {
      case "1":
        showMenuList();
        break;
      case "2":
        handleCartProcess();
        break;
      case "3":
        showOrderHistory();
        break;
      case "4":
        console.log("\nTerima kasih telah menggunakan Gacoan Delivery!");
        rl.close();
        break;
      default:
        console.log("\nInput tidak valid. Silakan coba lagi.");
        showMainMenu();
    }
  });
}

function showMenuList() {
  console.log("\n=== Daftar Menu ===");
  for (let i = 0; i < menuList.length; i++) {
    const { name, price } = menuList[i];
    console.log(`${i + 1}. ${name} - Rp${price}`);
  }
  console.log("99. Kembali ke menu utama");

  rl.question("\nPilih nomor menu: ", (choice) => {
    const selectedIndex = parseInt(choice) - 1;

    if (choice === "99") {
      console.log("\nKembali ke menu utama...\n");
      return showMainMenu();
    }

    if (selectedIndex >= 0 && selectedIndex < menuList.length) {
      const selectedItem = menuList[selectedIndex];
      rl.question("Masukkan jumlah pesanan: ", (qtyInput) => {
        const quantity = parseInt(qtyInput);
        if (isNaN(quantity) || quantity <= 0) {
          console.log("\nJumlah tidak valid.");
          showMenuList();
        } else {
          const order = {
            ...selectedItem,
            quantity,
            subTotal: selectedItem.price * quantity,
          };
          cart = [...cart, order];
          console.log(`


Pesanan ditambahkan ke keranjang:
${order.name} x${order.quantity} = Rp${order.subTotal}
`);
          rl.question("Ingin memesan lagi? (yes/no): ", (ans) => {
            ans.toLowerCase() === "yes" ? showMenuList() : showMainMenu();
          });
        }
      });
    } else {
      console.log("\nNomor menu tidak ditemukan.");
      showMenuList();
    }
  });
}

function handleCartProcess() {
  if (cart.length === 0) {
    console.log("\nKeranjang masih kosong.");
    return showMainMenu();
  }

  console.log("\n=== Keranjang Anda ===");
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const { name, price, quantity, subTotal } = cart[i];
    console.log(
      `${
        i + 1
      }. ${name}\n   Harga: Rp${price}\n   Jumlah: ${quantity}\n   Subtotal: Rp${subTotal}\n`
    );
    total += subTotal;
  }
  console.log(`Total Pembayaran: Rp${total}`);

  rl.question("Bayar sekarang? (yes/no): ", (ans) => {
    if (ans.toLowerCase() === "yes") {
      orderHistory = [...orderHistory, ...cart];
      cart = [];
      console.log("\nPembayaran berhasil! Terima kasih atas pesanan Anda.");
      showMainMenu();
    } else {
      showMainMenu();
    }
  });
}

function showOrderHistory() {
  if (orderHistory.length === 0) {
    console.log("\nBelum ada riwayat pesanan.");
    return showMainMenu();
  }

  console.log("\n=== Riwayat Pesanan ===");
  for (let i = 0; i < orderHistory.length; i++) {
    const { name, price, quantity, subTotal } = orderHistory[i];
    console.log(
      `${
        i + 1
      }. ${name}\n   Harga: Rp${price}\n   Jumlah: ${quantity}\n   Subtotal: Rp${subTotal}\n`
    );
  }

  rl.question("Kembali ke menu utama? (yes/no): ", (ans) => {
    ans.toLowerCase() === "yes" ? showMainMenu() : showOrderHistory();
  });
}

showMainMenu();
