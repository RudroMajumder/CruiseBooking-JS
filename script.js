function ticketNumberHandler(increase,Class) {
    const ClassOfTicket = document.getElementById(Class).value;
    const showNumber = parseInt(ClassOfTicket);
    let showTicketNumber = 0;
    if( increase == true ){
        showTicketNumber = showNumber + 1;
        document.getElementById(Class).value = showTicketNumber;
    }
    if( increase == false && showNumber > 0) {
        showTicketNumber = showNumber - 1;
        document.getElementById(Class).value = showTicketNumber;
    }
    ticketPrice() ;
}
function ticketPrice() {
    const firstClassTicket = getTicketNumber('first');
    const economyClassTicket = getTicketNumber('economy');

    const subtotal = firstClassTicket * 150 + economyClassTicket *100;
    document.getElementById('subtotal').innerText = '$' + subtotal;
    const tax = subtotal * 0.1;
    document.getElementById('tax').innerText = tax;
    const total = subtotal + tax;
    document.getElementById('total').innerText = total;
}
function getTicketNumber(ticketClass) {
    const ticketClassInput = document.getElementById(ticketClass + '-class');
    const ticketNumberCount =  parseFloat(ticketClassInput.value);
    return ticketNumberCount;
}
document.getElementById('confirmation').style.display = 'none';
function book() {
    const booking_area = document.getElementById('main-display');
    booking_area.style.display = 'none';
    const confirmation_area = document.getElementById('confirmation');
    confirmation_area.style.display = 'block'; 
}
function back() {
    const confirmation_area = document.getElementById('confirmation');
    confirmation_area.style.display = 'none'; 
    const booking_area = document.getElementById('main-display');
    booking_area.style.display = 'block';
}