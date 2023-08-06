function ticket(quantity) {
    let firstTicket = 100;
    let secondTicket = 90;
    let thirdTicket = 70;
    let ticketPrice = 0;
    if (quantity < 100) {
        ticketPrice = firstTicket * 100;
    }
    else if (quantity > 100 && quantity <= 200) {
        ticketPrice = (firstTicket * 100) + (secondTicket * (quantity - 100));
    }
    else {
        ticketPrice = (firstTicket * 100) + (secondTicket * 100) + (thirdTicket * (quantity - 200));
    }
    return ticketPrice;
}

console.log(ticket(120));