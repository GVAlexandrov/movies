import { URL } from "../firebaseConfig/config";
import { auth } from "../firebaseConfig/firebaseInit";

let uid = localStorage.uid;

export const addFavouriteMovie = (id) => {
    let newFavouriteMovieID = { id }

    uid = localStorage.uid

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(`${URL}movies/${uid}/.json?auth=${token}`, {
                method: "POST",
                body: JSON.stringify(newFavouriteMovieID)
            })
        })
}


export const getAllFavouriteMovies = (typeOfElement) => {
    uid = localStorage.uid;

    return fetch(`${URL}${typeOfElement}/${uid}/.json`)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => console.log(error));
}