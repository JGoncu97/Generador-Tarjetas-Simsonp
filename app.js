const simpsons=[];
const listCard = document.getElementById('cardContainer');

function getCardData(){
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      simpsons.push(...data);
      renderProducts()
      
    })
    .catch(err => console.error(err));

}

let counter=0;

  const cardSoloApi= document.getElementById('cardSolo');
  cardSoloApi.addEventListener('click',getCardData);

  const cardMultiApi= document.getElementById('cardMulti');
cardMultiApi,addEventListener('click',generatorMultiCard(counter));

function generatorMultiCard(counter){

   counter=parseInt(prompt('¿Cuantas tarjetas desea crear?'));

  for(let i=0; i<counter; i++){
    getCardData()
  }
  

}



  function generatorCard(data) {
    const containerCardApi=document.createElement('div');
    containerCardApi.classList.add('card');
   

    const characterName=document.createElement('h3');
    characterName.textContent=`${data.character}`

    const characterImg=document.createElement('img');
    characterImg.src=data.image;
    characterImg.classList.add('image-card');

    const characterQuote= document.createElement('p');
    characterQuote.textContent=data.quote

    containerCardApi.appendChild(characterName);
    containerCardApi.appendChild(characterImg);
    containerCardApi.appendChild(characterQuote);

    listCard.appendChild(containerCardApi);
    console.log(listCard);
    

  }

  function renderProducts() {
    listCard.innerHTML='';
    simpsons.forEach(simpson => generatorCard(simpson));
}

renderProducts()
