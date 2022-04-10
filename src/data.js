const projects = [
    {
        id: 0,
        name: "hcc",
        description: "Hcc is a toy C Compiler. Hcc can compile itself though only subset of C is supported. I learned the basics of \
        parsing(syntax analysis) and how C language works",
        link: "https://github.com/hedwig100/hcc"
    },
    {
        id: 1,
        name: "PRML",
        description: "Various machine learning algorithms in 「Pattern Recognition and Machine Learning」are implemented \
        without using machine learning packages such as scikit-learn. This is written in Python.",
        link: "https://github.com/hedwig100/PRML"
    },
    {
        id: 2,
        name: "go-network",
        description: "Implementation of protocol stack (ex. IP,ICMP,UDP,TCP) written in Go. I learned how \
        low-level protocol stack works that is always hidden by OS.",
        link: "https://github.com/hedwig100/go-network"
    },
    {
        id: 3,
        name: "resume",
        description: "This resume is written in Vue.js",
        link: "https://github.com/hedwig100/resume"
    },
    {
        id: 4,
        name: "bookmark",
        description: "Bookmark is an app to keep track of reading. This is a Single Page Application. API server is written in Go and \
        a front-end is written in Vue.js. This project is in progress.",
        link: "https://github.com/hedwig100/bookmark"
    }
]

const experiences = [
    {
        id: 0,
        name: "LINE Corp(short-term intern)",
        description: "September 2021,development of a chat application that can do speech recognition. My work was to train a \
        machine learning model."
    }
]

const others = [
    {
        id: 0,
        name: "Atcoder",
        description: "Atcoder is a programming contest site. Highest rating is 1761 (November 15,2020). I haven't participated recently...",
        link: "https://atcoder.jp/users/hedwig?lang=en"
    },
    {
        id: 1,
        name: "TOEFL iBT",
        description: "My best score is 94 (September 11,2021)"
    }
]

const intro = {
    "name": "hedwig",
    "detail": "I am a university student in japan. My interest is computer science and mathmatics. I like reading books and writing a code."
}

export { projects, experiences, others, intro };