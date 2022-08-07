const search = document.querySelector('.search-box input');
const images = document.querySelectorAll(".image-box");
console.log(images);
search.addEventListener('keyup', (e) => {
    if(e.keyup = 'Enter'){
        let searchValue = search.value;
        let value = searchValue.toLowerCase();
        images.forEach(image => {
            if(value == image.dataset.name){
                return image.style.display = "block";
            }
            image.style.display = "none";
        });
    }
});

search.addEventListener('keyup', (e) => {
    if(search.value != ""){
        return;
    }
    images.forEach(image => {
        image.style.display = "block";
    }); 
})