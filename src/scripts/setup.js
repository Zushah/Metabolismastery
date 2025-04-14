const cb = Chalkboard;
const $ = (id) => document.getElementById(id);
const elements = {
    backToMenu: $("back-to-menu"),
    feedback: $("feedback"),
    masterySection: $("mastery-section"),
    masteryStats: $("mastery-stats"),
    next: $("next"),
    options: $("options"),
    questionCount: $("question-count"),
    questionCurrent: $("question-current"),
    questionSlider: $("question-slider"),
    questionText: $("question-text"),
    quiz: $("quiz"),
    results: $("results"),
    retry: $("retry"),
    score: $("score"),
    start: $("start"),
    statsButtons: document.querySelectorAll(".stats-button"),
    subjectButtons: $("subject-buttons"),
    subjectSelect: $("subject-selection")
};

let selectedSubjects = [];
let currentQuestion = null;
let score = 0;
let questionNumber = 0;
let totalQuestions = 10;
let askedQuestions = new Set();
