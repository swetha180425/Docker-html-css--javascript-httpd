function bookTicket(){

    let movie = document.getElementById("movie");
    let movieName = movie.options[movie.selectedIndex].text;
    let price = parseInt(movie.value);

    let tickets = parseInt(document.getElementById("tickets").value);

    if(tickets <= 0){
        alert("Please enter a valid number of tickets.");
        return;
    }

    let total = price * tickets;

    document.getElementById("result").innerHTML =
    `
    <h3>Booking Successful 🎉</h3>
    <p><b>Movie:</b> ${movieName}</p>
    <p><b>Tickets:</b> ${tickets}</p>
    <p><b>Total Amount:</b> ₹${total}</p>
    `;
}
