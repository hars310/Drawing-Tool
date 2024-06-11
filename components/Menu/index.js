import { FaPencilAlt,FaUndo,FaRedo,FaEraser } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";

import styles from './index.module.css'
const Menu = () =>{
    return (
        <div className={styles.menuContainer} >
            <div className={styles.iconsWrapper}>
                <FaPencilAlt className={styles.icon} />
            </div>
            <div className={styles.iconsWrapper}>
                <FaEraser className={styles.icon} />
            </div>
            <div className={styles.iconsWrapper}>
                <FaUndo className={styles.icon} />
            </div>
            <div className={styles.iconsWrapper}>
                <FaRedo className={styles.icon} />
            </div>
            <div className={styles.iconsWrapper}>
                <FaFileArrowDown className={styles.icon} />
            </div>
        </div>
    )
}

export default Menu;