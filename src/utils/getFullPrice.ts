

export const getFullPrice = (price: number, count: number, discount: number) => {

    return Math.floor(price * count * ((100 - discount) / 100))

}