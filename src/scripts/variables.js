const cb = Chalkboard;
const $ = id => document.getElementById(id);
const elements = {
    feedback: $("feedback"),
    next: $("next"),
    options: $("options"),
    pathwayButtons: $("pathway-buttons"),
    pathwaySelect: $("pathway-selection"),
    questionCount: $("question-count"),
    questionCurrent: $("question-current"),
    questionSlider: $("question-slider"),
    questionText: $("question-text"),
    quiz: $("quiz"),
    results: $("results"),
    retry: $("retry"),
    score: $("score"),
    start: $("start")
};

let selectedPathways = [];
let currentQuestion = null;
let score = 0;
let questionNumber = 0;
let totalQuestions = 10;
let askedQuestions = new Set();
