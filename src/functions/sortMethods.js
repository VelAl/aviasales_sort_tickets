



export const cheapestTicketSort = (a, b) => a.price < b.price? -1 : 1
export const fastestTicketSort = (a, b) => a.segments[0].duration < b.segments[0].duration ? -1 : 1
export const optionalTicketSort = (a, b) => (a.price/b.price + a.segments[0].duration/b.segments[0].duration) / 2 - 1