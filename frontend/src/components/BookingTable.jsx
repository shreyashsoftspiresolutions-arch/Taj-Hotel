import "./BookingTable.css";

export default function BookingTable(){

const bookings=[

{
guest:"John",
room:"Royal Suite",
status:"Confirmed"
},

{
guest:"Emma",
room:"Luxury Room",
status:"Pending"
},

{
guest:"David",
room:"Presidential",
status:"Completed"
}

];

return(

<div className="booking-table">

<h2>Recent Bookings</h2>

<table>

<thead>

<tr>

<th>Guest</th>

<th>Room</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

bookings.map((booking,index)=>(

<tr key={index}>

<td>{booking.guest}</td>

<td>{booking.room}</td>

<td>{booking.status}</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}