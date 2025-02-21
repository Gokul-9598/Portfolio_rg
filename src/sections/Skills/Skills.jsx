import styles from './SkillsStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faPython, faNodeJs,} from '@fortawesome/free-brands-svg-icons';

function Skills() {
  const skills = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'Node.js', icon: faNodeJs, color: '#43853d' },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Python', icon: faPython },
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
          <FontAwesomeIcon icon={skill.icon} size="5x" /><p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;