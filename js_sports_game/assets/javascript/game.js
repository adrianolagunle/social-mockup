let teamOneButton = document.querySelector("#teamone-shoot-button")
console.log(teamOneButton)
let teamTwoButton = document.querySelector("#teamtwo-shoot-button")
console.log(teamTwoButton)
let resetButton = document.querySelector("#reset-button")
console.log(resetButton)
let teamOneShots = document.querySelector("#teamone-numshots")
console.log(teamOneShots)
let teamOneGoals = document.querySelector("#teamone-numgoals")
console.log(teamOneGoals)
let teamTwoShots = document.querySelector("#teamtwo-numshots")
console.log(teamTwoShots)
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")
console.log(teamTwoGoals)
let numReset = document.querySelector("#num-resets")



teamOneButton.addEventListener("click", function() {
    Math.random()
    console.log("+ button clicked")
    let newShotCount = Number(teamOneShots.innerHTML) +1 
    teamOneShots.innerHTML = newShotCount
    if (Math.random() > .5) {
     let newGoalCount = Number(teamOneGoals.innerHTML) +1
     teamOneGoals.innerHTML = newGoalCount  
        
    } else {
        
    }

})
teamTwoButton.addEventListener("click", function() {
    Math.random()
    console.log("+ button clicked")
    let newShotCount2 = Number(teamTwoShots.innerHTML) +1
    teamTwoShots.innerHTML = newShotCount2
    if (Math.random() > .5) {
        let newGoalCount2 = Number(teamTwoGoals.innerHTML) +1
        teamTwoGoals.innerHTML = newGoalCount2
        
    } else {
        
    }
})

resetButton.addEventListener("click", function() {
    console.log("+ button clicked")
    let newResetCount = Number(numReset.innerHTML)
    let newResetCount2 = newResetCount +1
    teamOneShots.innerHTML =0
    teamOneGoals.innerHTML =0
    teamTwoShots.innerHTML =0
    teamTwoGoals.innerHTML =0
    numReset.innerHTML = newResetCount2
})


