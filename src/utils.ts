export const G = 6.6743 * Math.pow(10, -11); //gravitational constant
export const c = 299792458; // speed of light m/s
export function calculateTimeDilationByGravity(M: number, r: number, t : number) {
    return t * Math.sqrt(1 - (2 * G * M) / (r * Math.pow(c, 2)));
}
export function timeDilatedOfTravelerBySpeed (t: number, v: number) {
    return t * Math.sqrt(1 - (v * v) / (c * c));
};
export function timeDilatedFromObserverBySpeed(t: number, v: number) {
    return t / Math.sqrt(1 - (v * v) / (c * c));
}