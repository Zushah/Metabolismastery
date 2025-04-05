const setupPathwayButtons = () => {
    for (const name in pathways) {
        const button = document.createElement("button");
        button.textContent = pathways[name].name || name;
        button.classList.add("pathway-button");
        button.value = name;
        button.addEventListener("click", () => togglePathwaySelection(button, name));
        elements.pathwayButtons.appendChild(button);
    }
};

const togglePathwaySelection = (button, pathwayName) => {
    if (selectedPathways.includes(pathwayName)) {
        selectedPathways = selectedPathways.filter((p) => p !== pathwayName);
        button.classList.remove("selected");
    } else {
        selectedPathways.push(pathwayName);
        button.classList.add("selected");
    }
};

const updateQuestionNumber = () => {
    elements.questionCurrent.textContent = `Question ${questionNumber + 1} of ${totalQuestions}`;
};

const generateIncorrectOptions = (correct, property) => {
    const incorrect = new Set();
    const allAnswers = new Set();

    if (property === "substrate" || property === "byproduct") {
        selectedPathways.forEach((p) => {
            const data = pathways[p];
            for (const key in data) {
                if (key.startsWith("step") && data[key][property]) {
                    allAnswers.add(data[key][property]);
                }
                if (key.startsWith("step") && data[key]["substrate"] && property === "byproduct") {
                    allAnswers.add(data[key]["substrate"]);
                }
                if (key.startsWith("step") && data[key]["byproduct"] && property === "substrate") {
                    allAnswers.add(data[key]["byproduct"]);
                }
            }
        });
    } else {
        selectedPathways.forEach((p) => {
            const data = pathways[p];
            for (const key in data) {
                if (key.startsWith("step") && data[key][property]) {
                    allAnswers.add(data[key][property]);
                }
            }
        });
    }

    allAnswers.delete(correct);

    while (incorrect.size < 3 && allAnswers.size > incorrect.size) {
        const random = Array.from(allAnswers)[Math.floor(Math.random() * allAnswers.size)];
        incorrect.add(random);
    }
    return Array.from(incorrect);
};

const generateQuestion = () => {
    if (!selectedPathways.length) return null;

    const maxAttempts = 10;
    let attempt = 0;
    let questionData = null;
    let uniqueKey = "";
    while (attempt < maxAttempts) {
        const randomPathway = selectedPathways[Math.floor(Math.random() * selectedPathways.length)];
        const data = pathways[randomPathway];
        const steps = Object.keys(data).filter((k) => k.startsWith("step"));
        if (!steps.length) return null;

        const randomStep = steps[Math.floor(Math.random() * steps.length)];
        const number = parseInt(randomStep.slice(4));
        const stepData = data[randomStep];

        const availableProps = [];
        ["reactant", "product", "enzyme", "substrate", "byproduct", "type", "reversible"].forEach((prop) => {
            if (stepData[prop] !== undefined) {
                availableProps.push(prop);
            }
        });
        if (availableProps.length === 0) return null;
        const prop = availableProps[Math.floor(Math.random() * availableProps.length)];

        const pathwayName = data.name ? data.name.toLowerCase() : randomPathway.toLowerCase();
        const formattedPathwayName = pathwayName === "citric acid cycle" ? `the ${pathwayName}` : pathwayName;

        uniqueKey = `${randomPathway}-${randomStep}-${prop}`;
        if (!askedQuestions.has(uniqueKey)) {
            let question = "";
            let correct = "";
            if (prop === "enzyme") {
                question = `What is the enzyme that catalyzes step ${number} of ${formattedPathwayName}?`;
                correct = stepData.enzyme;
            } else if (prop === "reactant") {
                question = `What is the reactant consumed in step ${number} of ${formattedPathwayName}?`;
                correct = stepData.reactant;
            } else if (prop === "product") {
                question = `What is the product generated in step ${number} of ${formattedPathwayName}?`;
                correct = stepData.product;
            } else if (prop === "substrate") {
                question = `What is the substrate used in step ${number} of ${formattedPathwayName}?`;
                correct = stepData.substrate;
            } else if (prop === "byproduct") {
                question = `What is the byproduct produced in step ${number} of ${formattedPathwayName}?`;
                correct = stepData.byproduct;
            } else if (prop === "type") {
                question = `What is the reaction type of step ${number} of ${formattedPathwayName}?`;
                correct = stepData.type;
            } else if (prop === "reversible") {
                question = `Is the reaction in step ${number} of ${formattedPathwayName} reversible?`;
                correct = stepData.reversible ? "Yes" : "No";
            }
            questionData = { question, options: [], correct, prop };
            askedQuestions.add(uniqueKey);
            break;
        }
        attempt++;
    }

    if (!questionData) return null;

    let options = [];
    if (questionData.prop === "reversible") {
        options = ["Yes", "No"];
    } else {
        options = [...generateIncorrectOptions(questionData.correct, questionData.prop), questionData.correct];
        cb.stat.shuffle(options);
    }
    questionData.options = options;
    return questionData;
};


