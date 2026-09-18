// =====================================
// CampusConnect - Report Problem
// =====================================

const reportForm = document.getElementById("reportForm");

if (reportForm) {

    reportForm.addEventListener("submit", function(event) {

        // Stop page refresh
        event.preventDefault();

        // Get form values
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const category = document.getElementById("category").value;
        const district = document.getElementById("district").value;
        const location = document.getElementById("location").value.trim();
        const priority = document.querySelector(
            'input[name="priority"]:checked'
        );

        // Validation
        if (title === "") {
            alert("Please enter problem title.");
            return;
        }

        if (description === "") {
            alert("Please describe the problem.");
            return;
        }

        if (category === "") {
            alert("Please select a category.");
            return;
        }

        if (district === "") {
            alert("Please select district.");
            return;
        }

        if (location === "") {
            alert("Please enter location.");
            return;
        }

        if (!priority) {
            alert("Please select priority.");
            return;
        }

        // Create problem object
        const problem = {
            id: Date.now(),
            title: title,
            description: description,
            category: category,
            district: district,
            location: location,
            priority: priority.value,
            status: "Submitted",
            date: new Date().toLocaleDateString()
        };

        // Get old problems
        let problems = JSON.parse(
            localStorage.getItem("campusProblems")
        ) || [];

        // Add new problem
        problems.push(problem);

        // Save in browser
        localStorage.setItem(
            "campusProblems",
            JSON.stringify(problems)
        );

        // Success message
        alert("Problem Submitted Successfully! ✓");

        // Clear form
        reportForm.reset();

    });
}