class Person {
    name = "";
    address = "";
    email = "";
    phone = "";
    accountTyper = "";
    constructor(name, address, email, phone, accountTyper) {
        this.name = name;
        this.address = address;
        this.email  = email;
        this.phone = phone;
        this.accountTyper = accountTyper;
    }
}

class Account {
    username = "";
    password = "";
    status = "";
    constructor(username, password, status) {
        this.username = username;
        this.password = password;
        this.status = status;
    }
    login() {

    }
    reset() {

    }
}

class Receptionist {
    createBooking() {

    }
}

class Guest {
    totalRoomBooked = 0;
    constructor(totalRoomBooked) {
        this.totalRoomBooked = totalRoomBooked;
    }
    createBooking() {

    }
}

class RoomBooking {
    reservationNumber = "";
    startDate = "";
    durationDays = 0;
    status = BookingStatus;
    createBy = Person;
    constructor(reservationNumber, startDate, durationDays, status, createBy) {
        this.reservationNumber = reservationNumber;
        this.startDate = startDate;
        this.durationDays = durationDays;
        this.status = status;
        this.createBy = createBy;
    }
    getDetail() {

    }
    createBooking() {

    }
}

class Notification {
  notificationID = 0;
  createOn = "";
  content = "";
  sender = "";
  reciplent = "";
  constructor(notificationID, createOn, content, sender, reciplent) {
    this.notificationID = notificationID;
    this.createOn = createOn;
    this.content = content;
    this.sender = sender;
    this.reciplent = reciplent;
  }
  send() {

  }
}

class Room {
    roomNumber = "";
    style = "";
    status = "";
    roomPrice = 0;
    constructor(roomNumber, style, status, roomPrice) {
        this.roomNumber = roomNumber;
        this.style = status;
        this.status = status;
        this.roomPrice = roomPrice;
    }
    isRoomAvaliable() {

    }
    createRoom() {

    }
}

class Hotel {
    name = "";
    location = "";
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    getRoom() {

    }
    addnewRooms() {
        
    }
}

