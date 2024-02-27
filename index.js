document.addEventListener('DOMContentLoaded', () => {
  // количество загружаемых изображений
  const IMAGES_COUNT = 4;

  // ссылка для загрузки изображений
  const IMAGES_URL = `https://dog.ceo/api/breeds/image/random/${IMAGES_COUNT}`;

  // ссылка для загрузки списка пород
  const BREEDS_URL = "https://dog.ceo/api/breeds/list";

  // узел, в котором будет список изображений
  const imagesContainer = document.querySelector('.images')
  imagesContainer.classList.add('images__item')

  // узел, в котором будет список пород
  const breedsContainer = document.querySelector('.breeds');

  // узел кнопки обновления
  const button = document.querySelector('button');
  // сразу загружаем изображения
  function fetchAndRenderImages () {
    imagesContainer.textContent = ''
    fetch(IMAGES_URL)
    .then(res => res.json())
    .then((data) => {
    for(let i = 0; i < data.message.length; i ++){
      const image = document.createElement('img')
      image.src = data.message[i]
      imagesContainer.append(image)
    }
  })

  };
  fetchAndRenderImages();





  // загружаем список пород
  function fetchBreedsList(){
    fetch(BREEDS_URL)
    .then(res => res.json())
    .then((data)=>{
      for(let i = 0; i < data.message.length; i ++){
        const breed = document.createElement('li')
        breed.textContent = data.message[i]
        breedsContainer.append(breed)
      }
  })
  };
  fetchBreedsList()

  // еще раз загружаем изображения, если кликнули на кнопку обновления
  button.addEventListener('click', () => {
    fetchAndRenderImages();
  });

  // ТВОЙ КОД

});
