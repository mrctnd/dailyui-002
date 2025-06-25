document.querySelector('#card-number').addEventListener('input', function (e) {
  let value = e.target.value.replace(/[^\d\s]/g, '');
  value = value.replace(/\s/g, '');
  let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
  e.target.value = formatted;
});

document.querySelector('#expiry-date').addEventListener('input', function (e) {
  let value = e.target.value.replace(/[^\d]/g, '');
  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4);
  }
  e.target.value = value.slice(0, 5);
});

document.querySelector('#cvv').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
});
