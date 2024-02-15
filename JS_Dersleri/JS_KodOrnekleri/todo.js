const inputDiv = document.querySelector(".inputDiv");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const contentDiv = document.querySelector(".contentDiv");
const hepsiSil = document.querySelector("#hepsiSil");

button.addEventListener('click', git);  // clickleyince git fonksiyonuna git--

input.addEventListener('keyup', function key(event) {
    if (event.key === 'Enter') {
        git();
    }
});
function git() {
    
    if (input.value !== '') {
        var paragraf = document.createElement("p");
        paragraf.innerText =input.value;
         
       var tamam = document.createElement("button");
       tamam.classList.add('tamam');
       tamam.innerHTML = '<i class="fa-solid fa-check"></i>';

       var clear = document.createElement("button");
       clear.classList.add('delete');
       clear.innerHTML = 'Sil <i class="fa-solid fa-trash"></i>';

       clear.addEventListener('click', function() {
        paragraf.remove();
    });
    
       tamam.addEventListener('click',function(){
          paragraf.style.textDecoration= 'line-through';
       })
       paragraf.appendChild(clear);
       contentDiv.appendChild(paragraf); 
       paragraf.appendChild(tamam);

       input.value = '';    // yazdıktan sonra temizle

       hepsiSil.addEventListener('click',function hepsiSil() {
              paragraf.remove();
       });

    }else {
        alert('Lütfen Todo Giriniz');
    }
}
