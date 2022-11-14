<script>
    import { onMount } from 'svelte';

    import { initializeApp } from "firebase/app";
    import { getAuth, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
    import { collection, doc, getDocs, getFirestore, addDoc, deleteDoc  } from "firebase/firestore";

    import InsertForm from '../components/InsertForm.svelte';
    import LinkTable from '../components/LinkTable.svelte';
    import Alert from '../components/Alert.svelte';
    import LoginForm from '../components/Login.svelte';

    import { Links } from '../stores/Links.js'
	import { object_without_properties } from 'svelte/internal';

    let user = null;

    const firebaseConfig = {
        apiKey: "AIzaSyB-ujr3o_puKUQWS5Lika6i190Ng_oxcG4",
        authDomain: "feet-a83df.firebaseapp.com",
        projectId: "feet-a83df",
        storageBucket: "feet-a83df.appspot.com",
        messagingSenderId: "865285089285",
        appId: "1:865285089285:web:7cbc7d65da4fd73252546c",
        measurementId: "G-YZLK3TSPTH"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const auth = getAuth();
    signInAnonymously(auth)
    .then((userCredential) => {
        user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });

    let AlertEl;
    const deleteHanler = (e)=>{
        deleteDoc(doc(db, "links", e.detail.key)).then(()=>{
            Links.update((data)=>{
                data.data = data.data.filter(el=>{
                    return el.id != e.detail.key;
                });
                return data;
            });
            AlertEl.show('red', 'پلاک ' +e.detail.key+ ' نبش قبر شد!');
        });

        
    }
    const addHandler = (e)=>{
        let newObject;
        
        if (!e.detail.url || !e.detail.short){
            AlertEl.show('red', 'خبر مرگش 2 تا فیلد هست کلا! همونم که...😒');
            return false;
        }

        try {
            const docRef = addDoc(collection(db, "links"), {
                short: e.detail.short,
                url: e.detail.url
            }).then((ref)=>{
                Links.update((data)=>{
                    newObject = {id: ref.id, url:e.detail.url ,short: e.detail.short};
                    data.data.push(newObject);
                    return data;
                });
                AlertEl.show('ok', 'شماره ' + newObject.short+ ' دفن شد!');    
                console.log("Document written with ID: ", ref.id);
            });
            
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
	onMount(async () => {
		const querySnapshot = await getDocs(collection(db, "links"));
        let collected = [];
        querySnapshot.forEach((doc) => {
            let r = doc.data()
            collected.push({id:doc.id, short: r.short, url: r.url});
        });
        Links.update((data)=>{
            data.data = collected;
            return data;
        });
            
	});
    
    /*const login = (e)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, e.detail.email, e.detail.password)
        .then((userCredential) => {
            // Signed in 
            user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('mostafa', errorCode, errorMessage);
        });
    };*/

    
</script>

{#if user == null}
    <!-- <LoginForm on:login={login}></LoginForm> -->
{:else}
    <div class="main">
        <Alert bind:this={AlertEl} />
        <div class="logo-box">
            <span class="description">
                از بُلندای پِیوَندها بِکاهید! دست هایشان را از زندگانی طولانی خسته کننده شان کوتاه کنید! دفنشان کنید و در رستاخیز آنهارا فرابخوانید!
            </span>
            <img class="logo" src="logo.png" />
        </div>
        <div class="gray">
            <InsertForm on:add={addHandler} />
            <LinkTable store={$Links} on:delete={deleteHanler} /> 
        </div>
    </div>
{/if}


<style>
    .main{
        max-width: 840px;
        width : 90%;
        margin: 5% auto;
    }
    .logo-box{
        background-color: #393939;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: end;
        margin-bottom: 10px;
    }
    .logo{
        width: 90px;
        position:relative;
        float: right;
       
    }
    .gray{
        background-color: #434343;
        border-radius: 7px;
    }
    .description{
        color: #878a44;
        direction: rtl;
        font-size: 11px;
        margin-top: 10px;
    }
</style>