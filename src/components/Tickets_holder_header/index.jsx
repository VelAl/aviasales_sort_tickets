import styles from './tickets_holder_header.module.css'


export const TicketsHolderHeader = ({filter, setFilter}) => {


  return (
      <div className={styles.header_filter}>
          
      <div
        className={ filter === 'самый дешевый' ?
          `${styles.header_filter_option} ${styles.active_header_filter_option}`:
          styles.header_filter_option
        }
        onClick={(e) => {
        setFilter(e.currentTarget.innerText);
        }}
      >
        самый дешевый 
      </div>
      <div
        className={ filter === 'самый быстрый' ?
        `${styles.header_filter_option} ${styles.active_header_filter_option}`:
        styles.header_filter_option
        }
        onClick={(e) => {
        setFilter(e.currentTarget.innerText);
        }}
      >
        самый быстрый 
      </div>
      <div
        className={ filter === 'оптимальный' ?
        `${styles.header_filter_option} ${styles.active_header_filter_option}`:
        styles.header_filter_option
        }
        onClick={(e) => {
        setFilter(e.currentTarget.innerText);
        }}
      >
        оптимальный
      </div>

    </div>        
  )
}