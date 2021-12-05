import { initializeApp } from "firebase/app";
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

initializeApp(config);

export const db = getFirestore();
export const storage = getStorage();
const metadata = {
  contentType: "image/jpeg",
};

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
