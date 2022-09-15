
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