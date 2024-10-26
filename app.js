const simpsons=[];
const listCard = document.getElementById('cardContainer');

const searchInput =document.getElementById('searchCard')

searchInput.addEventListener('input',filterCards());
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


  const btnClean=document.getElementById('removeAll');
  btnClean.addEventListener('click',cleanList)
  const cardSoloApi= document.getElementById('cardSolo');
  cardSoloApi.addEventListener('click',getCardData);
  let counter=0;
  const cardMultiApi= document.getElementById('cardMulti');
  cardMultiApi.addEventListener('click',generatorMultiCard);

  function cleanList(){
    
    listCard.innerHTML='';
    simpsons.length=0;
  }

function generatorMultiCard(counter){

   counter=parseInt(prompt('¿Cuantas tarjetas desea crear?'));

  for(let i=0; i<counter; i++){
    getCardData();
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

function filterCards(){
   const searchTerm= searchInput.value.toLowerCase();
  listCard.innerHTML='';

  const filteredSimpsons= simpsons.filter(simpson =>
    simpson.character.toLowerCase().includes(searchTerm)
  );

  filteredSimpsons.forEach(simpson =>generatorCard(simpson));
}

renderProducts()