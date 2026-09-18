// =====================================
// CampusConnect - Problem Details
// =====================================

const problem =
    JSON.parse(
        localStorage.getItem("selectedProblem")
    );

const titleElement =
    document.getElementById("problemTitle");

const descriptionElement =
    document.getElementById("problemDescription");

const categoryElement =
    document.getElementById("problemCategory");

const districtElement =
    document.getElementById("problemDistrict");

const priorityElement =
    document.getElementById("problemPriority");

const statusElement =
    document.getElementById("problemStatus");


if (problem) {

    if (titleElement)
        titleElement.textContent = problem.title;

    if (descriptionElement)
        descriptionElement.textContent =
            problem.description;

    if (categoryElement)
        categoryElement.textContent =
            problem.category;

    if (districtElement)
        districtElement.textContent =
            problem.district;

    if (priorityElement)
        priorityElement.textContent =
            problem.priority;

    if (statusElement)
        statusElement.textContent =
            problem.status;
}


// Progress button
const progressButton =
    document.getElementById("progressButton");

const progressMessage =
    document.getElementById("progressMessage");


if (progressButton) {

    progressButton.addEventListener("click", function() {

        if (progressMessage) {

            progressMessage.innerHTML = `
                <div class="progress-box">
                    <h3>Project Progress</h3>

                    <p>✓ Problem Submitted</p>
                    <p>✓ University Review</p>
                    <p>⏳ Team Formation</p>
                    <p>○ Solution Development</p>
                    <p>○ Community Testing</p>
                </div>
            `;

        }

    });
}