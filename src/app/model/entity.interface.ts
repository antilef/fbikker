export interface User {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
 }


export interface Bike {
    id: number,
    serial: string,
    brand: string,
    bikeType: string,
    color: string,
    model: string,
    size: string,
    actualRentId: string,
    available: boolean
}

export interface Rent {
    endDate: Date,
    price: string
    startDate: Date,
    user_id: number
}