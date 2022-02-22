let btn = document.getElementById("btnConvert");
let bracketsArray = [];
btn.addEventListener("click", checkBracket);
function checkBracket(){
    let textFild1 = document.getElementById("textFild1").value;
    let textFild2 = document.getElementById("textFild2");
    let newText = textFild1.split("");
    let open = ["(","{","["];
    let close = [")","}","]"];
    let openIndex;
    let closeIndex;
  
    for (let i = 0; i < newText.length; i++){
       openIndex = open.indexOf(newText[i]);
       if (openIndex !== -1){
           bracketsArray.push(openIndex);
           continue;
       }
       
       closeIndex = close.indexOf(newText[i]);
       if (closeIndex !== -1){
           openIndex = bracketsArray.pop();
           if (closeIndex !== openIndex  ){
            
              newText[i] = `<span class = "span1">${newText[i]}</span>`;
              
        }
        
        }
    textFild2.innerHTML =  newText.join("");
}
};