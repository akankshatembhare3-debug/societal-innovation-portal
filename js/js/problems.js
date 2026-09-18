// =====================================
// CampusConnect - Problems
// =====================================

const problemsContainer =
    document.getElementById("problemsContainer");

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");


// Get saved problems
let problems = JSON.parse(
    localStorage.getItem("campusProblems")
) || [];


// Example problems
const defaultProblems = [
    {
        id: 1,
        title: "Water Shortage in Village",
        description: "Village is facing water shortage during summer.",
        category: "Water",
        district: "Ranchi",
        location: "Ranchi",
        priority: "High",
        status: "Under Review"
    },

    {
        id: 2,
        title: "School Infrastructure Issue",
        description: "School needs better classroom infrastructure.",
        category: "Education",
        district: "Dhanbad",
        location: "Dhanbad",
        priority: "Medium",
        status: "Submitted"
    },

    {
        id: 3,
        title: "Irrigation Problem",
        description: "Farmers are facing difficulty with irrigation.",
        category: "Agriculture",
        district: "Bokaro",
        location: "Bokaro",
        priority: "High",
        status: "Under Review"
    }
];


// Combine default + user submitted
const allProblems = [
    ...defaultProblems,
    ...problems
];


// Display problems
function displayProblems(data) {

    if (!problemsContainer) return;

    problemsContainer.innerHTML = "";

    if (data.length === 0) {

        problemsContainer.innerHTML = `
            <div class="no-results">
                <h3>No problems found</h3>
                <p>Try another search or category.</p>
            </div>
        `;

        return;
    }


    data.forEach(problem => {

        const card = document.createElement("div");

        card.className = "problem-card";

        card.innerHTML = `
            <span class="problem-category">
                ${problem.category}
            </span>

            <h3>${problem.title}</h3>

            <p>${problem.description}</p>

            <div class="problem-info">
                <span>📍 ${problem.district}</span>
                <span>⚡ ${problem.priority}</span>
            </div>

            <p class="status">
                Status: <strong>${problem.status}</strong>
            </p>

            <button
                class="view-btn"
                onclick="viewProblem(${problem.id})">
                View Details
            </button>
        `;

        problemsContainer.appendChild(card);
    });
}


// Search
if (searchInput) {

    searchInput.addEventListener("input", function() {

        const searchText =
            this.value.toLowerCase();

        const filtered = allProblems.filter(problem =>
            problem.title.toLowerCase().includes(searchText) ||
            problem.description.toLowerCase().includes(searchText) ||
            problem.category.toLowerCase().includes(searchText) ||
            problem.district.toLowerCase().includes(searchText)
        );

        displayProblems(filtered);
    });
}


// Category filters
filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        const category =
            this.dataset.category;

        if (category === "All") {
            displayProblems(allProblems);
        } else {

            const filtered =
                allProblems.filter(
                    problem =>
                        problem.category === category
                );

            displayProblems(filtered);
        }

        // Active button
        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        this.classList.add("active");
    });
});


// Open details page
function viewProblem(id) {

    localStorage.setItem(
        "selectedProblem",
        JSON.stringify(
            allProblems.find(problem => problem.id == id)
        )
    );

    window.location.href = "details.html";
}


// Initial display
displayProblems(allProblems);