import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function addEmployee({ name, role, email, mobile }) {
    try {
        const docRef = await addDoc(collection(db, "Employees"), {
            name: name,
            role: role,
            email: email,
            mobile: mobile,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function addCustomers( {name, address, email , gst, mobile}) {
    try {
        const docRef = await addDoc(collection(db, "Customers"), {
            name: name,
            address: address,
            email: email,
            gst: gst,
            mobile: mobile,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}