import styles from './ProjectsStyles.module.css';
import ecommerce from '../../assets/eCommerce.jpeg';
import landingpage from '../../assets/landingpage.png';
import todolist from '../../assets/todolist.png';
import weather from '../../assets/weather.png';
import quizgame from '../../assets/quizgame.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" >
      <div className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard key="ecommerce" src={ecommerce} link="https://astounding-syrniki-875666.netlify.app/" h3="E-Commerce" p="Shopping App"/>
        <ProjectCard key="landingpage" src={landingpage} link="https://ornate-rugelach-a231b0.netlify.app/" h3="Landing Page" p="Shopping App"/>
        <ProjectCard key="todolist" src={todolist} link="https://thriving-manatee-7aea16.netlify.app/" h3="To-Do List" p="Organizer App"/>
        <ProjectCard key="weather" src={weather} link="https://splendid-mooncake-52c484.netlify.app/" h3="Weather App" p="Forecasting App"/>
        <ProjectCard key="quizgame" src={quizgame} link="https://cerulean-sundae-598325.netlify.app/" h3="Quiz Game" p="Challenger App"/>
      </div>
      </div>
    </section>
  );
}

export default Projects;
