let tura = 0;
let yazi = 0;

let para = document.querySelector(".para");
let döndür = document.querySelector("#döndür");
let sıfırla = document.querySelector("#sıfırla");

döndür.addEventListener('click', function döndür() {
    // Rastgele sayı seç, 2 ile çarp, yuvarla (0: tura, 1: yazı)
    let i = Math.floor(Math.random() * 2);

    // Animasyonu geçici olarak kapat
    para.style.animation = 'none';

    if (i == 1) {
        setTimeout(() => {
            para.style.animation = 'spin-tura 3s forwards';
        }, 100);
        tura++;
    } else {
        setTimeout(() => {
            para.style.animation = 'spin-yazi 3s forwards';
        }, 100);
        yazi++;
    }

    // İstatistikleri güncelle ve butonu devre dışı bırak
    setTimeout(updateStats, 3000);
    disableButton();
});

// İstatistikleri güncelle
function updateStats() {
    document.querySelector("#tura-count").textContent = 'Tura: ' + tura;
    document.querySelector("#yazi-count").textContent = 'Yazı: ' + yazi;
}
//Engellemk için butona bir daha basmamak için
function disableButton() {
    döndür.disabled = true;
    setTimeout(() => {
        döndür.disabled = false;
    }, 3000);
}

// Reset
sıfırla.addEventListener('click', function sıfırla() {
    para.style.animation = 'none';
    tura = 0;
    yazi = 0;
    updateStats();
});
