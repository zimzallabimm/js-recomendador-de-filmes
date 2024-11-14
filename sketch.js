// Idades: 18 anos, 14 anos, livre
// Gêneros: Terror, Ação, Ficção e Romance

// Idade 18 anos:
// Terror - O Farol
//Ação - La casa de papel
//Ficção - Centopeia humana 
// Romance - 50 tons de cinza

// Idade 14 anos:
// Terror - Invocação do mal
//Ação - Velozes e Furiosos 10
//Ficção- Moonfall - Ameaça Lunar
// Romance - Fabricantes de Lágrimas 

// Idade livre
// Terror - A casa Monstro 
//Ação - Hot Wheels
//Ficção - Megamente 
// Romance - A Bela e a Fera

let campoIdade;
let campoTerror;
let campoAcao;
let campoFiccao;
let campoRomance;

function setup() {
  createCanvas(600, 400);
  createElement('h1', 'Recomendador de Filmes e Séries');
  createElement('h2', 'Qual a Sua Idade?');
  createSpan('idade:');
  campoIdade = createInput();
  createElement('h3', 'Obrigado Por Sua Resposta!')
  campoTerror = createCheckbox('Terror');
  campoAcao = createCheckbox('Ação');
  campoFiccao = createCheckbox('Ficção');
  campoRomance = createCheckbox('Romance');
}

function draw() {
  background('darkred');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('white');
  
  let idade = campoIdade.value();
  let terror = campoTerror.checked();
  let acao = campoAcao.checked();
  let ficcao = campoFiccao.checked();
  let romance = campoRomance.checked();
  
  let filme = geraRecomendacao(idade, terror, acao, ficcao, romance);
  
  text(filme, width/2, height/2);
  
}

function geraRecomendacao(idade, terror, acao, ficcao, romance){
  if(idade >= 18){
    if(terror){
      return 'O Farol'
    }else if(acao){
      return 'La Casa de Papel'
    }else if (ficcao){
      return 'Centopeia Humana'
    }else if(romance){
      return '50 Tons de Cinza'
    }else{
      return 'La Casa de Papel'
    }
  }else if(idade>=14){
     if(terror){
      return 'Invocacao do Mal'
    }else if(acao){
      return 'Velozes e Furiosos 10'
    }else if (ficcao){
      return 'Moonfall - Ameaca lunar'
    }else if(romance){
      return 'Fabricantes de Lagrimas'
    }else{
      return 'Velozes e Furiosos 10'
    }
  }else{
     if (terror){
       return 'A casa Monstro'
    }else if(acao){
      return 'Hot Wheels'
    }else if (ficcao){
      return 'Megamente'
    }else if(romance){
      return 'A Bela e a Fera'
    }else{
      return 'Hot Wheels'
    }
  }
}
      


    
