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
    setAccount(accountType) {
        this.accountType = accountType;
    }
    toString() {
        return `Person [name = ${this.name},Address:${this.address},Email:${this.email},Phone:${this.phone}, Account Type: ${this.accountTyper}]`;
    }
}



class Guest extends Person {
    roombooking = [];
    totalRoomBooked = 0;
    constructor(name, address, email, phone, accountType) {
        super(name, address, email, phone, accountType)

    }
    addRoomBooking(roombooking) {
        this.roomoomBooking.push(roombooking);
    }
    createBooking(reservationNumber, startDate, durationDays, room) {
        //เช็คว่าห้องนั้นว่างหรือไม่ว่าง
        const isRoomAvaliable = this.isRoomAvaliable(room, startDate, durationDays);

        if (isRoomAvaliable) {
            const booking = new RoomBooking(
                reservationNumber,
                startDate,
                durationDays,
                room
            );
            //สร้างการจอง
            this.addRoomBooking(booking);
            this.totalRoomBooked++;
            return booking;
        };
    }
    toString() {

        for (let i = 0; i < this.roombooking.length; i++) {

        }
        return `${super.toString()}, AccountType = ${this.accountType}`;
    }
}

class Receptionist extends Person {
    createBooking() {
        return (this.careateBooking = createBooking);
    }
}


class Hotel {
    name = "";
    location = "";
    room = [];
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    getRoom() {
        return this.room;
    }
    addnewRooms() {
        this.addnewRooms.push(room);
    }
    toString() {
        let inHotel = "";
        for (let i = 0; i < this.room.length; i++) {
            inHotel += "\t" + `${this.room[i].toString()}` + "\n"

        }
        return `Hotel [name = ${this.name}, location = ${this.location} \n ${inHotel}]`;
    }

}

class Room {
    roomNumber = "";
    style = null;
    status = null;
    roomPrice = 0;
    constructor(roomNumber, style, status, roomPrice) {
        this.roomNumber = roomNumber;
        this.style = style;
        this.status = status;
        this.roomPrice = roomPrice;
    }
    isRoomAvaliable(roomNumber) {
        if (this.status === roomNumber && this.status === RoomStatus.AVALIABLE);
    }
    createRoom(roomNumber, style, status, price) {
        const room5 = new Room(roomNumber, style, status, price);
        if (this.roomNumber === room5) {

        }
    }
    toString() {
        return `Room [roomnumber = ${this.roomNumber}, style = ${this.style}, status = ${this.status}, price = ${this.roomPrice}]`;
    }
}

class RoomBooking {
    reservationNumber = "";
    startDate = "";
    durationDays = 0;
    status = null;
    createBy = null;
    constructor(reservationNumber, startDate, durationDays, status, createBy) {
        this.reservationNumber = reservationNumber;
        this.startDate = startDate;
        this.durationDays = durationDays;
        this.status = status;
        this.createBy = createBy;
    }


    toString() {
        return `\n Detail: [Reservation Number: ${this.reservationNumber}, Start Date:
        ${this.startDate}, Duration: ${this.durationDays}, Status: ${this.status},
        Create by: ${this.createBy.name}]`;
    }
    createBooking(reservationNumber, startDate, durationDays,) {

    }
}

//Enum
class RoomStatus {
    static AVALIABLE = "available";
    static DISVAILBLE = "disvailble";
    static LATECHECKOUT = "latecheckout";
    static EARLYCHECK = "earlyvheck";
}

//Enum
class AccountType {
    static GURST = "gaust";
    static RECEOTIONST = "receotionist";
    constructor(name) {
        this.name = name;
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





const main = () => {
    const alice = new Person(
        "Alice",
        "London",
        "Alice0120@gmail.com",
        "0342365457",
        AccountType.RECEOTIONST
    );
    const bob = new Person(
        "Bob",
        "Thailand",
        "Bobth@gmail.com",
        "0246843568",
        AccountType.RECEOTIONST
    );
    const catherine = new Person(
        "Catherine",
        "America",
        "Cattherine@gmail.com",
        "0927384736",
        AccountType.RECEOTIONST
    );
    const david = new Person(
        "David",
        "Japan",
        "David@gmail.com",
        "0965325874",
        AccountType.RECEOTIONST
    );

    //------------Hotel------------//
    const hotel = new Hotel("SE Hotel", "NPRU");

    const room1 = new Room(
        "Room1",
        RoomStyle.DOUBLE_POOL,
        RoomStatus.AVALIABLE, 1000
    );

    const room2 = new Room(
        "Room1",
        RoomStyle.DOUBLE_POOL,
        RoomStatus.AVALIABLE, 2000
    );

    const room3 = new Room(
        "Room1",
        RoomStyle.DOUBLE_POOL,
        RoomStatus.AVALIABLE, 4000
    );

    const room4 = new Room(
        "Room1",
        RoomStyle.DOUBLE_POOL,
        RoomStatus.AVALIABLE, 5000
    );

    hotel.addNewRoom(room1);
    hotel.addNewRoom(room2);
    hotel.addNewRoom(room3);
    hotel.addNewRoom(room4);



    console.log(alice.toString());
    console.log(bob.toString());
    console.log(catherine.toString());
    console.log(david.toString());

    console.log(room1.createRoom("room5", RoomStyle));
}
main();
