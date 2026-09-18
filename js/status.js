// =====================================
// CampusConnect - Status Dashboard
// =====================================

const savedProblems =
    JSON.parse(
        localStorage.getItem("campusProblems")
    ) || [];


// Total submitted problems
const totalProblems =
    document.getElementById("totalProblems");

if (totalProblems) {
    totalProblems.textContent =
        savedProblems.length + 3;
}


// Submitted
const submittedCount =
    document.getElementById("submittedCount");

if (submittedCount) {

    const count =
        savedProblems.filter(
            problem => problem.status === "Submitted"
        ).length;

    submittedCount.textContent =
        count + 1;
}


// Under review
const reviewCount =
    document.getElementById("reviewCount");

if (reviewCount) {

    const count =
        savedProblems.filter(
            problem => problem.status === "Under Review"
        ).length;

    reviewCount.textContent =
        count + 1;
}


// Completed
const completedCount =
    document.getElementById("completedCount");

if (completedCount) {

    const count =
        savedProblems.filter(
            problem => problem.status === "Completed"
        ).length;

    completedCount.textContent =
        count;
}


// Progress bar
const progressBar =
    document.getElementById("progressBar");

if (progressBar) {

    setTimeout(() => {
        progressBar.style.width = "65%";
    }, 500);
}
