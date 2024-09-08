import styles from "./Skills.module.css";
import { FaGitAlt, FaSquareJs, FaReact, FaNodeJs } from "react-icons/fa6";

function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
          <FaSquareJs />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaGitAlt />
        </li>
        <li>
          <FaNodeJs />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
