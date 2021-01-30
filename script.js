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
    document.getElementById('tax').innerText = '$' +  tax;
    const total = subtotal + tax;
    document.getElementById('total').innerText = '$' +  total;
}
function getTicketNumber(ticketClass) {
    const ticketClassInput = document.getElementById(ticketClass + '-class');
    const ticketNumberCount =  parseFloat(ticketClassInput.value);
    return ticketNumberCount;
}
document.getElementById('confirmation-display').style.display = 'none';
function book() {
    const booking_area = document.getElementById('main-display');
    booking_area.style.display = 'none';
    const confirmation_area = document.getElementById('confirmation-display');
    confirmation_area.style.display = 'flex'; 

    showConfirmation( 'from' , 'book-from' );
    showConfirmation( 'destination' , 'book-destination' );
    showConfirmation( 'departure-date' , 'departure' );
    showConfirmation( 'return-date' , 'return' );
    showConfirmation( 'first-class' , 'first');
    showConfirmation( 'economy-class' , 'economy' );

    const confirmTotal = document.getElementById('total').innerText;
    document.getElementById('confirm-total').innerText =  confirmTotal;
}
function back() {
     confirmation_area = document.getElementById('confirmation-display');
    confirmation_area.style.display = 'none'; 
     booking_area = document.getElementById('main-display');
    booking_area.style.display = 'flex';
    reset('from');
    reset('destination');
    reset('departure-date');
    reset('return-date');
    reset('first-class');
    reset('economy-class');
    document.getElementById('subtotal').innerText = "";
    document.getElementById('tax').innerText = "";
    document.getElementById('total').innerText = "";
}
function showConfirmation( getElementId , setElementId ) {
    const setElement = document.getElementById(getElementId).value;
    document.getElementById( setElementId ).value = setElement;  
}
function reset(id) {
    document.getElementById( id ).value = "";
}