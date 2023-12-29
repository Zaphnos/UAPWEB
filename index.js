const daftarBarang = [
    { kode: "001", nama: "Barang A", harga: 10000 },
    { kode: "002", nama: "Barang B", harga: 20000 },
    { kode: "003", nama: "Barang C", harga: 30000 }
];

function tampilkanDaftarBarang() {
    console.log("Daftar Barang:");
    console.log("Kode | Nama | Harga");
    for (const barang of daftarBarang) {
        console.log(`${barang.kode} | ${barang.nama} | ${barang.harga}`);
    }
    console.log();
}

function BeliBarang(){
    const KodeBarangInput = document.getElementById("KodeBarang").value;
    const BanyakBarangInput = parseInt(document.getElementById("BanyakBarang").value, 10);

    const barang = daftarBarang[KodeBarangInput];
    if (barang) {
        const totalHarga = barang.harga * BanyakBarangInput;
        const pesan = `Pembelian ${barang.nama} (${BanyakBarangInput} buah) berhasil. Total harga: ${totalHarga}. Kembalian sekarang: ${kembalian}`;
        const uangBayar = Number(prompt(pesan + "\n\nMasukkan jumlah uang yang akan dibayarkan:"));
        console.log("uangBayar:", uangBayar);
        if (!isNaN(uangBayar) && uangBayar >= totalHarga) {
            saldo -= totalHarga;
            window.alert("Terima kasih! Pembelian berhasil.");
        } else {
            window.alert("Jumlah uang tidak valid atau kurang dari total harga. Pembayaran dibatalkan.");
        }
    
    }
    
}
