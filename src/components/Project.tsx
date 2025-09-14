import "../App.css";
function Project() {
  return (
    <div className="media pb-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary-300)]">Projects</h1>
      <div className="">
        <div className="box">
          <a href="https://opsentra.vercel.app"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>Opsentra</u></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Aggregates logs from <strong>Docker containers, AWS services, and Linux systems</strong> into a unified centralized platform for efficient monitoring.</li>
            <li>Built a full‑stack MERN web interface (React.js/Vite + Node/Express) enabling seamless log visualization and management.</li>
            <li>Packaged Fluentd as a Docker image and published to Docker Hub, enabling one-step container log collection across environments.</li>
            <li>Automated end-to-end log forwarding for Docker containers: <strong>Container logs → Fluentd → Opsentra backend</strong>, reducing log collection latency and doubling throughput.</li>
          </ul>
        </div>

        <div className="box">
          <a href="https://github.com/Aryankesharwani04/eventio"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>Eventio</u></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Developed a scalable backend using microservices architecture with inter-service communication over <strong>TCP/IP protocols</strong>, isolating Auth, Booking, and Seat Management for improved maintainability.</li>
            <li>Implemented concurrency control for seat reservations, ensuring <strong>100% atomicity</strong> in transactions.</li>
            <li>Optimized system performance by integrating Node.js Cluster and OS-level load balancing, achieving <strong>7,500+ RPS</strong> during stress testing with consistent latency.</li>
            <li>Streamlined request routing via a centralized API Gateway, reducing interservice latency and improving system efficiency.</li>
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
          <a href="https://journee-gilt.vercel.app"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>JOURNEE</u></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Designed and developed a full-stack travel booking platform using <strong>React.js</strong> for the frontend and Node/Express for the backend, ensuring end-to-end MERN stack integration.</li>
            <li>Connected frontend and backend via RESTful APIs for seamless real-time data communication and user interactions.</li>
            <li>Integrated <strong>Cloudinary CDN</strong> for efficient image management, reducing media load times and supporting <strong>100+ concurrent users</strong> with minimal latency.</li>
            <li>Containerized both frontend and backend using <strong>Docker</strong> and published images to Docker Hub, enabling portable and consistent development environments.</li>
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