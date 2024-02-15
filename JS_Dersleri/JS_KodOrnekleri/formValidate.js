function validateForm() {
            
    let adSoyad = document.getElementById('ad-soyad').value;
    let email = document.getElementById('email').value;
    let sifre = document.getElementById('sifre').value;
    let sifreTekrar = document.getElementById('sifre-tekrar').value;
    let postaKodu = document.getElementById('posta-kodu').value;
    let sehir = document.getElementById('sehir').value;

    if(sifre.length<5){
        alert("sifre 5 karakterden kısa olmamalı");
        return;
    }

    if (sifre !== sifreTekrar) {
        alert('Girilen şifreler uyuşmuyor.');
        return;
    }

    if (postaKodu.length !== 5 || isNaN(postaKodu)) {
        alert('Geçerli bir posta kodu giriniz (5 karakter).');
        return;
    }

    if (sehir === '0') {
        alert('Lütfen bir şehir seçiniz.');
        return;
    }

    alert('Kaydınız başarılı bir şekilde Oluşturuldu.');
}