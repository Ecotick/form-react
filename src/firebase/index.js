import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { config } from "./accessFirebase";

import {
  getFirestore,
  addDoc,
  collection,
  getDoc,
  getDocs,
  connectFirestoreEmulator,
  query,
  where,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  connectStorageEmulator,
} from "firebase/storage";

// ---------- Firebase Initialization ----------
initializeApp(config);
export const db = getFirestore();
export const storage = getStorage();
const auth = getAuth();
const metadata = {
  contentType: "image/jpeg",
};

// ---------- Account Creation ----------
export function registerStore(businessDocument) {
  createUserWithEmailAndPassword(
    auth,
    businessDocument["e-mail"],
    businessDocument["Mot de passe"]
  )
    .then((userCredentials) => {
      // console.log(userCredentials);
      const userdocument = {
        id: userCredentials.user.uid,
        ...businessDocument,
      };
      createStoreDocument(userdocument);
      return userCredentials.user.uid;
    })
    .catch((error) => {
      console.log(error);
    });
}

// ---------- Document Creation ----------
const createStoreDocument = (document) => {
  delete document["Mot de passe"];
  delete document["Confirmation du Mot de passe"];
  console.log(document);
  const docRef = doc(db, "traders", document.id);
  setDoc(docRef, document);
};

// ---------- Photos and Logos Storage ----------
export function handleUpload(file, setFile, setURL) {
  console.log(file);
  const imageRef = ref(storage, `/images/${file.name}`);
  const uploadTask = uploadBytesResumable(imageRef, file, metadata);
  console.log(uploadTask);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // getDownloadURL(imageRef).then((url) => {
      //   setFile(null);
      //   setURL(url);
      // });
    },
    (err) => console.log(err),
    () =>
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setURL(downloadURL);
        setFile(null);
      })
  );
}
