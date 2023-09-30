import { firebaseLogin, firebaseRegister, firebaseSignOut } from "../firebaseConfig/firebaseInit";

export function register(email, password) {
    return firebaseRegister(email, password)
        .then(() => login(email, password))
        .catch((error) => {
            console.log(`Inside REGISTER catch: ${error}`);
            throw new Error(error);
        })
}

export function login(email, password) {
    return firebaseLogin(email, password);
}

export function logout() {
    return firebaseSignOut;
}

export function activeUser(uid, email) {
    localStorage.setItem('uid', uid);
    localStorage.setItem('email', email);
}