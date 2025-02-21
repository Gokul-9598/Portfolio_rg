import { useState } from 'react'; 
import { Button } from 'react-scroll'; // Import the Button component
import cvPdf from '../../assets/cv.pdf';  
import styles from '../Navbar/NavbarStyles.module.css'; // Assuming CSS Modules

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <button className={styles.menuToggle} onClick={toggleDropdown}>
          ☰
        </button>
        <ul
          className={`${styles.navbarMenu} ${
            isDropdownOpen ? styles.open : ''
          }`}
        >
          <li className={styles.navbarItem}>
            <Button
              to="hero"
              smooth={true}
              duration={500}
              activeClass={styles.active}
            >
              About Me
            </Button>
          </li>
          <li className={styles.navbarItem}>
            <a>
              <Button href={cvPdf} target="_blank" rel="noopener noreferrer">
                Resume
               </Button>
            </a>
          </li>
          <li className={styles.navbarItem}>
            <Button
              to="projects"
              smooth={true}
              duration={500}
              activeClass={styles.active}
            >
              Projects
            </Button>
          </li>
          <li className={styles.navbarItem}>
            <Button
              to="skills"
              smooth={true}
              duration={500}
              activeClass={styles.active}
            >
              Skills
            </Button>
          </li>
          <li className={styles.navbarItem}>
            <Button
              to="contact"
              smooth={true}
              duration={500}
              activeClass={styles.active}
            >
              Contact
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
