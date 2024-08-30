// Sample job data
const jobs = [
    {
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        location: "New York, NY",
        description: "Develop and maintain web applications. Required skills: JavaScript, Python, React."
    },
    {
        title: "Data Analyst",
        company: "DataWorks",
        location: "San Francisco, CA",
        description: "Analyze and interpret complex data sets. Required skills: SQL, Python, Tableau."
    },
    {
        title: "UX Designer",
        company: "Creative Minds",
        location: "Los Angeles, CA",
        description: "Design user interfaces for web and mobile apps. Required skills: Adobe XD, Figma, CSS."
    }
];

// Search function
function searchJobs() {
    const jobTitle = document.getElementById('job-title').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter jobs based on search input
    const filteredJobs = jobs.filter(job => {
        return (job.title.toLowerCase().includes(jobTitle) && job.location.toLowerCase().includes(location));
    });

    // Display filtered jobs
    if (filteredJobs.length > 0) {
        filteredJobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            jobCard.innerHTML = `
                <h2>${job.title}</h2>
                <p class="company">${job.company}</p>
                <p class="location">${job.location}</p>
                <p>${job.description}</p>
                <button class="apply-button">Apply</button>
            `;
            resultsContainer.appendChild(jobCard);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}
