let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
addToDoButton.addEventListener('click', function() { // add butonuna tıklandığında bir fonksiyon çalıştır
    let paragraph = document.createElement('p');  // add butonuna tıklandığında bir parağraf oluşturduk
    toDoContainer.appendChild(paragraph); // oluşturduğumuz parağrafı toDoContainer'a ekledik
    // üstteki koddan sonra htmlde <div id="toDoContainer"> </div> içine <p></p> eklenmiş olacak
   for(let i = 1 ; i<= toDoContainer.childElementCount; i++)// toDoContainer'ın içindeki eleman sayısı kadar döngü oluştur 
   {
    paragraph.innerHTML = i + ":      " +  inputText.value ; // oluşturduğumuz parağrafın içine inputText'in değerini yazdırdık
    } 
    inputText.value = ''; // inputText'in değerini boşalttık
});

let clearToDoButton = document.getElementById('clearToDo'); // clear butonunu seçtik
clearToDoButton.addEventListener('click', function() { // clear butonuna tıklandığında bir fonksiyon çalıştır
    toDoContainer.innerHTML = ''; // toDoContainer'ın içini boşalttık 
});
// inputText'a yazı yazıp enter'a basınca addToDo butonuna tıklanmış gibi çalışması için

inputText.addEventListener('keyup', function(event) { // inputText'e bir tuşa basıldığında bir fonksiyon çalıştır
    if (event.key === "Enter") { // eğer basılan tuş enter ise
        addToDoButton.click(); // addToDo butonuna tıkla
    }
});

// sonradan eklenen açıklama satırı


