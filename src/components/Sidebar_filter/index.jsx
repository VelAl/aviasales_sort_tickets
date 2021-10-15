import styles from './sidebar.module.css'

export const SideBarFilter = ({transshipment, setTransshipment}) => {


    return  (
        <div className={styles.side_bar_filter}>
            <div className={styles.side_bar_filter_header}>КОЛИЧЕСТВО ПЕРЕСАДОК</div> 
            
            <div>
                <div className={styles.checkbox_holder}>
                    <input
                        checked={transshipment === 4 ? true : false}
                        className={styles.filter_checkbox}
                        type='checkbox'
                        onChange={()=> setTransshipment(4)}
                    /> все
                </div>

                <div className={styles.checkbox_holder}>
                    <input
                        className={styles.filter_checkbox}
                        type='checkbox'
                        onChange={()=> setTransshipment(0)}
                        checked={transshipment === 0 ? true : false}
                     /> без пересадок
                </div>

                <div className={styles.checkbox_holder}>
                    <input
                        className={styles.filter_checkbox}
                        type='checkbox'
                        onChange={()=> setTransshipment(1)}
                        checked={transshipment === 1 ? true : false}
                    /> 1 пересадка
                </div>

                <div className={styles.checkbox_holder}>
                    <input
                        className={styles.filter_checkbox}
                        type='checkbox'
                        onChange={()=> setTransshipment(2)}
                        checked={transshipment === 2 ? true : false}
                    /> 2 пересадки 
                </div>

                <div className={styles.checkbox_holder}>
                    <input
                        className={styles.filter_checkbox}
                        type='checkbox'
                        onChange={()=> setTransshipment(3)}
                        checked={transshipment === 3 ? true : false}
                    /> 3 пересадки
                </div>
            </div>
        </div>
    )
}