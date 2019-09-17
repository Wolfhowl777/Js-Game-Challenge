let teamOneShotCountElement = document.querySelector("#teamone-numshots")
let teamOneGoalCountElement = document.querySelector("#teamone-numhits")
let teamOneShootButtonElement = document.querySelector("#teamone-shoot")

let teamOneShotCount = 0;
let teamOneGoalCount = 0;

//add event listener listens for clicks from the user
teamOneShootButtonElement.addEventListener("click",function(){
    teamOneShotCount = teamOneShotCount +1
    teamOneShotCountElement.innerHTML = teamOneShotCount 

    //if shot was succesful, increment goalcount by one
    //after incrementing goalcount, set goalcountelement.innerhtml
    //equal to goalcount\
    // Math.random gives you a random number generator between 0 and 1

    if(Math.random() > .75) {
    teamOneGoalCount = teamOneGoalCount +1;
    teamOneGoalCountElement.innerHTML = teamOneGoalCount 
    }

})

let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots")
let teamTwoGoalCountElement = document.querySelector("#teamtwo-numhits")
let teamTwoShootButtonElement = document.querySelector("#teamtwo-shoot")


let teamTwoShotCount = 0;
let teamTwoGoalCount = 0;

teamTwoShootButtonElement.addEventListener("click",function(){
    teamTwoShotCount = teamTwoShotCount +1
    teamTwoShotCountElement.innerHTML = teamTwoShotCount 

    
    if(Math.random() > .75) {
    teamTwoGoalCount = teamTwoGoalCount +1;
    teamTwoGoalCountElement.innerHTML = teamTwoGoalCount 
    }

})

let resetButtonElement = document.querySelector("#reset")
let resetCountElement = document.querySelector("#num-resets")


let resetButtonCount = 0;

resetButtonElement.addEventListener("click",function(){
    resetButtonCount = resetButtonCount +1;
    resetCountElement.innerHTML = resetButtonCount
    teamTwoGoalCountElement.innerHTML = 0;
    teamOneGoalCountElement.innerHTML = 0;
    teamOneShotCountElement.innerHTML = 0;
    teamTwoShotCountElement.innerHTML = 0;
    teamOneGoalCount = 0;
    teamTwoGoalCount = 0;
    teamOneShotCount = 0;
    teamTwoShotCount = 0;

    }

)