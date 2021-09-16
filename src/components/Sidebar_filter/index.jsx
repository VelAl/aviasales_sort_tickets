import styles from './sidebar.module.css'


export const SideBarFilter = () => {


    const checkboxHandller =(e) => {
        console.log(e.target.dataset.count);
    }


    return  (
        <div className={styles.side_bar_filter}>
            <div className={styles.side_bar_filter_header}>КОЛИЧЕСТВО ПЕРЕСАДОК</div> 
            
            <div>
                <div className={styles.checkbox_holder}>
                    <input
                    className={styles.filter_checkbox}
                    type='checkbox'
                    onChange={checkboxHandller}
                    data-count={3}/> все
                </div>

                <div className={styles.checkbox_holder}>
                    <input
                    className={styles.filter_checkbox}
                    type='checkbox'
                    onChange={checkboxHandller}
                    data-count={0}/> без пересадок
                </div>

                <div className={styles.checkbox_holder}>
                    <input
                    className={styles.filter_checkbox}
                    type='checkbox'
                    onChange={checkboxHandller}
                    data-count={1}/> 1 пересадка
                </div>

                <div className={styles.checkbox_holder}>
                    <input
                    className={styles.filter_checkbox}
                    type='checkbox'
                    onChange={checkboxHandller}
                    data-count={2}/> 2 пересадки 
                </div>

                <div className={styles.checkbox_holder}>
                    <input
                    className={styles.filter_checkbox}
                    type='checkbox'
                    onChange={checkboxHandller}
                    data-count={3}/> 3 пересадки
                </div>
            </div>
        </div>
    )
}