import "../App.css";
function Project() {
  return (
    <div className="media pb-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary-300)]">Projects</h1>
      <div className="">
        <div className="box">
          <a href="#"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>Eventio</u></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Designed and implemented a high-performance, scalable backend utilizing microservices architecture to optimize system modularity and maintainability.</li>
            <li>Developed a robust concurrency control mechanism for seat reservations, ensuring ACID compliance and 100% atomicity in transaction management.</li>
            <li>Enhanced system performance by integrating Node.js Cluster and OS-level load balancing, achieving efficient resource utilization and improved response times.</li>
          </ul>
        </div>
        <div className="box">
          <a href="#"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>BeUnique</u></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Engineered a full-stack web application for automating username availability checks across multiple platforms, improving user experience and efficiency.</li>
            <li>Developed a React-based frontend with optimized search functionality using debouncing techniques to minimize redundant API requests and improve performance.</li>
            <li>Designed and implemented scalable RESTful APIs to ensure high availability and seamless data retrieval.</li>
          </ul>
        </div>
        <div className="box">
          <a href="#"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>JOURNEE</u></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Developed a feature-rich, full-stack travel booking platform capable of handling 100+ concurrent users with minimal latency.</li>
            <li>Integrated Cloudinary CDN for seamless image upload and management, enhancing performance and reducing server load.</li>
            <li>Optimized database queries and API response times, ensuring efficient data retrieval and a smooth user experience.</li>
          </ul>
        </div>

        <div className="box">
          <a href="https://github.com/Aryankesharwani04/javascriptBackend/tree/main/VideoStreaming"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>VideoFlix</u></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Developed a backend system for a scalable video streaming application, implementing video upload, storage, and streaming functionalities.</li>
            <li>Integrated user authentication and authorization mechanisms, ensuring secure access and role-based content control.</li>
            <li>Implemented adaptive bitrate streaming for enhanced playback experience based on network conditions.</li>
          </ul>
        </div>
        <div className="box">
          <a href="https://github.com/Aryankesharwani04/WebScrapping/tree/main/attendanceGetter"><h1 className="text-xl font-bold text-[var(--accent-200)]"><u>Attendance Scraping</u></h1></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Designed and deployed a web scraping tool using Node.js and Puppeteer to automate retrieval of attendance data from the college ERP portal.</li>
            <li>Implemented automated login functionality to securely handle user authentication and session management.</li>
            <li>Extracted and parsed dynamic HTML content to fetch lecture attendance records, transforming raw data into structured insights.</li>
            <li>Gained expertise in web automation, data extraction, and headless browser interactions using Puppeteer.</li>
          </ul>
        </div>
        <div className="box">
          <a href="https://github.com/Aryankesharwani04/javascriptBackend/tree/main/CHESS"><h1 className="text-xl font-bold text-[var(--accent-200)]"><u>Chess Game</u></h1></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Developed a real-time multiplayer chess game using Express.js and Socket.io, ensuring seamless bidirectional communication between players.</li>
            <li>Implemented a comprehensive chess logic engine using Chess.js, handling game state management and move validation.</li>
            <li>Designed a dynamic user interface with EJS, rendering real-time game updates and interactions based on backend computations.</li>
            <li>Integrated WebSocket-based real-time event handling to provide a smooth and responsive gaming experience.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
