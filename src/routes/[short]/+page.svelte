<script>
    import { Lottie } from 'lottie-svelte';
    import { initializeApp } from "firebase/app";
    import { getAuth, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
    import { collection, doc, getDocs, getFirestore, addDoc, deleteDoc, query, where } from "firebase/firestore";

    export let data;

    const load = async()=>{
        const firebaseConfig = {
            apiKey: "AIzaSyB-ujr3o_puKUQWS5Lika6i190Ng_oxcG4",
            authDomain: "feet-a83df.firebaseapp.com",
            projectId: "feet-a83df",
            storageBucket: "feet-a83df.appspot.com",
            messagingSenderId: "865285089285",
            appId: "1:865285089285:web:7cbc7d65da4fd73252546c",
            measurementId: "G-YZLK3TSPTH"
        };
        const app = await initializeApp(firebaseConfig);
        const db = await getFirestore(app);

        // const auth = await getAuth();
        // await signInAnonymously(auth);

        const q = await query(collection(db, "links"), where("short", "==", data.short));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let link = doc.data();
            console.log(doc.id, " => ", doc.data());
            window.location.href = link.url;
        });

    }
    load();
</script>

<div>
    <div class="lot">
        <Lottie path="./96262-detective-search.json" speed={1}/>
    </div>
    <span>در جستجوی قبر...</span>
</div>

<style>
    div{
        margin: 0 auto;
        color: rgb(197, 197, 197);
        text-align: center;
        direction: rtl;
        margin-top: 50px;
        font-size: 12px;
    }
    .lot{
        width: 200px;
    }
</style>