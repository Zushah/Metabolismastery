const main = () => {
    setupPathwayButtons();

    elements.questionSlider.addEventListener("input", () => {
        totalQuestions = parseInt(elements.questionSlider.value);
        elements.questionCount.textContent = totalQuestions;
    });

    elements.start.addEventListener("click", () => {
        selectedPathways = Array.from(elements.pathwayButtons.querySelectorAll("button.selected")).map((button) => button.value);
        if (selectedPathways.length) {
            elements.pathwaySelect.classList.add("hidden");
            elements.quiz.classList.remove("hidden");
            score = 0;
            questionNumber = 0;
            totalQuestions = parseInt(elements.questionSlider.value);
            updateQuestionNumber();
            renderQuestion();
        } else {
            alert("Please select at least one pathway.");
        }
    });

    elements.next.addEventListener("click", () => {
        questionNumber++;
        updateQuestionNumber();
        renderQuestion();
    });

    elements.retry.addEventListener("click", resetQuiz);
}
main();
