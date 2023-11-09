
const countButton = document.getElementById("countButton");
      countButton.addEventListener("click", function() {
        const textInput = document.getElementById("textInput").value;
        const words = textInput.split(" ");
        const characters = textInput.split("");
        
        let resultDiv = document.getElementById("wordCount").innerHTML =`Count of Word is: ${words.length}` ;
        let resultDivv = document.getElementById("characterCount").innerHTML = `Count of Characters is:   ${characters.length}`;
      });





