const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () =>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blue-lg', 'shadow-sm')
        // navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
    }
    else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blue-lg', 'shadow-sm')
        // navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50')
    }
})

function openResumePopup() {
    document.getElementById("resumeModal").classList.remove("hidden");
    document.body.classList.add("overflow-hidden"); // Disable scrolling when modal is open
}

function closeResumePopup() {
    document.getElementById("resumeModal").classList.add("hidden");
    document.body.classList.remove("overflow-hidden"); // Re-enable scrolling when modal is closed
}

const recommendations = [
    {
        quote: 'I am delighted to write a recommendation for Vandit Mehta, who served as a Data Engineer and QA Automation Intern at ALDO during Summer 2023. During his time with us, Vandit Mehta made a significant contribution to our quality assurance efforts, leaving a lasting impression with his dedication and enthusiasm. Vandit joined our team as an intern and quickly demonstrated a keen interest in learning and improving his skills in QA automation. I was his team lead when he joined us. He exhibited a strong work ethic and a thirst for knowledge, consistently seeking opportunities to contribute to our projects. Throughout his internship, Vandit showed a remarkable ability to adapt to new tools and technologies, often learning them faster than expected. He was particularly proficient in Python,AWS, and his commitment to staying up-to-date with industry trends was commendable. One of Vandit\'s standout qualities was his attention to detail. He was meticulous in identifying and reporting defects, ensuring that our products reached a high level of quality. His contributions were valuable in preventing issues from reaching our end users. Vandit was not only technically skilled but also a great team player. He was always ready to collaborate, ask questions, and learn from our experienced team members. His ability to work effectively in a team environment and take constructive feedback to improve his skills was highly appreciated. I have no doubt that he will continue to grow and excel in his career.',
        name: 'Prakash Singh Mony',
        role: 'Technical Lead at ALDO Group',
        image: './images/prakash.jpeg' // Add image path for the person
    },
    {
        quote: 'I had the opportunity to work with Vandit when he served as a TA for my Data Structures and Algorithms course. He demonstrated a solid understanding of the subject and was consistently helpful in assisting with tutorials and grading activities. His approachability and clarity in explaining concepts contributed positively to the learning experience, making complex topics more accessible to students. Vandit’s contributions were valuable in facilitating a productive learning environment.',
        name: 'Gengrui (Edward) Zhang',
        role: 'Assistant Professor at Concordia Univeristy',
        image: './images/gengrui.jpeg' // Add image path for the person
    },
    {
        quote: 'Vandit Mehta was my Teaching Assistant (TA) for COMP 348 in Summer 2024. Even though the summer term is very tense and requires double efforts from the TAs, he was very dedicated and cared about students.He also showed high respect to his colleagues and delivered all the duties asked from him by their deadlines.',
        name: 'Hakim Mellah',
        role: 'Assistant Professor at Concordia Univeristy',
        image: './images/hakim.jpeg' // Add image path for the person
    }
    // Add more recommendations as needed
];

let currentIndex = 0;

const recommendationContainer = document.getElementById('recommendation-container');

// Update recommendation content
function updateRecommendation(index) {
    const recommendation = recommendations[index];
    
    recommendationContainer.innerHTML = `
        <!-- Left Arrow -->
        <div id="left-arrow" class="cursor-pointer">
            <img src="./images/left-arrow.png" alt="left-arrow" class="w-6 h-6">
        </div>

        <!-- Recommendation Card -->
        <div class="recommendation-card">
            <img src="${recommendation.image}" alt="Person Image" class="w-24 h-24 rounded-full mx-auto mb-4">
            <p class="text-gray-700 mb-4 quote">${recommendation.quote}</p>
            <h3 class="font-semibold text-xl">${recommendation.name}</h3>
            <p class="text-gray-500">${recommendation.role}</p>
        </div>

        <!-- Right Arrow -->
        <div id="right-arrow" class="cursor-pointer">
            <img src="./images/right-arrow.png" alt="right-arrow" class="w-6 h-6">
        </div>
    `;
}


// Event listener for Right Arrow
document.addEventListener('click', (event) => {
    if (event.target.closest('#right-arrow')) {
        currentIndex = (currentIndex + 1) % recommendations.length;
        updateRecommendation(currentIndex);
    }
});

// Event listener for Left Arrow
document.addEventListener('click', (event) => {
    if (event.target.closest('#left-arrow')) {
        currentIndex = (currentIndex - 1 + recommendations.length) % recommendations.length;
        updateRecommendation(currentIndex);
    }
});

// Initialize the first recommendation
updateRecommendation(currentIndex);