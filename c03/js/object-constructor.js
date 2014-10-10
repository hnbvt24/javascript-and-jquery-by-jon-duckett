// Set up the object
var hotel = new Object();hotel.name = 'Park';hotel.rooms = 120;hotel.booked = 77;hotel.checkAvailability = function() {    return this.rooms - this.booked;  };

var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability();   // Update HTML with result of method