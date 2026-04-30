const textElement = document.querySelector(".typewriter");
const roles = ["Data Analyst","Dashboard Developer","Reporting Analyst"];

let roleIndex = 0;
let charIndex = 0;
let typeSpeed = 200;

function typeEffect() {
    const currentRole = roles[roleIndex];

    // Typing logic
    textElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    // Check if the word is finished
    if (charIndex === currentRole.length) {
        // Pause at the end so people can read it
        typeSpeed = 700; 
        
        // Reset for the next word
        charIndex = 0;
        roleIndex = (roleIndex + 1) % roles.length;
    } else {
        // Normal typing speed
        typeSpeed = 150;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);// Start the animation when the page loads


const projectData = {
    retail: {
        title: "Retail Sales Analytics Dashboard",
        img:["image/retail.png","image/retail2.png"],
        overview: "This project is an end-to-end retail sales analysis built using Python, SQL, and Power BI.The goal is to analyze business performance and      generate insights on revenue, products, and customer behavior through an interactive dashboard.",
        objectives: ["Identify high-revenue regions", "Analyze payment method distribution", "Segment customers by age"],
        tools: ["Python", "SQL", "Power BI"],
        insights: ["Revenue concentration in MH region", "80% digital payment adoption", "Primary audience: 26-45 years"],
        recommendations: ["Expand sales beyond Maharashtra to reduce dependency","Promote and optimize digital payment methods","Target 26–45 age group with focused marketing","Focus on high-performing products and optimize weak ones"],
        link: "https://github.com/PiyumiPerera123/retail-sales-analytics-dashboard/"
        },


    online: {
        title: "Online Sales Analytics",
        img:["image/online.jpg"],
        overview: "Interactive Power BI dashboard analyzing e-commerce sales data from Kaggle, providing insights into revenue trends, customer behavior,   and product performance to support data-driven decision-making.",
        objectives: ["Track monthly growth", "Analyze gender-based purchasing", "Product volume analysis"],
        tools: ["Power BI", "Excel"],
        insights: ["62.17% revenue from female customers", "Office products lead in volume", "36-month retention peak"],
        recommendations: ["Targeted female-centric campaigns", "Restock office inventory"],
        link: "https://github.com/PiyumiPerera123/Online-Sales-Analytics-Dashboard-/"
        },


   usa: {
      title: "USA Online Sales Dashboard (Excel)",
      img:["image/usa.png"],
      overview: "An interactive Excel dashboard analyzing online sales, designed to track revenue trends, customer behavior, and product performance.",
      objectives: ["Analyze regional sales performance", "Identify monthly revenue trends and peak periods","Evaluate product category performance"],
      tools: [ "Microsoft Excel","Pivot Tables & Pivot Charts","Power Pivot", "Macros","Slicers"],
      insights: ["South region generates the highest revenue","December records the peak monthly sales","Mobiles & Tablets are the top-performing category","Sales distribution is balanced across genders"],
      recommendations: ["Strengthen distribution and logistics in high-performing regions","Leverage peak sales periods with targeted promotions","Focus marketing efforts on high-demand product categories"],
      link: "https://github.com/PiyumiPerera123/excel-online-sales-dashboard/"
      },


   career: {
        title: "Career Aspirations Study",
        img:["image/caeer.png","image/caeer2.png"],
        overview: "This project is a survey-based analysis of 3rd-year undergraduates in the Faculty of Science, University of Colombo. The study explores  students' career goals, preparedness levels, influencing factors, and challenges faced when planning their future.",
        objectives: ["Identify career barriers", "Compare research vs industry preference", "Gender-based goal analysis"],
        tools: ["Python", "Pandas", "Seaborn"],
        insights: ["Research-oriented students prefer higher studies, while others focus on local job opportunities", "Financial barriers significant in males", "Frequent knowledge-seeking improves career preparedness"],
        recommendations: ["Career counseling focused on funding", "Skill-bridging workshops"],
        link: "https://github.com/PiyumiPerera123/Career-Aspirations-Preparedness-Among-Undergraduates/"
        },


   workforce: {
        title: "Workforce Analytics",
        img:["image/Workforce.png","image/Workforce2.png"],
        overview: "This project is an interactive Power BI dashboard built to analyze workforce data and generate key HR insights. It focuses on employee demographics, performance, hiring patterns, and turnover trends to support effective workforce planning.",
        objectives: ["Tenure analysis", "Turnover reason tracking", "Performance vs Demographics"],
        tools: ["Power BI", "DAX"],
        insights: ["310 employees with 182 active","Average tenure is 8.57 years","Turnover shows an increasing trend over time",
"Production is the largest departmen"],
        recommendations: ["Implement clear promotion paths", "Focus on employee engagement"],
        link: "https://github.com/PiyumiPerera123/Workforce-Analytics-Dashboard/"
        },


    churn: {
        title: "Customer Churn Analysis",
        img:["image/churn2.png","image/churn3.png"],
        overview: "This project analyzes customer churn behavior for SpeedyCall, a U.S.-based telecom provider. The goal was to identify key factors influencing customer churn and provide actionable insights to improve customer retention.",
        objectives: ["Analyze risk factors", "Contract type impact", "Demographic risk profiling"],
        tools: ["SPSS", "Statistical Testing"],
        insights: ["Fiber optic users show higher churn", "Senior citizens at higher risk", "Month-to-month contracts are volatile"],
        recommendations: ["Incentivize long-term contracts", "Improve fiber optic service reliability"],
        link: "https://github.com/PiyumiPerera123/-Customer-Churn-Analysis-Telecom-SPSS-/"
        },


    insurance: {
        title: "Insurance Claim Analysis",
        overview: "This project analyzes how demographic and health-related factors such as age, BMI, diabetes status, and smoking behavior influence insurance claim amounts. The study also compares different sampling techniques to evaluate their accuracy in estimating population parameters.",
        objectives: ["Sampling method comparison", "BMI vs Claim correlation", "Smoking status impact"],
        tools: ["R Language"],
        insights: ["Stratified sampling provided highest accuracy", "Strong correlation between BMI and claims", "Smokers incur 3x higher costs"],
        recommendations: ["Adjust premiums based on BMI/Smoking", "Promote wellness programs"],
        link: "https://github.com/PiyumiPerera123/Insurance-Claim-Analysis-using-Sampling-Techniques-R-/"
        }
   }



function openProject(key) {
    // THIS stops the modal if you click a link or a button
    if (window.event) {
        const clickedElement = window.event.target;
        if (clickedElement.closest('.hero-socials') || 
            clickedElement.closest('.btn-group') || 
            clickedElement.tagName === 'A' || 
            clickedElement.tagName === 'I') {
            return; // EXIT the function, do not open the modal
        }
    }
    const data = projectData[key];
    
    // Safety check: if project key is wrong, stop here
    if (!data) {
        console.error("Project data not found for key:", key);
        return;
    }

    const body = document.getElementById('caseStudyBody');

    //  Handle the images (Safe Check)
    let imageHtml = "";
    if (data.img) {
        if (Array.isArray(data.img)) {
            imageHtml = data.img.map(src => `<img src="${src}" alt="${data.title}" class="modal-dashboard-img">`).join('');
        } else {
            imageHtml = `<img src="${data.img}" alt="${data.title}" class="modal-dashboard-img">`;
        }
    }

    //  Build the body with Safety Guards (|| [])
    body.innerHTML = `
        <div class="case-study-header">
            <h2>${data.title || 'Untitled Project'}</h2>
        </div>
        
        <div class="case-study-section">
            ${imageHtml}
        </div>

        <div class="case-study-section">
            <h5>Project Overview</h5>
            <p>${data.overview || 'No overview available.'}</p>
        </div>

        <div class="case-study-grid">
            <div class="case-study-section">
                <h5>Objectives</h5>
                <ul>${(data.objectives || []).map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
            <div class="case-study-section">
                <h5>Tools</h5>
                <p>${(data.tools || []).join(' | ')}</p>
            </div>
        </div>

        <div class="case-study-section">
            <h5>Key Insights</h5>
            <ul>${(data.insights || []).map(i => `<li>${i}</li>`).join('')}</ul>
        </div>

        <div class="case-study-section">
            <h5>Recommendations</h5>
            <ul>${(data.recommendations || []).map(i => `<li>${i}</li>`).join('')}</ul>
        </div>

        <a href="${data.link || '#'}" target="_blank" class="github-link-btn">View on GitHub</a>
    `;

    //  Show the modal
    document.getElementById('projectModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}


function closeProject() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';

}
// Function to open the certificate
function openCert(imagePath) {
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2 style="color:var(--primary-blue); margin-bottom:15px;font-size: 1.5rem; text-align:center;">Certificate of Completion</h2>
        <img src="${imagePath}" style="width:100%; border-radius:10px; border:1px solid var(--primary-blue);">
        <p style="margin-top:15px; text-align:center; color:var(--text-dim);">Certificate of Completion</p>
    `;

    document.getElementById('pModal').style.display = "block";
    document.body.style.overflow = "hidden"; // Stops background scrolling
}

// The Close Function
function closeP() {
    document.getElementById('pModal').style.display = "none";
    document.body.style.overflow = "auto"; // Re-enables background scrolling
}

window.onclick = function(event) {
    const projectModal = document.getElementById('projectModal');
    const pModal = document.getElementById('pModal');

    // Safety: If the user clicked a link or an icon, do nothing (let the link work)
    if (event.target.closest('.hero')) {
        return; 
    }

    // Close modals if the user clicks the dark background area
    if (event.target === projectModal) {
        closeProject();
    }
    if (event.target === pModal) {
        closeP();
    }
}
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop the page from refreshing

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("https://formspree.io/f/xzdoplwp", {
        method: "POST",
        body: JSON.stringify(data), // This creates the JSON object
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' // Crucial for "Valid JSON" error
        }
    });

    if (response.ok) {
        alert("Thanks for your message! I'll get back to you soon.");
        contactForm.reset();
    } else {
        alert("Oops! There was a problem submitting your form.");
    }
});
