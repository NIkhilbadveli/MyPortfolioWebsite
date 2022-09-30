/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: false, // set false to disable splash screen
    animation: splashAnimation,
    duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: false // Set to false to use static SVG
};

const greeting = {
    username: "Nikhil Badveli",
    title: "Hello everyone, I'm Nikhil Badveli",
    subTitle: emoji(
        "A passionate Data Scientist | ML Engineer | AI Engineer exploring the world of Artificial Intelligence and day dreaming about having a big tech job."
    ),
    resumeLink:
        "", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/NIkhilbadveli",
    linkedin: "https://www.linkedin.com/in/nikhilbadveli/",
    gmail: "nikhilbadveli6@gmail.com",
    // gitlab: "https://gitlab.com/saadpasta",
    // facebook: "https://www.facebook.com/saad.pasta7",
    medium: "https://medium.com/@nikhilbadveli6",
    kaggle: "https://www.kaggle.com/nikhilbadveli",
    // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I am good at",
    subTitle: "MY TECH STACK AS OF NOW",
    skills: [
        emoji(
            "⚡ Understanding the business problem and identifying the possible AI models/algos that can be used"
        ),
        emoji("⚡ Thinking from a data-first perspective"),
        emoji(
            "⚡ Never give up attitude in general"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "University of Essex, Colchester, United Kingdom",
            logo: require("./assets/images/University_of_Essex_logo_2021.png"),
            subHeader: "Master of Science in Artificial Intelligence and its Applications",
            duration: "January 2022 - Present",
            desc: "Dissertation project is about testing out various state-of-the-art reinforcement learning algorithms using OpenAI gym framework.",
            descBullets: [
                "Machine Learning, which includes introduction to basic ML algorithms and the math behind them.",
                "Neural networks and Deep learning, which discusses about ConvNets and AutoEncoders in more detail.",
                "Introduction to Data Science, including the above two modules are some of the key modules.",
            ]
        },
        {
            schoolName: "Indian Institute of Technology, Palakkad",
            logo: require("./assets/images/IIT_PKD_short logo_RGB.jpg"),
            subHeader: "Bachelor of Technology in Electrical Engineering",
            duration: "August 2015 - June 2019",
            desc: "One of the most prestigious universities from India, I had to compete with 14 million students to get a seat in one of these institutions.",
            descBullets: ["This is where I learned about life in general and interacting with different people from various backgrounds."]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: false, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Python", //Insert stack or technology you have experience in
            progressPercentage: "75%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Kotlin",
            progressPercentage: "50%"
        },
        {
            Stack: "MySQL",
            progressPercentage: "80%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Technical Lead",
            company: "Digital Future of Education Pvt. Ltd.",
            companylogo: require("./assets/images/dfoe.png"),
            date: "March 2021 – December 2021",
            desc: "Worked as the team lead and Android developer for cross platform application development which included Web, Android and iOS.",
            descBullets: [
                "Overseen the entire development effort through all the stages to create a primary education market mobile app.",
                "Contributed to rewriting the codebase from Java to Kotlin along with the usage of modern libraries for API calls and background task handling.",
                "Helped in increasing the speed of development (number of screens) by 2 times in all the other platforms (iOS, Web)"
            ]
        },
        {
            role: "Co-founder and CEO",
            company: "Your Kirana",
            companylogo: require("./assets/images/your_kirana.png"),
            date: "March 2020 – February 2021",
            desc: "YourKirana is a mobile app that helps local shop owners by being a mobile POS solution instead of expensive physical devices as alternatives."
        },
        {
            role: "Business Analyst",
            company: "Tredence Analytics Solutions Pvt. Ltd.",
            companylogo: require("./assets/images/tredence_logo.png"),
            date: "August 2019 – February 2020",
            desc: "Helped the world's largest retailer in analysing their vast amounts of raw data and come up with business insights."
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "My Projects",
    subtitle: "All the interesting projects I have taken up over the past few years.",
    projects: [
        {
            image: require("./assets/images/your_kirana.png"),
            projectName: "Your Kirana App",
            projectDesc: "The Android app I have developed for my idea of introducing mass adoption of PoS systems to Indian retailers.",
            footerLink: [
                {
                    name: "Link to the app",
                    url: "https://play.google.com/store/apps/details?id=com.titos.barcodescanner&hl=en_GB&gl=US"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/programmer.svg"),
            projectName: "Social Media Data Miner",
            projectDesc: "Using different libraries for various social media platforms such as Twitter, Facebook, Instagram, this project has the functionality to extract data for a given username.",
            footerLink: [
                {
                    name: "Link to the repo",
                    url: "https://github.com/NIkhilbadveli/SocialMediaDataMiner.git"
                }
                //  you can add extra buttons here.
            ]
        },
    ],
    display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            footerLink: [
                {name: "Certification", url: ""},
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Articles",
    subtitle:
        "-_- -_- -_- -_- -_- -_- -_- -_- -_- -_- -_- -_- -_- -_- -_-",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://medium.com/@nikhilbadveli6/chatbot-1-natural-language-processing-nlp-36d510477ef1",
            title: "Chatbot — 1, Natural Language Processing (NLP)",
            description:
                "This is the first post in the chatbot series, which itself is part of a bigger series on NLP."
        },
        {
            url: "https://medium.com/@nikhilbadveli6/did-deepmind-crack-the-surface-of-artificial-general-intelligence-agi-5cb878611c28",
            title: "Did DeepMind crack the surface of Artificial General Intelligence (AGI)?",
            description:
                "DeepMind, yet again published a crazy paper and this time it involves a robot in a virtual environment behaving according to human instructions expressed in natural language through a chat like interface."
        },
        {
            url: "https://medium.com/@nikhilbadveli6/reinforcement-learning-1-79cdec3599f9",
            title: "Reinforcement Learning — 1",
            description:
                "In this series of posts, we will learn about reinforcement learning (RL)by implementing basic projects that can illustrate RL concepts in a easy to understand manner."
        },
        {
            url: "https://medium.com/insiderfinance/dumbest-crypto-trading-strategy-ever-fba2f11f5073",
            title: "Dumbest crypto trading strategy ever!",
            description:
                "Ah… that elusive dream of making millions through crypto trading. After reading countless stories of people hitting big by just holding bitcoin, I too have dreamed about leaping into this mania. But, I didn’t have enough money during the 2017 boom and when I had enough money, I thought there was no more growth left in the crypto space."
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Feel free to email me for any interesting projects!",
    number: "+44 07442623308",
    email_address: "nikhilbadveli6@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "nikhilbadveli6", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};
