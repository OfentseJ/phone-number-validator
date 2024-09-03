const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const updateUI = () => {
    const input = userInput.value.trim();

    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    let resultMsg;

    if (isNumberValid(input)) {
        resultMsg = `Valid US number: ${input}`;
    } else {
        resultMsg = `Invalid US number: ${input}`;
    }

    result.innerText = resultMsg;
}

const isNumberValid = (input) => {
    
    const numRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return numRegex.test(input);
}

checkBtn.addEventListener("click", updateUI);

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        updateUI();
    }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    result.textContent = "";
});
