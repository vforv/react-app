declare const firebase: any;

export function googleAuth() {
    const firebaseConfig = {
        apiKey: "AIzaSyDCqbV1mJgoJ3FkL_Vic_VtuvJ7xrsumic",
        authDomain: "react-app-8c6f2.firebaseapp.com",
        projectId: "react-app-8c6f2",
        storageBucket: "react-app-8c6f2.appspot.com",
        messagingSenderId: "765181336424",
        appId: "1:765181336424:web:8318b3f6dbe666a42894dd",
        measurementId: "G-RPPMDRV49Q",
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    firebase.analytics();

    const p: any = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(p)
        .then((result: any) => {
            // // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // // ...

            // console.log(token);
            return {
                token,
                user,
            };
        })
        .catch((error: any) => {
            console.log(error);
            // // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // // ...
        });
}
