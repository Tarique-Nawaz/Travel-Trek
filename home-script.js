const textElement = document.getElementById('discoverText');  
const fullText = 'Discover The World ';  
let index = 0;  

function typeText() {  
    textElement.innerHTML = fullText.substring(0, index) + (index === fullText.length ? '' : '');  
    index = (index + 1) % (fullText.length + 1);  
}  
setInterval(typeText, 200);

// part one code end


// part two code start

let currentIndex = 0;  
const imageContainers = [  
    document.querySelector('#imageContainer'),  
    document.querySelector('#imageContainer2'),  
    document.querySelector('#imageContainer3')  
];  

function showImage(index) {  
    imageContainers.forEach(container => {  
        const images = container.querySelectorAll('img');  
        images.forEach((img, i) => {  
            img.classList.add('hidden'); 
            if (i === index) {  
                img.classList.remove('hidden'); 
            }  
        });  
    });  
}  

function nextImage() {  
    currentIndex = (currentIndex + 1) % imageContainers[0].querySelectorAll('img').length; 
    showImage(currentIndex);  
}  


setInterval(nextImage, 2000);  

showImage(currentIndex);


