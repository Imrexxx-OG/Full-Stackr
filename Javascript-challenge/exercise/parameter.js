const welcomeEl = document.getElementById("welcome-el")
                  //parameter
function greetUser(greeting, name, emoji) {
  welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}
        //arguments
greetUser("Howdy", "Imrana", "😊")

// function add(num1, num2){
//   return num1 + num2
// }

// add(3, 4)

//Parameters are created inside the function while argument are created outside the function

// function getFirst(arr){
//   return arr[0]
// }

// let firstCard = getFirst([10, 2, 5])

// console.log(firstCard)