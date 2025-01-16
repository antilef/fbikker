export interface User {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
 }


export interface Bike {
    serial: string,
    type: string,
    brand: string,
    color: string,
    model: string,
    size: string
}

export interface Rent {
    endDate: Date,
    price: string
    startDate: Date,
    user_id: number
}