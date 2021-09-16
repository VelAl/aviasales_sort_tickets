export  const duration = (dur) => {
    const hours = Math.floor(dur / 60)
    const min = dur - hours * 60

    return `${hours}ч  ${min}м`
}


export const startTime_destinationTime =(dateInf, dur)=> {
    const date = new Date(dateInf)
    
    let hours = date.getHours()
    hours = hours === 0 ? "00" : hours


    let minutes = date.getMinutes()
    minutes = minutes < 10 ? `0${minutes}`: minutes

    let milliseconds = hours*(60000*60) + (minutes + dur)*60000;
    const destDate = new Date(milliseconds)

    const destHours = destDate.getHours()
    let destMinutes = destDate.getMinutes()
    destMinutes = destMinutes < 10 ? `0${destMinutes}`: destMinutes


    return `${hours}:${minutes} - ${destHours}:${destMinutes}`
}