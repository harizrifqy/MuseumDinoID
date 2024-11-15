// otomatis buka tab baru ketika klik order
document.getElementById('orderButton').addEventListener('click', function() {
    // Membuka halaman baru (misalnya, halaman pembayaran)
    window.location.href = 'payment.html';  // Mengarahkan ke halaman pembayaran baru
});

// Fungsi untuk memperbarui harga berdasarkan tiket yang dipilih
function updateHarga() {
    // Ambil elemen dropdown (select) berdasarkan ID
    const select = document.getElementById("inputGroupSelect04");

    // Dapatkan opsi yang dipilih dari dropdown
    const selectedOption = select.options[select.selectedIndex];

    // Ambil harga tiket dari atribut data-harga pada opsi yang dipilih
    const harga = parseInt(selectedOption.getAttribute("data-harga"));

    // Tampilkan harga tiket di elemen dengan ID "harga"
    document.getElementById("harga").textContent = harga;

    // Ambil nilai diskon dari elemen dengan ID "diskon" (dalam persen)
    const diskon = parseInt(document.getElementById("diskon").textContent);

    // Hitung total harga setelah diskon
    const total = harga - (harga * diskon / 100);

    // Tampilkan total harga di elemen dengan ID "total"
    document.getElementById("total").textContent = total;
}
