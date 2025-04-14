let stats = {
    totalQuizzes: 0,
    subjects: {}
};

const loadStats = () => {
    const savedStats = localStorage.getItem("stats");
    if (savedStats) {
        stats = JSON.parse(savedStats);
    }
};

const saveStats = () => {
    localStorage.setItem("stats", JSON.stringify(stats));
};

const initializeSubjectStats = (subject) => {
    if (!stats.subjects[subject]) {
        stats.subjects[subject] = {
            correct: 0,
            total: 0,
            details: {}
        };
    }
};

const trackQuestionResult = (subject, detail, isCorrect) => {
    initializeSubjectStats(subject);
    stats.subjects[subject].total++;
    if (isCorrect) {
        stats.subjects[subject].correct++;
    }
    if (!stats.subjects[subject].details[detail]) {
        stats.subjects[subject].details[detail] = {
            correct: 0,
            total: 0
        };
    }
    stats.subjects[subject].details[detail].total++;
    if (isCorrect) {
        stats.subjects[subject].details[detail].correct++;
    }
    saveStats();
};

const formatPercentage = (correct, total) => {
    if (total === 0) return "0%";
    return `${Math.round((correct / total) * 100)}%`;
};

const getSortedDetailKeys = (subjectKey, details) => {
    const detailKeys = Object.keys(details);
    if (subjectKey === "aminoAcids") {
        return detailKeys.sort((a, b) => {
            const nameA = data[subjectKey][a]?.name || a;
            const nameB = data[subjectKey][b]?.name || b;
            return nameA.localeCompare(nameB);
        });
    } else {
        return detailKeys.sort((a, b) => {
            const numA = parseInt(a.replace(/\D/g, "")) || 0;
            const numB = parseInt(b.replace(/\D/g, "")) || 0;
            return numA - numB;
        });
    }
};

const getSortedSubjectKeys = () => {
    const subjectKeys = Object.keys(stats.subjects);
    return subjectKeys.sort((a, b) => {
        const nameA = data[a]?.name || a;
        const nameB = data[b]?.name || b;
        return nameA.localeCompare(nameB);
    });
};

const displayStats = () => {
    const container = elements.masteryStats;
    container.innerHTML = "";
    if (Object.keys(stats.subjects).length === 0) {
        container.innerHTML = "<p>No stats available yet. Complete some quizzes to develop your mastery!</p>";
        return;
    }
    const sortedSubjectKeys = getSortedSubjectKeys();
    for (const subjectKey of sortedSubjectKeys) {
        const subjectData = stats.subjects[subjectKey];
        const subjectName = data[subjectKey]?.name || subjectKey;
        const percentage = formatPercentage(subjectData.correct, subjectData.total);
        const subjectElement = document.createElement("div");
        subjectElement.classList.add("subject-stat");
        const headerElement = document.createElement("div");
        headerElement.classList.add("subject-header");
        headerElement.innerHTML = `
            <span class="subject-name">${subjectName}</span>
            <span class="subject-score">${subjectData.correct}/${subjectData.total} (${percentage})</span>
        `;
        const detailContainer = document.createElement("div");
        detailContainer.classList.add("detail-container");
        const progressBarContainer = document.createElement("div");
        progressBarContainer.classList.add("progress-bar-container");
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.style.width = percentage;
        progressBarContainer.appendChild(progressBar);
        const sortedDetailKeys = getSortedDetailKeys(subjectKey, subjectData.details);
        for (const detailKey of sortedDetailKeys) {
            const detailData = subjectData.details[detailKey];
            const detailPercentage = formatPercentage(detailData.correct, detailData.total);
            let detailName = detailKey;
            if (subjectKey === "aminoAcids") {
                detailName = data[subjectKey][detailKey]?.name || detailKey;
            } else if (detailKey.startsWith("step")) {
                detailName = `Step ${detailKey.replace("step", "")}`;
            } else if (detailKey.startsWith("mode")) {
                detailName = `Mode ${detailKey.replace("mode", "")}`;
            }
            const detailElement = document.createElement("div");
            detailElement.classList.add("detail-item");
            detailElement.innerHTML = `
                <span>${detailName}</span>
                <span>${detailData.correct}/${detailData.total} (${detailPercentage})</span>
            `;
            detailContainer.appendChild(detailElement);
        }
        subjectElement.addEventListener("click", () => {
            detailContainer.classList.toggle("expanded");
        });
        subjectElement.appendChild(headerElement);
        subjectElement.appendChild(progressBarContainer);
        subjectElement.appendChild(detailContainer);
        container.appendChild(subjectElement);
    }
};

const renderStats = () => {
    elements.subjectSelect.classList.add("hidden");
    elements.quiz.classList.add("hidden");
    elements.results.classList.add("hidden");
    elements.masterySection.classList.remove("hidden");
    displayStats();
};
