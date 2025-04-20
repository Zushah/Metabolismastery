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
    } else if (subjectKey === "pentosePhosphatePathway") {
        return detailKeys.sort((a, b) => {
            const isStepA = a.startsWith("step");
            const isStepB = b.startsWith("step");
            if (isStepA && !isStepB) return -1;
            if (!isStepA && isStepB) return 1;
            const numA = parseInt(a.replace(/\D/g, "")) || 0;
            const numB = parseInt(b.replace(/\D/g, "")) || 0;
            return numA - numB;
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
        container.innerHTML = "<p align='center'>No stats available yet. Complete some quizzes to develop your mastery!</p>";
        return;
    }
    const sortedSubjectKeys = getSortedSubjectKeys();
    for (const subjectKey of sortedSubjectKeys) {
        const subjectData = stats.subjects[subjectKey];
        const subjectName = data[subjectKey]?.name || subjectKey;
        const percentage = formatPercentage(subjectData.correct, subjectData.total);
        const subjectElement = document.createElement("div");
        subjectElement.classList.add("subject-stat");
        const iconContainer = document.createElement("div");
        iconContainer.classList.add("icon-container");
        iconContainer.innerHTML = `<i class="material-icons chevron-icon">chevron_right</i>`;
        const contentContainer = document.createElement("div");
        contentContainer.classList.add("content-container");
        const headerElement = document.createElement("div");
        headerElement.classList.add("subject-header");
        headerElement.innerHTML = `
            <span class="subject-name">${subjectName}</span>
            <span class="subject-score">${percentage} (${subjectData.correct}/${subjectData.total})</span>
        `;
        const percentValue = subjectData.total === 0 ? 0 : Math.round((subjectData.correct / subjectData.total) * 100);
        const progressBarContainer = document.createElement("div");
        progressBarContainer.classList.add("progress-bar-container");
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        if (percentValue < 70) {
            progressBar.classList.add("progress-bar-low");
        } else if (percentValue < 90) {
            progressBar.classList.add("progress-bar-medium");
        } else {
            progressBar.classList.add("progress-bar-high");
        }
        progressBar.style.width = percentValue === 0 ? "2%" : percentage;
        progressBarContainer.appendChild(progressBar);
        contentContainer.appendChild(headerElement);
        contentContainer.appendChild(progressBarContainer);
        const detailContainer = document.createElement("div");
        detailContainer.classList.add("detail-container");
        const sortedDetailKeys = getSortedDetailKeys(subjectKey, subjectData.details);
        for (const detailKey of sortedDetailKeys) {
            const detailData = subjectData.details[detailKey];
            const detailPercentage = formatPercentage(detailData.correct, detailData.total);
            const percentValue = detailData.total === 0 ? 0 : Math.round((detailData.correct / detailData.total) * 100);
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
            const detailProgressContainer = document.createElement("div");
            detailProgressContainer.classList.add("progress-bar-container", "detail-progress-container");
            const detailProgressBar = document.createElement("div");
            detailProgressBar.classList.add("progress-bar", "detail-progress-bar");
            if (percentValue < 70) {
                detailProgressBar.classList.add("progress-bar-low");
            } else if (percentValue < 90) {
                detailProgressBar.classList.add("progress-bar-medium");
            } else {
                detailProgressBar.classList.add("progress-bar-high");
            }
            detailProgressBar.style.width = percentValue === 0 ? "2%" : detailPercentage;
            detailProgressContainer.appendChild(detailProgressBar);
            const detailHeader = document.createElement("div");
            detailHeader.classList.add("detail-header");
            const nameSpan = document.createElement("span");
            nameSpan.textContent = detailName;
            const scoreSpan = document.createElement("span");
            scoreSpan.textContent = `${detailPercentage} (${detailData.correct}/${detailData.total})`;
            detailHeader.appendChild(nameSpan);
            detailHeader.appendChild(detailProgressContainer);
            detailHeader.appendChild(scoreSpan);
            detailElement.appendChild(detailHeader);
            detailContainer.appendChild(detailElement);
        }
        const mainRow = document.createElement("div");
        mainRow.classList.add("main-row");
        mainRow.appendChild(iconContainer);
        mainRow.appendChild(contentContainer);
        subjectElement.addEventListener("click", () => {
            detailContainer.classList.toggle("expanded");
            const icon = iconContainer.querySelector(".chevron-icon");
            icon.classList.toggle("rotated");
        });
        subjectElement.appendChild(mainRow);
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
