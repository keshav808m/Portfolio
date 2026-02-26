function Projects() {
  return (
    <section id="projects" className="section section-box">
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="card">
          <h3>Video Conferencing & Messaging Platform</h3>

          <p><b>Full Stack Real-Time Application</b></p>

          <ul>
            <li>Developed a real-time video conferencing and messaging platform.</li>
            <li>Implemented video and audio communication using WebRTC.</li>
            <li>Built real-time chat system using WebSockets.</li>
            <li>Created secure user authentication and session management.</li>
            <li>Developed RESTful APIs for meetings and messaging.</li>
            <li>Implemented room creation and joining functionality.</li>
            <li>Integrated database for storing user data and chat history.</li>
            <li>Designed responsive and intuitive user interface.</li>
            <li>Optimized performance for smooth real-time communication.</li>
            <li>Tested and deployed the application for production use.</li>
          </ul>
          
        </div>

        <div className="card">
          <h3>Hotel Booking Platform</h3>

          <ul>
            <li>Developed a complete hotel booking system using MERN Stack.</li>
            <li>Implemented secure user authentication and authorization.</li>
            <li>Built property listing, search, and filter functionality.</li>
            <li>Created booking and reservation management system.</li>
            <li>Developed RESTful APIs for users and bookings.</li>
            <li>Integrated MongoDB for data storage and management.</li>
            <li>Designed responsive and user-friendly UI.</li>
            <li>Optimized backend performance and security.</li>
          </ul>

          <p><b>Tech:</b> MERN Stack</p>
        </div>

        

        <div className="card">
          <h3>Weather App</h3>

          <p><b>React Application (API-Based)</b></p>

          <ul>
            <li>Developed a real-time weather app using React and REST APIs.</li>
            <li>Integrated external API to fetch live weather data.</li>
            <li>Implemented city-based search functionality.</li>
            <li>Displayed temperature, humidity, wind speed, and conditions.</li>
            <li>Used React Hooks for state and lifecycle management.</li>
            <li>Handled loading states and API error responses.</li>
            <li>Designed responsive and user-friendly UI.</li>
            <li>Optimized performance for smooth user experience.</li>
          </ul>
        </div>


      </div>
    </section>
  );
}

export default Projects;