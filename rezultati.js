let tabela = document.querySelector("table");
let lakoLeaderBoard = JSON.parse(localStorage.getItem("lako"));
let srednjeLeaderBoard = JSON.parse(localStorage.getItem("srednje"));
let teskoLeaderBoard = JSON.parse(localStorage.getItem("tesko"));
let ekspertLeaderBoard = JSON.parse(localStorage.getItem("ekspert"));
let dugmici = document.querySelectorAll("button");
let row;
let mestoData;
let imeData;
let vremeData;


    function testLeaderBoard (nivo,newUser,leaderBoard){
      if(leaderBoard){
        if(newUser.vreme > leaderBoard[leaderBoard.length - 1].vreme){
          return null;
        }else{
          let newLakoLeaderBoard = [];
          let isPlaced = false;
          leaderBoard.forEach((item) => {
            if(item.vreme < newUser.vreme){
              newLakoLeaderBoard.push(item);
            }else{
              if(isPlaced === false){
                newLakoLeaderBoard.push(newUser);
                newLakoLeaderBoard.push(item);
                isPlaced = true;
              }else{
                newLakoLeaderBoard.push(item);
              }
            }
          });
          let newLakoLeaderBoardSliced = newLakoLeaderBoard.slice(0,5);
          console.log(newLakoLeaderBoardSliced)
          localStorage.setItem(nivo,JSON.stringify(newLakoLeaderBoardSliced));
          tabela.innerHTML = `<table>
                              <tr><td >Mesto</td><td>Korisnicko ime</td>
                              <td>Vreme</td>
                              </tr>
                              </table>`
          newLakoLeaderBoardSliced.forEach((item,index)=>{
          let newTr = document.createElement("tr");
          let mestoIgraca = document.createElement("td")
          let imeIgraca = document.createElement("td")
          let vremeIgraca = document.createElement("td")
          imeIgraca.setAttribute("id","imeIgraca");
          vremeIgraca.setAttribute("id","vremeIgraca");
          mestoIgraca.setAttribute("id","mestoIgraca");
          vremeIgraca.textContent = item.vreme
          imeIgraca.textContent = item.ime
          mestoIgraca.textContent = index +1
          newTr.appendChild(mestoIgraca);
          newTr.appendChild(imeIgraca);
          newTr.appendChild(vremeIgraca);
          tabela.appendChild(newTr);
          })
       
        }
      } else{
        let newLakoLeaderBoard = [newUser];
        localStorage.setItem(nivo,JSON.stringify(newLakoLeaderBoard));
        tabela.appendChild(newTr)
      }
  } 

let LeaderBoard = () =>{
    lakoLeaderBoard.forEach((lako,index)=>{
     row = document.createElement("tr");
      mestoData = document.createElement("td")
      imeData = document.createElement("td")
      vremeData = document.createElement("td")
      
      mestoData.textContent = index + 1
      imeData.textContent = lako.ime;
      vremeData.textContent = lako.vreme
      row.appendChild(mestoData);
      row.appendChild(imeData);
      row.appendChild(vremeData);
       tabela.appendChild(row);
    
  })
  for(let i = 0 ; i < dugmici.length ; i++)
  dugmici[i].addEventListener("click",()=>{
      if(dugmici[i].value === "1"){
        tabela.innerHTML = `<table>
                            <tr><td >Mesto</td><td>Korisnicko ime</td>
                            <td>Vreme</td>
                            </tr>
                            </table>`
       lakoLeaderBoard.forEach((lako,index)=>{
        console.log("radi")
        row = document.createElement("tr");
         mestoData = document.createElement("td")
         imeData = document.createElement("td")
         vremeData = document.createElement("td")
         mestoData.textContent = index + 1
         imeData.textContent = lako.ime;
         vremeData.textContent = lako.vreme
         row.appendChild(mestoData);
         row.appendChild(imeData);
         row.appendChild(vremeData);
          tabela.appendChild(row);
        return tabela;
       })
      }else if(dugmici[i].value === "2"){
        tabela.innerHTML = `<table>
                            <tr><td >Mesto</td><td>Korisnicko ime</td>
                            <td>Vreme</td>
                            </tr>
                            </table>`
        srednjeLeaderBoard.forEach((srednje,index)=>{
          
          row = document.createElement("tr");
           mestoData = document.createElement("td")
           imeData = document.createElement("td")
           vremeData = document.createElement("td")
          
           mestoData.textContent = index + 1
           imeData.textContent = srednje.ime;
           vremeData.textContent = srednje.vreme
           row.appendChild(mestoData);
           row.appendChild(imeData);
           row.appendChild(vremeData);
            tabela.appendChild(row);
            return tabela;
         })
       
      }else if(dugmici[i].value === "3"){
        console.log
        tabela.innerHTML = `<table>
                            <tr><td >Mesto</td><td>Korisnicko ime</td>
                            <td>Vreme</td>
                            </tr>
                            </table>`
        teskoLeaderBoard.forEach((tesko,index)=>{
          row = document.createElement("tr");
           mestoData = document.createElement("td")
           imeData = document.createElement("td")
           vremeData = document.createElement("td")
           mestoData.textContent = index + 1
           imeData.textContent = tesko.ime;
           vremeData.textContent = tesko.vreme
           row.appendChild(mestoData);
           row.appendChild(imeData);
           row.appendChild(vremeData);
            tabela.appendChild(row);
         
          return tabela;
         })

      }else if(dugmici[i].value === "4"){
        tabela.innerHTML = `<table>
                            <tr><td >Mesto</td><td>Korisnicko ime</td>
                            <td>Vreme</td>
                            </tr>
                            </table>`
        ekspertLeaderBoard.forEach((ekspert,index)=>{
          row = document.createElement("tr");
           mestoData = document.createElement("td")
           imeData = document.createElement("td")
           vremeData = document.createElement("td")
           mestoData.textContent = index + 1
           imeData.textContent = ekspert.ime;
           vremeData.textContent = ekspert.vreme
           row.appendChild(mestoData);
           row.appendChild(imeData);
           row.appendChild(vremeData);
            tabela.appendChild(row);
            return tabela;
        
         })
        
      }
    })
}



export{testLeaderBoard,LeaderBoard}