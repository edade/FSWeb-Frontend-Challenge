import proje1 from "../img/profile.jpeg"
import proje2 from "../img/profile.jpeg"

export const ProjectsData = [
    {
      id: 1,
      image: proje1,
      projectHeader: "Filmler Listesi ",
      introduction:
        "This project provides showing the list of movies and give opportunity to add a favorite movies list",
      techStack: ["Redux", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/edade/fsweb-s10g2-redux-filmler",
      website:
        "https://fsweb-s10g2-redux-filmler-eight.vercel.app/movies",
    },
    {
      id: 2,
      image: proje2,
      projectHeader: "Pizza Order",
      introduction:
        "This website basically allows to order Pizza by selecting ingridients/size of the Pizza and calculate the price  ",
      techStack: ["React", "JavaScript", "Yup", "Cypress"],
      github: "https://github.com/edade/fsweb-s7-challenge-pizza",
      website: "https://fsweb-s7-challenge-pizza-chir0he2r-edas-projects-b8aefaed.vercel.app/",
    },
  ];