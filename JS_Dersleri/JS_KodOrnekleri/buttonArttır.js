var arayuz = document.getElementById("arayuz");

document.addEventListener("DOMContentLoaded", function(){
   
   var sayac = 0;
   arayuz.innerHTML= sayac;

  document.getElementById("arttır").addEventListener("click", function() {
    sayac++;
   guncelle();
  });

  document.getElementById("azalt").addEventListener("click", function() {
    sayac--;
   guncelle();
  });

  function guncelle() {
    
    
    if (sayac > 0) {
      arayuz.style.backgroundColor = "red";
    } else if (sayac < 0) {
      arayuz.style.backgroundColor = "black";
    } else {
      arayuz.style.backgroundColor = "lightblue";
    }

    arayuz.innerHTML = sayac;
  }

  // "arayuz" elementine tıklandığında yapılacak işlemler
  arayuz.addEventListener('click', function() {
    if (sayac % 2 === 0 ) {
      alert(sayac + ' Sayısı Çifttir ');
    } else {
      alert( sayac +' Sayısı Tektir');
    }
  });

});
