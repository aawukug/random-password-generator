// INITIALIZATION
const charactersArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]


let generateBtn = document.getElementById("generate-btn");

let inputElOne = document.getElementById("input-el-one");

let inputElTwo = document.getElementById("input-el-two");


// GET RANDOM PASSWORD FUNCTION
function generateRandomPassword (length) {
    let password = "";

    for ( let i = 0; i < length; i++){
        let randomChar = Math.floor ( Math.random() * charactersArr.length )
        password += charactersArr[randomChar]
    }
    return password
}

// GENERATE BUTTON EVENTLISTENER

generateBtn.addEventListener("click", function() {
    const newPasswordOne = generateRandomPassword(15)
    inputElOne.value = newPasswordOne;
    const newPasswordTwo = generateRandomPassword(15)
    inputElTwo.value = newPasswordTwo;
})







