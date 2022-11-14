// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
// import { collection, doc, getDocs, getFirestore, addDoc, deleteDoc  } from "firebase/firestore";


// export async function load({ params }) {
//     const firebaseConfig = {
//         apiKey: "AIzaSyB-ujr3o_puKUQWS5Lika6i190Ng_oxcG4",
//         authDomain: "feet-a83df.firebaseapp.com",
//         projectId: "feet-a83df",
//         storageBucket: "feet-a83df.appspot.com",
//         messagingSenderId: "865285089285",
//         appId: "1:865285089285:web:7cbc7d65da4fd73252546c",
//         measurementId: "G-YZLK3TSPTH"
//     };
//     const app = initializeApp(firebaseConfig);
//     const db = getFirestore(app);

//     const auth = getAuth();
//     signInAnonymously(auth);

//     const querySnapshot = await getDocs(collection(db, "links")).then(()=>{});
//         let collected = [];
//         querySnapshot.forEach((doc) => {
//             let r = doc.data()
//             collected.push({id:doc.id, short: r.short, url: r.url});
//         });

//     return {
//         title: 'Hello world!',
//         content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
//         short: params.short,
//         data : r
//       };
// }

export async function load({ params }) {
    return {
        short: params.short
    }
};