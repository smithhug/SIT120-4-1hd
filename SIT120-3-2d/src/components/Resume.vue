<template>
    <div class="resume">
      <!-- Left Column -->
      <div class="left-column">
        <div class="profile">
          <img src="../assets/profile.jpg" alt="Avatar">
          <h2>{{ fullName }}</h2>
          <p>Student at Deakin University</p>
          <p>Studying Computer Science since 2020</p>
        </div>
        <div class="contact-details">
          <h2>Contact Information</h2>
          <p>Location: Melbourne, Australia</p>
          <p>Email: smithhug@deakin.edu.au</p>
          <p>Phone: 0444 333 222</p>
        </div>
      </div>
  
      <div class="right-column">
  
        <div class="skills">
          <h2>Skills</h2>
          <ul>
            <li>Experience with app development in various programming languages: (C#, C++, Python, Java, etc)</li>
            <li>Experience with front-end and back-end frameworks (React, Node.js, Vue 3)</li>
            <li>Extensive Knowledge of Microsoft, Google and Adobe suite applications (Docs, Excel, Sheets, Photoshop, Dreamweaver, etc)</li>
            <li>Experience in Cloud Computing Services (Azure, Google Cloud, Firebase)</li>
            <li>Knowledge of project management methodologies (Agile & Scrum)</li>
            <li>Efficient Communication and Team Working skills</li>
            <li>Strong Flexibility skills to account for setbacks or unexpected changes</li>
            <li>Easily able to understand new systems and frameworks</li>
          </ul>
        </div>
  
        <div class="work-experience">
          <h2>Work Experience</h2>
          <div class="experience">
            <h3>Development Consultant at ExampleCompany</h3>
            <p>May 2021 – September 2021</p>
            <p>Managed multiple front-end and back-end web applications for various clients.</p>
          </div>
        </div>
  
        <div class="education">
          <h2>Education</h2>
          <div class="education-entry">
            <h3>Deakin University</h3>
            <p>Bachellor of Computer Science</p>
            <p>Commenced 2020 - Set to Graduate 2024</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: "Hugo Smith"
      };
    }
  };
  </script>
  
  <style scoped>
  .resume {
    display: flex;
    justify-content: space-between;
    margin: 2%;
  }
  
  .left-column,
  .right-column {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 48%;
  }
  
  .profile img {
    width: 100%;
  }
  
  .left-column h3,
  .right-column h3 {
    margin-top: 0;
  }
  
  .left-column p,
  .right-column p {
    margin: 10px 0;
  }
  
  .skills ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  .skills {
    margin-bottom: 25px;
  }

  .work-experience {
    margin-bottom: 25px;
  }
  
  * {
    color: black;
  }
  </style>
  