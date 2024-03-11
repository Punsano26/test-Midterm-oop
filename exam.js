class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountTyper = "";
  constructor(name, address, email, phone, accountTyper) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountTyper = accountTyper;
  }
  getName() {
    return this.name;
  }
  getAddress() {
    return this.address;
  }
  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }
  getPhone() {
    return this.phone;
  }
  getAccountTyper() {
    return this.accountTyper;
  }
  toString() {
    return `Person [name = ${this.name},Address:${this.address},Email:${this.email},Phone:${this.phone}, Account Type: ${this.accountTyper}]`;
  }
}

class Account {
  username = "";
  password = "";
  status = "";
  accountType = "";
  constructor(username, password, status, accountType) {
    this.username = username;
    this.password = password;
    this.status = status;
    this.accountType = accountType;
  }
  login(username, password) {
    this.username = username;
    this.password = password;
  }
  reset(username, password) {
    this.username = username;
    this.password = password;
  }
}

class Receptionist extends Person {
  createBooking() {
    return (this.careateBooking = createBooking);
  }
}

class Guest extends Person {
  person = [];
  totalRoomBooked = 0;
  constructor(totalRoomBooked) {
    super(accountTyper.GUSET);
    this.totalRoomBooked = totalRoomBooked;
  }
  createBooking() {}
  addguest() {
    return ``
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
  getDetail() {}
  createBooking() {}
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
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvaliable() {}
  createRoom() {}
}

class Hotel {
  name = "";
  location = "";
  room = [];
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getRoom() {}
  addnewRooms() {}
}

const main = () => {
  const person1 = new Person(
    "Alice",
    "London",
    "Alice0120@gmail.com",
    "0342365457",

  );
  const person2 = new Person(
    "Bob",
    "Thailand",
    "Bobth@gmail.com",
    "0246843568",

  );
  const person3 = new Person(
    "Catherine",
    "America",
    "Cattherine@gmail.com",
    "0927384736",

  );
  const person4 = new Person(
    "David",
    "Japan",
    "David@gmail.com",
    "0965325874",
    
  );

  console.log(person1.toString());
  console.log(person2.toString());
  console.log(person3.toString());
  console.log(person4.toString());
}
main();
