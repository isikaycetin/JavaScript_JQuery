let buton =document.getElementById("buton");
buton.addEventListener("click",run);

function run(){
    var boy = parseFloat(document.getElementById("boy").value);
    var kilo = parseFloat(document.getElementById("kilo").value);

    var vki = kilo / ((boy / 100) * (boy / 100));
   var sonuc = "saglık durumunuz: " ;
   
    if (vki < 18.5) {
        sonuc += "  Çok zayıfsın fastfood";
    } else if (vki >= 18.5 && vki <= 25) {
        sonuc += "  Sağlıklısınız ayn devam";
    } else {
        sonuc += "  Çok kilolusunuz spora basla";
    }

    document.getElementById("VKİ").value = vki;
    document.getElementById("Sonuç").value = sonuc;    
};



function resetle() {
    document.getElementById("boy").value = "";
    document.getElementById("kilo").value = "";
    document.getElementById("VKİ").value = "";
    document.getElementById("Sonuç").value = "";
    document.getElementById("sonuc").textContent = "";
}

