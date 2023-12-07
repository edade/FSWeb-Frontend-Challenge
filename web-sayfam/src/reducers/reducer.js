import { TOGGLE_THEME } from "../actions/actions";

const initialState = {
  darkMode: localStorage.getItem('darkMode') === 'true' || false,
  headerData: [{
    name: "Eda",
    role: "full-stack developer",
    mail: "edakalaycioglu@gmail.com",
    image: "./img/profile.jpeg",
  }
    
  ],
  
  skillsData: [{
    skillHeader: "Skills",
    imageJs: "./img/js.png",
    imageReact: "./img/react.png",
    imageRedux: "./img/redux.png",
    imageNode: "./img/node.png", 
    imageVs: "./img/vscode.png",
    imageFigma: "./img/figma.png"
  }
],

profileData: [{
  profileHeader: "Profile",
  basicInfo: "Basic Information",
  birthdateH: "Birthdate",
  birthdate: "13.11.1998",
  addressH: "Adress",
  address: "Uskudar/Istanbul",
  educationH: "Education", 
  education: "Kadir Has University-Computer Engineering, 2022",
  prefRoleH: "Preffered Role",
  prefRole: "Full-stack Developer",
  aboutmeH: "About me",
  p1: "I studied at Kadir Has University in Computer Engineering department.",
  p2: " This profile will show examples of my projects that I completed thanks to Workintech."
}
], 
ProjectsData: [
  {
    id: 1,
    image: "./img/filmler.png",
    projectHeader: "Filmler Listesi ",
    introduction:
      "This project provides showing the list of movies and give opportunity to add a favorite movies list",
    techStack: ["Redux", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/edade/fsweb-s10g2-redux-filmler",
    website: "https://fsweb-s10g2-redux-filmler-eight.vercel.app/movies",
  },
  {
    id: 2,
    image: "./img/pizza.png",
    projectHeader: "Pizza Order",
    introduction:
      "This website basically allows to order Pizza by selecting ingridients/size of the Pizza and calculate the price  ",
    techStack: ["React", "JavaScript", "Yup", "Cypress"],
    github: "https://github.com/edade/fsweb-s7-challenge-pizza",
    website:
      "https://fsweb-s7-challenge-pizza-chir0he2r-edas-projects-b8aefaed.vercel.app/",
  },
],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const darkMode = !state.darkMode;
      localStorage.setItem('darkMode', darkMode);
      return {
        ...state,
        darkMode: darkMode,
      };
    default:
      return state;
  }
};

export default Reducer;