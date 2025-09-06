import project1_img from '../assets/P1.png'
import project2_img from '../assets/P2.png'
import project3_img from '../assets/P3.png'
import project4_img from '../assets/P4.png'
import project5_img from '../assets/P5.png'
import project6_img from '../assets/P6.png'
import project7_img from '../assets/P7.png'
import project8_img from '../assets/P8.png'

const mywork_data = [
    {
        w_no: 1,
        w_name: "DrawX | Collaboration whiteboard",
        w_img: project1_img,
        github: "https://github.com/power2loop/Whiteboard",
        live: "https://whiteboard-1kfc.onrender.com/",
        technologies: "ReactJs, NodeJs, ExpressJs, Socket.io, Firebase",
        description1: "Created an interactive digital whiteboard for drawing, writing, and brainstorming ideas.",
        description2: "Real-Time Collaboration Ready Structured the project for seamless integration of real-time features, enabling multiple users to collaborate efficiently.",
        description3: "Built an intuitive interface with toolbars, text tools, and shape controls for easy use."
    },
    {
        w_no: 2,
        w_name: "Password Vault | Password Manager",
        w_img: project2_img,
        github: "https://github.com/power2loop/password-saver",
        live: "https://password-saver-two.vercel.app/",
        technologies: "ReactJs, NodeJs, MongoDB, Express, HTML, CSS",
        description1: "Developed a secure full-stack password manager for encrypted storage and retrieval of credentials.",
        description2: "Added JWT authentication and password encryption in MongoDB to protect sensitive data.",
        description3: "Added search and delete features using URL-based queries, making password management faster and easier."
    },
    {
        w_no: 3,
        w_name: "DairyGo | Digital Dairy Management",
        w_img: project3_img,
        github: "https://github.com/power2loop/dairy-go",
        live: "https://dairy-go.vercel.app/",
        technologies: "React, Node.js, MongoDB, Express, HTML, CSS",
        description1: "Built a full-stack web app with Admin and Staff roles to manage dairy operations digitally.",
        description2: "Implemented core modules for purchases, sales, staff management, and real-time stock tracking, reducing manual effort and improving efficiency.",
        description3: "Implemented secure authentication and optimized database schema for reliable performance."
    },
    {
        w_no: 4,
        w_name: "CineMatch | Movie Recommender System",
        w_img: project4_img,
        github: "https://github.com/power2loop/movie_recommender_system",
        live: "https://movierecommendersystem1212.streamlit.app/",
        technologies: "Python, Streamlit, Pandas, Scikit-learn, TMDB API",
        description1: "Built a content-based recommender using the TMDb 5000 Movies Dataset and similarity scores.",
        description2: "Implemented recommendation logic with TF-IDF and cosine similarity to suggest similar movies.",
        description3: "Developed and deployed a Flask API for serving real-time movie recommendations."
    },
    {
        w_no: 5,
        w_name: "SchoolSearch | Educational Institution Finder",
        w_img: project5_img,
        github: "https://github.com/power2loop/SchoolSearch",
        live: "https://schoolsearch-kqy9.onrender.com/",
        technologies: "React, Node.js, PostgreSQL, Express, HTML, CSS",
        description1: "Built a simple web application to add new schools and store their details.",
        description2: "Implemented a feature to view and browse all schools in the database.",
        description3: "Designed a clean, easy-to-use interface for quick access and management."
    },
    {
        w_no: 6,
        w_name: "TaskFlow | To-Do Manager",
        w_img: project6_img,
        github: "https://github.com/power2loop/To-Do-List",
        live: "https://to-do-list-cyan-kappa-83.vercel.app/",
        technologies: "React, LocalStorage, CSS3, JavaScript",
        description1: "Developed a responsive and user-friendly web application to organize tasks, boost productivity, and track daily goals.",
        description2: "Implemented core features including add, edit, mark as complete, and delete, with persistent storage using local storage.",
        description3: "Designed a clean, mobile-friendly interface ensuring seamless access across devices."
    },
    {
        w_no: 7,
        w_name: "WeatherNow | Real-time Weather App",
        w_img: project7_img,
        github: "https://github.com/power2loop/Weather-App",
        live: "https://weather-app-psi-eight-12.vercel.app/",
        technologies: "React, OpenWeather API, CSS, JavaScript",
        description1: "Built an interactive web application that provides real-time weather updates for any city using a weather API.",
        description2: "Implemented key features including city-based search, live temperature, weather conditions, and extra details like wind speed, humidity, and pressure",
        description3: "Designed a responsive interface with dynamic icons to deliver a smooth experience across desktop and mobile devices."
    },
    {
        w_no: 8,
        w_name: "VoiceGen | Text-to-Speech Converter",
        w_img: project8_img,
        github: "https://github.com/power2loop/Text-to-speech",
        live: "https://text-to-speech-ten-wine.vercel.app/",
        technologies: "HTML, CSS, JavaScript",
        description1: "Developed a lightweight web application that converts written text into speech using the Web Speech API.",
        description2: "Implemented real-time voice output with multiple voice options, ensuring an interactive and accessible user experience.",
        description3: "Built with pure HTML, CSS, and JavaScript for fast performance without external dependencies."
    }
]

export default mywork_data;
