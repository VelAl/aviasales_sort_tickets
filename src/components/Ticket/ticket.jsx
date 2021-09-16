import styles from './ticket.module.css'
import logo from '../../icons/S7_Logo.png'
import React from 'react';
import { duration, startTime_destinationTime } from '../../functions/timeFuncs';


const Ticket = ({ticket})=> {

 

    const [destinationInfo, comeBackInfo] = ticket.segments


    return (
        <div className={styles.ticket_wrapper}>
            <div className={styles.ticket_header}>
                <div className={styles.price}>{ticket.price} P</div>
                <div className={styles.logo}><img alt="" src={logo} /></div>
            </div>


            <div className={styles.data}>
                <div className={styles.data_brick}>

                    <div className={styles.brick_header}>{destinationInfo.origin} - {destinationInfo.destination}</div>
                    <div className={styles.exact_info}>
                        {startTime_destinationTime(destinationInfo.date, destinationInfo.duration)}
                    </div>

                </div>
                <div className={styles.data_brick}>
                    <div className={styles.brick_header}>В ПУТИ</div>
                    <div className={styles.exact_info}>{duration(destinationInfo.duration)}</div>
                </div>
                <div className={styles.data_brick}>
                    <div className={styles.brick_header}>ПЕРЕСАДКИ : {destinationInfo.stops.length}</div>
                    <div className={styles.exact_info}>
                        {
                            destinationInfo.stops.map((city, ind)=>
                             `${city}${ (ind + 1) ===  destinationInfo.stops.length ? '' : ','}  `
                            )
                        }
                    </div>
                </div>
            </div>



            <div className={styles.data}>
                <div className={styles.data_brick}>

                    <div className={styles.brick_header}>{comeBackInfo.origin} - {comeBackInfo.destination}</div>
                    <div className={styles.exact_info}>
                        {startTime_destinationTime(comeBackInfo.date, comeBackInfo.duration)}
                    </div>
                </div>
                <div className={styles.data_brick}>
                    <div className={styles.brick_header}>В ПУТИ</div>
                    <div className={styles.exact_info}>{duration(comeBackInfo.duration)}</div>
                </div>
                <div className={styles.data_brick}>
                    <div className={styles.brick_header}> ПЕРЕСАДКИ: {comeBackInfo.stops.length}</div>
                    <div className={styles.exact_info}>
                        {
                            comeBackInfo.stops.map((city, ind)=>
                             `${city}${ (ind + 1) ===  comeBackInfo.stops.length ? '' : ','}  `
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

const MemodTicket = React.memo(Ticket)
export default MemodTicket