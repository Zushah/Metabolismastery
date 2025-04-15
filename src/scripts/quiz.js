const setupSubjectButtons = () => {
    for (const subjectKey in data) {
        const button = document.createElement("button");
        button.textContent = data[subjectKey].name || subjectKey;
        button.classList.add("subject-button");
        button.value = subjectKey;
        button.addEventListener("click", () => toggleSubjectSelection(button, subjectKey));
        elements.subjectButtons.appendChild(button);
    }
};

const toggleSubjectSelection = (button, subjectKey) => {
    if (selectedSubjects.includes(subjectKey)) {
        selectedSubjects = selectedSubjects.filter((subject) => subject !== subjectKey);
        button.classList.remove("selected");
    } else {
        selectedSubjects.push(subjectKey);
        button.classList.add("selected");
    }
};

const updateQuestionNumber = () => {
    elements.questionCurrent.textContent = `Question ${questionNumber + 1} of ${totalQuestions}`;
};

const generateIncorrectOptions = (correct, property) => {
    const allAnswers = new Set();
    selectedSubjects.forEach((subjectKey) => {
        const subjectData = data[subjectKey];
        for (const dataKey in subjectData) {
            if (subjectData[dataKey][property] !== undefined) {
                allAnswers.add(subjectData[dataKey][property]);
            }
        }
    });
    if (allAnswers.size <= 3) {
        return Array.from(allAnswers).filter((answer) => answer !== correct);
    }
    allAnswers.delete(correct);
    const incorrectAnswers = new Set();
    while (incorrectAnswers.size < 3 && allAnswers.size > incorrectAnswers.size) {
        const randomAnswer = Array.from(allAnswers)[Math.floor(Math.random() * allAnswers.size)];
        incorrectAnswers.add(randomAnswer);
    }
    return Array.from(incorrectAnswers);
};

