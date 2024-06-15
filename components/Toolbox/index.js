import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.css'
import { COLORS, MENU_ITEMS } from '@/constants'
import toolboxSlice from '@/slice/toolboxSlice';
import { changeBrushSize,changeColor } from '@/slice/toolboxSlice';

const Toolbox = () =>{
    const activeMenuItem = useSelector((state)=>state.menu.activeMenuItem);
    const {color} = useSelector((state)=> state.toolbox[activeMenuItem])

    const showStrokeToolOption = activeMenuItem===MENU_ITEMS.PENCIL;
    const showBrushToolOption = activeMenuItem===MENU_ITEMS.PENCIL || activeMenuItem===MENU_ITEMS.ERASER;
    
    const dispatch = useDispatch();
    const updateBrushSize = (e) =>{
    dispatch(changeBrushSize({item:activeMenuItem, size:e.target.value}))
    }

    const updateColor = (newColor) =>{
        dispatch(changeColor({item:activeMenuItem, color:newColor}))
    }



    return (
        <div className={styles.toolboxContainer}>
            { showStrokeToolOption &&
                <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Stroke</h4>
                <div className={styles.itemContainer}>
                    <div className={`${styles.colorBox} ${COLORS.BLACK===color ? styles.active : ''}`} style={{backgroundColor:COLORS.BLACK} }  onClick={() => updateColor(COLORS.BLACK)} />
                    <div className= {`${styles.colorBox} ${COLORS.RED===color ? styles.active : ''}`} style={{backgroundColor:COLORS.RED}} onClick={ () => updateColor(COLORS.RED)} />
                    <div className={`${styles.colorBox} ${COLORS.BLUE===color ? styles.active : ''}`} style={{backgroundColor:COLORS.BLUE}} onClick={ () => updateColor(COLORS.BLUE)} />
                    <div className={`${styles.colorBox} ${COLORS.ORANGE===color ? styles.active : ''}`} style={{backgroundColor:COLORS.ORANGE}} onClick={ () => updateColor(COLORS.ORANGE)} />
                    <div className={`${styles.colorBox} ${COLORS.GREEN===color ? styles.active : ''}`} style={{backgroundColor:COLORS.GREEN}} onClick={ () => updateColor(COLORS.GREEN)} />
                    <div className={`${styles.colorBox} ${COLORS.YELLOW===color ? styles.active : ''}`} style={{backgroundColor:COLORS.YELLOW}} onClick={ () => updateColor(COLORS.YELLOW)} />
                </div>
            </div>
            }
            {
                showBrushToolOption &&
                <div className={styles.toolItem}>
                <h4 className={styles.toolText}>Brush Size </h4>
                <div className={styles.itemContainer}>
                    <input type='range' min={1} max={10} step={1} onChange={updateBrushSize} />
                </div>
            </div>
            }
        </div>
    )
}

export default Toolbox;