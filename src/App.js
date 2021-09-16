import  styles from './App.module.css';
import main_logo from './icons/main_logo.png'
import React, { useEffect, useState } from 'react';
import { SideBarFilter } from './components/Sidebar_filter';
import { TicketsHolderHeader } from './components/Tickets_holder_header';
import { getTickets } from './functions/api';
import  Ticket  from './components/Ticket/ticket';
import { cheapestTicketSort, fastestTicketSort, optionalTicketSort } from './functions/sortMethods';


function App() {
  const [tickets, setTickets] = useState([])
  const [filter, setFilter] = useState('самый дешевый')
  const [slice, setSlice] = useState(5)
  const [transshipment, setTransshipment] = useState(4) //  0 or 1 or 2 or 3 or 4

  const filtred = transshipment<3 ?  

    tickets.filter(ticket =>
        ticket.segments[0].stops.length  <= transshipment
    )
     :
    [...tickets]




  const slisedArr = filtred.slice(0, slice)

  const sorted = slisedArr.sort(
    filter === 'самый дешевый' ? cheapestTicketSort: 
    filter === 'самый быстрый' ? fastestTicketSort : optionalTicketSort
  )
 


  useEffect(()=> {
    getTickets()
      .then(data => data ?  setTickets(data) : null )
      .catch(e=>{})
  },[])




  return (
    <div className={styles.App}>
      <div className={styles.main_logo_holder}>
        <img src={main_logo} alt=""/>
      </div>




      <div className={styles.content_wrapper}>
        <SideBarFilter
            transshipment = {transshipment}
            setTransshipment = {setTransshipment}
        />

        <div className={styles.tickets_holder}>
          <TicketsHolderHeader
            filter = {filter}
            setFilter = {setFilter}
          />

          {
            sorted.map((ticket, ind)=>

                <Ticket
                  ticket = {ticket}
                  key = {ind}
                />

            )
          }


          {
            slice<filtred.length &&
             <div
                className={styles.show_5_more_tickets_btn}
                onClick={()=>setSlice(prev => prev+5)}
              >
                ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
            </div>
          }

        </div>
      </div>
    </div>

    
  );
}

export default App;
