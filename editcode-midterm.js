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
    addRoomBooking(roombooking) {
        this.roomBooking.push(roombooking);
    }
    createBooking(reservationNumber, startDate, durationDays, room) {
        //เช็คว่าห้องนั้นว่างหรือไม่ว่าง
        const isRoomAvaliable = room.isRoomAvaliable(room.getRoomnumber);

        if (isRoomAvaliable) {
            const booking = new RoomBooking(
                reservationNumber,
                startDate,
                durationDays,
                room,
                createBy
            );
            //สร้างการจอง
            this.addRoomBooking(booking);
            room.status = RoomStatus.DISVAILBLE;
            this.totalRoomBooked++;
            return booking;
        }
        else {
            console.log(room.getRoomnumber() + "is not available");
        }
    }
    toString() {
        return `${super.toString()} Total Bookings: ${this.totalRoomBookings}
        /n${inbooking}`
    }
}

class Receptionist extends Person {
    constructor(name, address, email, phone, accountType) {
        super(name, address, email, phone, accountType);
    }


    createBooking(
        guest, reservationNumber, startDate, status, durationDays, room
    ) {
        const isRoomAvaliable = room.isRoomAvaliable(room.getRoomnumber());
        if (isRoomAvaliable) {
            const booking = guest.create.createBooking(
                reservationNumber, startDate, status, durationDays, room, guest.name
            );

            return booking;
        } else {
            console.log(room.getRoomnumber() + "is not availiable");
        }
    }
    toString() {
        return `${super.toString()}`;
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
    getRoomnumber() {
        return this.roomNumber
    }
    isRoomAvaliable(roomNumber) {
        return (this.roomNumber === roomNumber && this.status === RoomStatus.AVALIABLE);
    }

    createRoom(roomNumber, style, status, price) {
        const room = new Room(roomNumber, style, status, price);
        return room != null;
    }
    toString() {
        return `Room [${this.roomnumber}\t${this.style}\t${this.roomPrice}\t${this.status}]`;
    }
}

class RoomBooking {
    reservationNumber = "";
    startDate = "";
    durationDays = 0;
    status = null;
    createBy = null;
    room = null;
    constructor(reservationNumber, startDate, durationDays, status, createBy) {
        this.reservationNumber = reservationNumber;
        this.startDate = startDate;
        this.durationDays = durationDays;
        this.status = status;
        this.createBy = createBy;
        this.room = room;
    }

    getDetail(reservationNumber) {
        const roomBooking = reservationNumber.createBooking();
        return roomBooking;
    }

    createBooking(reservationNumber, startDate, durationDays, guest, room) {
        const booking = new RoomBooking(reservationNumber, startDate, durationDays, guest, room);

        return booking != null;
    }
    toString() {
        return `RoomBooking: [BookingNumber: ${this.reservationNumber}, Room : ${this.room} Status: ${this.status}\n\t Check in date ${this.startDate} stay for ${this.durationDays} nights booked by: ${this.createdBy}]`;
    }

}

class Notification {
    roomBooking = null;
    constructor(notificationID, createOn, content, sender, recipient) {
        this.notificationID = notificationID;
        this.createOn = createOn;
        this.content = content;
        this.sender = sender;
        this.recipient = recipient;
    }
    send(sender, content, recipient) {
        const notification = new NodeIterator(sender, content, recipient);
        return notification;
    }

    toString() {
        return `การแจ้งเตือน ${this.notification}, สร้างเมื่อ: ${this.createOn}, เนื้อหา ${this.content}, ผู้ส่ง: ${this.sender}, ผู้รับ: ${this.recipient}`
    }
}

//Enum
class AccountType {
    static GURST = "gaust";
    static RECEOTIONST = "receotionist";
    constructor(name) {
        this.name = name;
    }
}

class bookingStatus {
    static BOOKED = "booked";
    static NOTBOOKED = "notbooked";
    constructor(name) {
        this.name = name;
    }
}

class RoomStatus {
    static AVALIABLE = "available";
    static DISVAILBLE = "disvailble";
    static LATECHECKOUT = "latecheckout";
    static EARLYCHECK = "earlyvheck";
    constructor(name) {
        this.name = name;
    }
}

class RoomStyle {
    static DOUBLE_POOL = "Double bed pool view";
    static DOUBLE_SEA = "Double Bed Sea View";
    static TWIN_POOL = "Twin Bed Pool View";
    static TWIN_SEA = "Twin Bed Sea View";
}

//Enum


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













const main = () => {
    const alice = new Person(
        "Alice",
        "London",
        "Alice0120@gmail.com",
        "0342365457",
        AccountType.GURST
    );
    const bob = new Person(
        "Bob",
        "Thailand",
        "Bobth@gmail.com",
        "0246843568",
        AccountType.GURST
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
    bob.createBooking("Booking01", "18/03/67", 5, room2, bob.name);

    catherine.createBooking(
        alice, 
        "Booking02",
        "13/03/2567",
        3,
        room2,
        catherine.name
    );



    console.log(alice.toString());
    console.log(bob.toString());
    // console.log(catherine.toString());
    // console.log(david.toString());
    // console.log(send1.toString());
    // console.log(room1.createRoom("room5", RoomStyle));
}
main();

//เฮลโหลเอ๋!