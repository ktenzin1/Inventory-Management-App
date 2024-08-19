import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyCIVg2zXoNRA5zpaAkskWG7C1cb_RXFHvI",
 authDomain: "Yinventory-management-app-3c57b.firebaseapp.com",
 projectId: "inventory-management-app-3c57b",
 storageBucket: "inventory-management-app-3c57b.appspot.com",
 messagingSenderId: "709564584546",
 appId: "1:709564584546:web:6bdd812f93549ef8e9f73b"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };