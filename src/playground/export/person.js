// export const isAdult = (age) => {
//     if (age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

export const isAdult = (age) => age >= 18;

export const canDrink = (age) => age >= 21;

export default (age) => age >= 40;