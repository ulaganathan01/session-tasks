const jsonData = [
  {
    name: {
      firstName: "Ulaganathan",
      lastName: "S",
    },
  },
  {
    age: 24,
  },
  {
    contact: {
      "e-mail": "ulaganathanselvam2000@gmail.com",
      phone: "+91-7373888091",
      place: "Coimbatore, India",
      linkedin: "https://www.linkedin.com/in/ulaganathan-selvaraj/",
      github: "https://github.com/ulaganathan01",
    },
  },
  {
    education: {
      course: "Bachelor of Science",
      specialization: "Physics",
    },
  },
  {
    about: "Full Stack Developer",
  },
  {
    objetcive:
      "A motivated individual who is good at problem solving and programming, with an emphasis on writing clean and maintainable code. Experienced with data structures/algorithms and designing optimal solutions, aspiring to make a career in software engineering with a focus on full stack development",
  },
  {
    skills: [
      "Data Structures and Algorithms",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "MySQL",
      "Python",
      "HTML & CSS",
    ],
  },
  {
    projects: [
      {
        title: "Contacts Manager App",
        date: "",
        "technologies-used": "ReactJS, NodeJs, ExpressJS, MongoDB",
        "github-link": "https://github.com/ulaganathan01",
        summary: "",
      },
      {
        title: "Insta Clone App",
        date: "",
        "technologies-used": "ReactJS, NodeJs, ExpressJS, MongoDB",
        "github-link": "https://github.com/ulaganathan01",
        summary: "",
      },
    ],
  },
];

// For loop
const forLoop = (data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

// For in loop
const forInLoop = (data) => {
    for(let x in data){
        console.log(data[x]);
    }
}

// For of loop
const forOfLoop = (data) => {
    for(let x of data){
        console.log(x);
    }
}

// For each loop
const forEachLoop = (data) => {
  data.forEach(res => {
    console.log(res);
  })
}

forInLoop(jsonData);
forInLoop(jsonData);
forOfLoop(jsonData);
forEachLoop(jsonData);