const renderQuestion = () => {
    if (questionNumber >= totalQuestions) {
        elements.quiz.classList.add("hidden");
        elements.results.classList.remove("hidden");
        elements.score.textContent = `You answered ${score} out of ${questionNumber} questions correctly!`;
        return;
    }

    currentQuestion = generateQuestion();
    if (!currentQuestion) {
        elements.questionText.textContent = "No questions could be generated. Please select pathways.";
        elements.options.innerHTML = "";
        return;
    }

    elements.questionText.textContent = currentQuestion.question;
    elements.options.innerHTML = "";
    elements.feedback.textContent = "";
    elements.next.classList.add("hidden");

    const labels = ["(a) ", "(b) ", "(c) ", "(d) "];

    currentQuestion.options.forEach((option, index) => {
        const wrapper = document.createElement("div");
        wrapper.style.marginBottom = "10px";

        const button = document.createElement("button");
        button.textContent = labels[index] + option;
        button.classList.add("option-button");
        button.addEventListener("click", handleAnswer);

        wrapper.appendChild(button);
        elements.options.appendChild(wrapper);
    });
};

const handleAnswer = (event) => {
    if (!currentQuestion) return;

    const selected = event.target.textContent.replace(/^\(\w\)\s*/, "");
    const correct = currentQuestion.correct;
    const buttons = elements.options.querySelectorAll(".option-button");

    const molecules = ["NADH", "H2O", "ATP", "ADP", "CoA", "FAD", "NAD+"];
    const isMolecule = (answer) => {
        return molecules.some((molecule) => answer.toUpperCase() === molecule);
    };

    buttons.forEach((button) => {
        button.disabled = true;
        const btnText = button.textContent.replace(/^\(\w\)\s*/, "");
        if (btnText === correct) button.classList.add("correct");
        else if (btnText === selected) button.classList.add("incorrect");
    });

    const formattedCorrect = isMolecule(correct) ? correct : correct.charAt(0).toUpperCase() + correct.slice(1);
    let correctLetter = "";
    const labels = ["(a)", "(b)", "(c)", "(d)"];
    currentQuestion.options.forEach((option, index) => {
        if (option === correct) {
            correctLetter = labels[index];
        }
    });

    if (selected === correct) {
        elements.feedback.textContent = "Correct!";
        score++;
    } else {
        elements.feedback.textContent = `Incorrect. The correct answer is ${correctLetter} ${formattedCorrect}.`;
    }

    elements.next.classList.remove("hidden");
};

const resetQuiz = () => {
    elements.results.classList.add("hidden");
    elements.quiz.classList.add("hidden");
    elements.pathwaySelect.classList.remove("hidden");
    selectedPathways = [];
    currentQuestion = null;
    score = 0;
    questionNumber = 0;
    askedQuestions.clear();
    Array.from(elements.pathwayButtons.querySelectorAll("button.selected")).forEach((button) => button.classList.remove("selected"));
};
