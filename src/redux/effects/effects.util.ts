export function uniqueRandomNumber(maxNumber: number, numberToAvoid?: number): number {
    let uniqueNumber;
    do {
        uniqueNumber = Math.floor(Math.random() * maxNumber);
    } while (uniqueNumber === numberToAvoid);
    return uniqueNumber;
};