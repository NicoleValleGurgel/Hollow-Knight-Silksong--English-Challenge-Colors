var engine = {
  images: [
    "blue.png",
    "purple.png",
    "yellow.png",
    "red.png",
    "orange.png",
    "green.png",
    "pink.png",
    "white.png",
    "black.png",
  ],

  rosaries: 0,
};

function randomImage() {
  var indexImage = Math.floor(Math.random() * engine.images.length);
  return engine.images[indexImage];
}

function mostrarCorNoLugarDaVespa() {
  const head = document.getElementById("vespa-head");
  const cor = document.getElementById("vespa-color");

  // garante que a cabeça suma (fade) e depois some do layout (display:none)
  head.classList.add("sumindo");

  
  setTimeout(() => {
    head.style.display = "none"; 

    
    const imagem = randomImage();
    cor.style.backgroundImage = `url('./img/${imagem}')`;

    
    cor.classList.add("mostrar"); 
    cor.style.opacity = "0";      

    
    requestAnimationFrame(() => {
      
      setTimeout(() => {
        cor.style.opacity = "1";
      }, 20);
    });
  }, 350);
}

document.addEventListener("DOMContentLoaded", () => {
  const head = document.getElementById("vespa-head");

  
  head.addEventListener("click", mostrarCorNoLugarDaVespa);

  
  head.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      mostrarCorNoLugarDaVespa();
    }
  });
});

const audioRosarie = new Audio('audio')

function atualizarPontuacao(){
  var pontuacao = document.getElementById('rosaries-count');

  engine.rosaries += 1;

  pontuacao.innerText = engine.rosaries;
}