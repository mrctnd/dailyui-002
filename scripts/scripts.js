// Card Number: Sadece rakam ve boşluk, her 4 karakterde bir boşluk ekle
document.querySelector('#card-number').addEventListener('input', function (e) {
  // Sadece rakamları ve boşlukları bırak
  let value = e.target.value.replace(/[^\d\s]/g, '');
  // Tüm boşlukları kaldır
  value = value.replace(/\s/g, '');
  // Her 4 karakterde bir boşluk ekle
  let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
  // Sonucu tekrar inputa yaz
  e.target.value = formatted;
});

// Expiry Date: Sadece rakam, 2. karakterden sonra '/' ekle, maksimum 5 karakter
document.querySelector('#expiry-date').addEventListener('input', function (e) {
  // Sadece rakamları bırak
  let value = e.target.value.replace(/[^\d]/g, '');
  // İlk iki karakterden sonra '/' ekle (MM/YY formatı)
  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4);
  }
  // Maksimum 5 karaktere sınırla (MM/YY)
  e.target.value = value.slice(0, 5);
});

// CVV: Sadece rakam, maksimum 3 karakter
document.querySelector('#cvv').addEventListener('input', function (e) {
  // Sadece rakamları bırak
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
});