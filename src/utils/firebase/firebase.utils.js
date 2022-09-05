import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDTL3ol9TyQBxdhgVO4MHlA67COm15V3ug",
    authDomain: "crwm-clothing-db-acdbe.firebaseapp.com",
    projectId: "crwm-clothing-db-acdbe",
    storageBucket: "crwm-clothing-db-acdbe.appspot.com",
    messagingSenderId: "29145648953",
    appId: "1:29145648953:web:f3eea5d6c9e70383a2e2e8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});
export const auth=getAuth();


export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

export const db=getFirestore();
export const createUserDocumentFromAuth=async (userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid);

    console.log(userDocRef);

    const userSnapshot =await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef,{displayName,email,createdAt,});
        }
        catch(error){
            console.log('error creating the user',error.message);
        }
    }

return userDocRef;
}
