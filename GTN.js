const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
const user = document.querySelector('.js-input');
let count = 5;
function check(){
    let userGuess = user.value;
    if(count == 0){
        let restart = prompt(`GAME OVER! Do you want to restart? Yes or No`)
        if(restart == 'yes'){
            start()
        }
        else{
            alert('Thanks for playing, Have a nice day')
        }
    }
    else{
        if(userGuess < randomNumber){
            count--;
            if(count == 1  ||  count == 0){
                alert(`You guessed too low, you have ${count} chance remaining.`);
            }
            else{
                alert(`You guessed too low, you have ${count} chances remaining.`);
            }
            user.value = '';
        }
        else if(userGuess > randomNumber){
            count--;
            if(count == 1  ||  count == 0){
                alert(`You guessed too high, you have ${count} chance remaining.`);
            }
            else{
                alert(`You guessed too high, you have ${count} chances remaining.`);
            }
            user.value = '';
        }
        else{
            let restart = prompt(`You won the game, do you want to restart? Yes or No`).toLowerCase()
            if(restart == 'yes'){
                start();
            }
            else{
                alert('Thanks for playing, Have a nice day')
            }
        }
    }
}
function start(){
    location.reload();
}

