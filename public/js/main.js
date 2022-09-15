
const buyerBtn = document.getElementById('buyerBtn');
const sellerBtn = document.getElementById('sellerBtn');


buyerBtn.classList.add('active');

buyerBtn.addEventListener('click', ()=> {
    buyerBtn.classList.add('active');
    sellerBtn.classList.remove('active');
})

sellerBtn.addEventListener('click', ()=> {
    
    buyerBtn.classList.remove('active');
    sellerBtn.classList.add('active');

})

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

const container = document.getElementById('map').innerText = map;

const exploreBtn = document.getElementById('exploreBtn');

exploreBtn.onclick = (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.open('GET', '../controllers/location.php', true);

    xhr.onreadystatechange = ()=> {
        if(xhr.status === 200)
        {
            console.log(xhr.responseText);
        }
        else 
        {
            console.log(xhr.responseText);
        }
    }

    xhr.send();

}