const generateQuestion = () => {
    if (!selectedSubjects.length) return null;
    const maxAttempts = 10;
    let attempt = 0;
    let questionData = null;
    let uniqueKey = "";
    while (attempt < maxAttempts) {
        const randomSubject = selectedSubjects[Math.floor(Math.random() * selectedSubjects.length)];
        const subdata = data[randomSubject];
        let keys = [];
        if (randomSubject === "aminoAcids") {
            keys = Object.keys(subdata).filter((k) => k !== "name");
        } else {
            keys = Object.keys(subdata).filter((k) => k.startsWith("step") || k.startsWith("mode"));
        }
        if (!keys.length) return null;

        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const itemData = subdata[randomKey];
        let availableProps = [];
        if (randomSubject === "aminoAcids") {
            availableProps = ["three", "one", "sideChain", "polar", "hydrophobic", "charged", "acidic"];
        } else if (randomSubject === "pentosePhosphatePathway" && randomKey.startsWith("mode")) {
            availableProps = ["reactant", "product", "phase", "process"];
        } else {
            ["reactant", "product", "enzyme", "substrate", "byproduct", "type", "reversible"].forEach((prop) => {
                if (itemData[prop] !== undefined) {
                    availableProps.push(prop);
                }
            });
        }
        if (availableProps.length === 0) return null;
        const prop = availableProps[Math.floor(Math.random() * availableProps.length)];
        uniqueKey = `${randomSubject}-${randomKey}-${prop}`;
        if (!askedQuestions.has(uniqueKey)) {
            let question = "";
            let correct = "";
            if (randomSubject === "aminoAcids") {
                const formattedName = itemData.name.toLowerCase();
                if (prop === "three") {
                    question = `What is the three-letter code for ${formattedName}?`;
                    correct = itemData.three;
                } else if (prop === "one") {
                    question = `What is the one-letter code for ${formattedName}?`;
                    correct = itemData.one;
                } else if (prop === "sideChain") {
                    question = `What is the side chain structure of ${formattedName}?`;
                    correct = itemData.sideChain;
                } else if (["polar", "hydrophobic", "charged", "acidic"].includes(prop)) {
                    question = `Is ${formattedName} ${prop}?`;
                    correct = itemData[prop] ? "Yes" : "No";
                }
            } else if (randomSubject === "pentosePhosphatePathway" && randomKey.startsWith("mode")) {
                const modeNumber = randomKey.slice(4);
                const description = itemData.description.charAt(0).toLowerCase() + itemData.description.slice(1);
                if (prop === "reactant") {
                    question = `What are the reactants in mode ${modeNumber} of the pentose phosphate pathway, which is activated when ${description}?`;
                    correct = itemData.reactant;
                } else if (prop === "product") {
                    question = `What are the products in mode ${modeNumber} of the pentose phosphate pathway, which is activated when ${description}?`;
                    correct = itemData.product;
                } else if (prop === "phase") {
                    question = `What is the phase of mode ${modeNumber} of the pentose phosphate pathway, which is activated when ${description}?`;
                    correct = itemData.phase;
                } else if (prop === "process") {
                    question = `What is the process in mode ${modeNumber} of the pentose phosphate pathway, which is activated when ${description}?`;
                    correct = itemData.process;
                }
            } else {
                const number = parseInt(randomKey.slice(4));
                const subjectName = subdata.name ? subdata.name.toLowerCase() : randomSubject.toLowerCase();
                const formattedSubjectName = (subjectName === "citric acid cycle" || subjectName === "pentose phosphate pathway") ? `the ${subjectName}` : subjectName;
                const reactant = itemData.reactant ? itemData.reactant.charAt(0).toLowerCase() + itemData.reactant.slice(1) : "";
                const product = itemData.product ? itemData.product.charAt(0).toLowerCase() + itemData.product.slice(1) : "";
                const reactionDetail = (reactant && product) ? ` of ${reactant} to form ${product}` : "";
                if (prop === "enzyme") {
                    if (reactionDetail) {
                        question = `What is the enzyme that catalyzes the reaction${reactionDetail} in step ${number} of ${formattedSubjectName}?`;
                    } else {
                        question = `What is the enzyme that catalyzes step ${number} of ${formattedSubjectName}?`;
                    }
                    correct = itemData.enzyme;
                } else if (prop === "reactant") {
                    if (product) {
                        question = `What is the reactant consumed to form ${product} in step ${number} of ${formattedSubjectName}?`;
                    } else {
                        question = `What is the reactant consumed in step ${number} of ${formattedSubjectName}?`;
                    }
                    correct = itemData.reactant;
                } else if (prop === "product") {
                    if (reactant) {
                        question = `What is the product formed from ${reactant} in step ${number} of ${formattedSubjectName}?`;
                    } else {
                        question = `What is the product formed in step ${number} of ${formattedSubjectName}?`;
                    }
                    correct = itemData.product;
                } else if (prop === "substrate") {
                    if (product) {
                        question = `What is the substrate used to form ${product} in step ${number} of ${formattedSubjectName}?`;
                    } else {
                        question = `What is the substrate used in step ${number} of ${formattedSubjectName}?`;
                    }
                    correct = itemData.substrate;
                } else if (prop === "byproduct") {
                    if (reactionDetail) {
                        question = `What is the byproduct released by the formation of ${product} in step ${number} of ${formattedSubjectName}?`;
                    } else {
                        question = `What is the byproduct released in step ${number} of ${formattedSubjectName}?`;
                    }
                    correct = itemData.byproduct;
                } else if (prop === "type") {
                    if (reactionDetail) {
                        question = `What is the type of the reaction${reactionDetail} in step ${number} of ${formattedSubjectName}?`;
                    } else {
                        question = `What is the reaction type of step ${number} of ${formattedSubjectName}?`;
                    }
                    correct = itemData.type;
                } else if (prop === "reversible") {
                    if (reactant && product) {
                        question = `Is the reaction of ${reactant} to form ${product} in step ${number} of ${formattedSubjectName} reversible?`;
                    } else {
                        question = `Is the reaction in step ${number} of ${formattedSubjectName} reversible?`;
                    }
                    correct = itemData.reversible ? "Yes" : "No";
                }
            }
            questionData = { question, options: [], correct, prop };
            askedQuestions.add(uniqueKey);
            break;
        }
        attempt++;
    }
    if (!questionData) return null;
    let options = [];
    if (questionData.prop === "reversible" || ["polar", "hydrophobic", "charged", "acidic"].includes(questionData.prop)) {
        options = ["Yes", "No"];
    } else {
        options = [
            ...generateIncorrectOptions(questionData.correct, questionData.prop),
            questionData.correct,
        ];
        cb.stat.shuffle(options);
    }
    questionData.options = options;
    return questionData;
};

let renderQuestion = () => {
    if (questionNumber >= totalQuestions) {
        elements.quiz.classList.add("hidden");
        elements.results.classList.remove("hidden");
        elements.score.textContent = `You answered ${score} out of ${questionNumber} questions correctly!`;
        return;
    }
    currentQuestion = generateQuestion();
    if (!currentQuestion) {
        elements.questionText.textContent = "No questions could be generated. Please select subjects.";
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
    const isCorrect = selected === correct;
    const uniqueKey = Array.from(askedQuestions).pop();
    const [subjectName, detailKey] = uniqueKey.split("-");
    trackQuestionResult(subjectName, detailKey.split("-")[0], isCorrect);
    if (isCorrect) {
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
    elements.masterySection.classList.add("hidden");
    elements.subjectSelect.classList.remove("hidden");
    selectedSubjects = [];
    currentQuestion = null;
    score = 0;
    questionNumber = 0;
    askedQuestions.clear();
    Array.from(elements.subjectButtons.querySelectorAll("button.selected")).forEach((button) => button.classList.remove("selected"));
};
