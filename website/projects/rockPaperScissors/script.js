const scoreDisplay = document.getElementById("score")
const title = document.getElementById("main-title")

const choices = ["rock", "paper", "scissors"]
let score = {player: 0, computer: 0}

function updateScore() {
    scoreDisplay.innerText = `You: ${score.player} | Computer: ${score.computer}`
}

function play(playerChoice) {
    if (!playerChoice) {
        return
    }
    let resultText = "";
    const computerChoice = choices[Math.floor(Math.random() * 3)]  
    if (playerChoice === "rock") {
        if (computerChoice === "rock") { 
            resultText = `<span style="color: gray; font-weight: bold;">It's a draw!</span> You: ${playerChoice} | Computer: ${computerChoice}`;
        } else if (computerChoice === "paper") {
            resultText = `<span style="color: red; font-weight: bold;">You Lose!</span> You: ${playerChoice} | Computer: ${computerChoice}`;
            score.computer += 1;
        } else if (computerChoice === "scissors") {
            resultText = `<span style="color: green; font-weight: bold;">You Win!</span> You: ${playerChoice} | Computer: ${computerChoice}`;
            score.player += 1;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") { 
            resultText = `<span style="color: green; font-weight: bold;">You Win!</span> You: ${playerChoice} | Computer: ${computerChoice}`;
            score.player += 1;
        } else if (computerChoice === "paper") {
            resultText = `<span style="color: gray; font-weight: bold;">It's a draw!</span> You: ${playerChoice} | Computer: ${computerChoice}`;
        } else if (computerChoice === "scissors") {
            resultText = `<span style="color: red; font-weight: bold;">You Lose!</span> You: ${playerChoice} | Computer: ${computerChoice}`;
            score.computer += 1;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") { 
            resultText = `<span style="color: red; font-weight: bold;">You Lose!</span> You: ${playerChoice} | Computer: ${computerChoice}`;
            score.computer += 1;
        } else if (computerChoice === "paper") {
            resultText = `<span style="color: green; font-weight: bold;">You Win!</span> You: ${playerChoice} | Computer: ${computerChoice}`;
            score.player += 1;
        } else if (computerChoice === "scissors") {
            resultText = `<span style="color: gray; font-weight: bold;">It's a draw!</span> You: ${playerChoice} | Computer: ${computerChoice}`;
        }
    }
    updateScore()
    title.innerHTML = resultText
}