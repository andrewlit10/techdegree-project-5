


// Variables 
baguetteBox.run('.gallery');
let input = document.getElementById("search");
let filter = input.value.toLowerCase();

// Event Listeners 
input.addEventListener("keyup", filterPhotos);
input.addEventListener("keyup", lowercaseInput);

function lowercaseInput() {
  input.value = input.value.toLowerCase();
}

/* Search Function */

function photoSearch() { 
    let input = document.getElementById('search').value;
    let a = document.getElementsByTagName('a');
    input = input.toLowerCase(); 
     
    
    for (i = 0; i < a.length; i++) { 
        if (!a[i].getAttribute('data-caption').toLowerCase().includes(input)) { 
            a[i].style.display="none"; 
        } else { 
            a[i].style.display="";				 
            } 
     } 
} 