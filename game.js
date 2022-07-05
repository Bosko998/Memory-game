import{cards} from "./cards.js"
import{testLeaderBoard} from "./rezultati.js";
let card_game = document.querySelector("section");
let imeIgraca = document.querySelector("#imeIgraca");
let radioButtons = document.getElementsByName("radiobtn");
let broj = document.querySelector("#broj");
let forma = document.querySelector("#forma");
let card_game_section = document.querySelector("#card-game-section")
let lakoLeaderBoard = JSON.parse(localStorage.getItem("lako"));
let srednjeLeaderBoard = JSON.parse(localStorage.getItem("srednje"));
let teskoLeaderBoard = JSON.parse(localStorage.getItem("tesko"));
let ekspertLeaderBoard = JSON.parse(localStorage.getItem("ekspert"));
let mediaQuery  = window.matchMedia("(max-width: 700px)")
let igrac;
let vremeIgr;
let dialogBox;
let interval;
let user;


let intervals = ()=>{
let brojac = 0;
    if(interval){
        clearTimeout(interval)
        interval =null;
      }else{
        interval = setInterval(()=>{
        brojac++
        broj.innerText = brojac
      }, 1000);
      }
}
     
let returnRandomizedCards = ()=>{
    let radio=document.querySelector(".radio:checked")
    console.log(radio)
    let value = radio.value;
    let cardData = cards(value);
    let randomizedCards = randomize(cardData);
    return randomizedCards;
}
forma.addEventListener("submit",(e)=>{
    
   if(isNaN(imeIgraca.value)){
    e.preventDefault(); 
    card_game_section.style.backgroundImage = "none"
    let randomizedCards = returnRandomizedCards();
    // cardGenerator(randomizedCards)
    generateHTML(randomizedCards)
    intervals();

   }else{
    alert("Morate uneti Ime korisnika");
   }

  
    

});

let randomize = (cardData) =>{
    let random = cardData.sort(()=>Math.random() - 0.5)
    return random;
}

// Card Generator Function
let cardGenerator = ()=>{
    radioButtons.forEach((radios)=>{
        radios.addEventListener("click",()=>{
            
            if(radios.value === "16"){
                card_game.style.gridTemplateColumns ="repeat(4,8rem)"
                card_game.style.gridTemplateRows ="repeat(4,8rem)"
                
                
            }else if(radios.value === "36"){
                card_game.style.gridTemplateColumns ="repeat(6,6rem)"
                card_game.style.gridTemplateRows ="repeat(6,6rem)"
        

            }else if(radios.value === "64"){
                card_game.style.gridTemplateColumns ="repeat(8,4rem)"
                card_game.style.gridTemplateRows ="repeat(8,4rem)"
            }else if(radios.value === "100"){
                
                card_game.style.gridTemplateColumns ="repeat(10,3rem)"
                card_game.style.gridTemplateRows ="repeat(10,3rem)"
            }
        })
       
    })
}    
let generateHTML = (cardData)=>{
 // Generate HTML
 cardData.forEach((item)=>{
    let card = document.createElement("div");
    let face = document.createElement("img");
    let back = document.createElement("div");
    
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    //Attach the info to card
    face.src = item.imgSrc;
    card.setAttribute('name',item.name);
        card_game.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
       

    //Attach cards to section
    card.addEventListener("click",(e)=>{
       
        if(isNaN(imeIgraca.value)){
            card.classList.toggle("toggleCard");
            checkCards(e);
           
        }else{
            
            alert("Morate uneti korisnicko ime")  
            return imeIgraca.value;
        }
        
    });
});
}

let checkCards = (e) => {
    let clickedCard = e.target
    clickedCard.classList.add("flipped");
    let flippedCards = document.querySelectorAll('.flipped');
    let toggleCard = document.querySelectorAll(".toggleCard")
    
       

    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log("match");
            flippedCards.forEach((card)=>{
                card.classList.remove('flipped');
                card.style.pointerEvents = "none"
            })
        }else{
            console.log("wrong");
            flippedCards.forEach((card)=>{
               
                card.classList.remove('flipped')
                setTimeout(()=>card.classList.remove('toggleCard'),1000);
            });
            
  
        }
    }
    if(toggleCard.length === 16 && radioButtons[0].checked === true){
        igrac = imeIgraca.value
        vremeIgr = broj.innerText
        user = { ime:igrac,vreme:vremeIgr}
        testLeaderBoard("lako",user,lakoLeaderBoard)
        
        dialogBox = confirm("Kraj igre! Da li zelite novu igru?")
        
        if(dialogBox==true){
            reset("Pobedili ste");
            broj.innerText = 0;
            
        }else{
        
            intervals()
            broj.innerText = 0;
        }
 
    }else if(toggleCard.length === 36 && radioButtons[1].checked === true){
        igrac = imeIgraca.value
        vremeIgr = broj.innerText
        user = { ime:igrac,vreme:vremeIgr}
        testLeaderBoard("srednje",user,srednjeLeaderBoard) 
        
        dialogBox = confirm("Kraj igre! Da li zelite novu igru?")
        
        if(dialogBox==true){
            reset("Pobedili ste");
            broj.innerText = 0;
            
        }else{
            
            intervals()
            broj.innerText = 0;
        }
    }else if(toggleCard.length === 64 && radioButtons[2].checked === true){
        igrac = imeIgraca.value
        vremeIgr = broj.innerText
        user = { ime:igrac,vreme:vremeIgr}
        testLeaderBoard("tesko",user,teskoLeaderBoard) 
        
        dialogBox = confirm("Kraj igre! Da li zelite novu igru?")
        
        if(dialogBox==true){
            reset("Pobedili ste");
            broj.innerText = 0;
            
        }else{
            
            intervals()
            broj.innerText = 0;
        }
    }else if(toggleCard.length === 100 && radioButtons[3].checked === true){
        igrac = imeIgraca.value
        vremeIgr = broj.innerText
        user = { ime:igrac,vreme:vremeIgr}
        testLeaderBoard("ekspert",user,ekspertLeaderBoard) 
        
        dialogBox = confirm("Kraj igre! Da li zelite novu igru?")
        
        if(dialogBox==true){
            reset("Pobedili ste");
            broj.innerText = 0;
            
        }else{
           
            intervals()
            broj.innerText = 0;
        }
    }

}

//RESET

let reset = (text)=>{
    let cardData  = returnRandomizedCards();
    let faces = document.querySelectorAll(".face")
    let cards = document.querySelectorAll(".card");
    card_game.style.pointerEvents = "none"
    intervals()
    broj.innerText=0; 
    imeIgraca.value =""
    cardData.forEach((item,index)=>{
        
        cards[index].classList.remove('toggleCard');
        //Randomize
        setTimeout(()=>{
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name',item.name)
            card_game.style.pointerEvents = "all"
        },1000)
    });   
    setTimeout(()=>{
    
    window.alert(text)
},100)


    
}
// let mediaQueryFunction = () => {
//     mediaQuery.addEventListener("onload",()=>{
//         if(mediaQuery){
//             console.log(mediaQuery)
//         }
//     })
   

// }

export{cardGenerator}