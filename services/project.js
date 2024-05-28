import { db } from "../firebaseConfig";
import { collection, getDocs, where, query } from "firebase/firestore";

export async function getCustomerDetails() {
    try {
        const q = query(collection(db, "Customers"));
        const querySnapshot = await getDocs(q);
        const customers = [];

        querySnapshot.forEach((doc) => {
            customers.push({ id: doc.id, ...doc.data() });
        });
        return customers;
    }
    catch (e) {
        console.log(e);
    }
}

export async function getSingleCustomerDetails(name) {
    try {
        const q = query(collection(db, "Customers"), where("name", "==", name));
        const querySnapshot = await getDocs(q);
        const customer = [];

        querySnapshot.forEach((doc) => {
            customer.push({ id: doc.id, ...doc.data() });
        });
        return customer;
    }
    catch (e) {
        console.log(e);
    }
}

export async function getEmployeesDetails() {
    try {
        const q = query(collection(db, "Employees"));
        const querySnapshot = await getDocs(q);
        const customers = [];

        querySnapshot.forEach((doc) => {
            customers.push({ id: doc.id, ...doc.data() });
        });
        return customers;
    }
    catch (e) {
        console.log(e);
    }
}



export async function addProject({ c_gst, c_name, c_email, c_mobile, p_name, p_description, p_date, p_owner, p_team, p_status, p_type }) {
    try {
        const docRef = await addDoc(collection(db, "Projects"), {
            customer_gst: c_gst,
            customer_name: c_name,
            customer_email: c_email,
            customer_mobile: c_mobile,
            project_name: p_name,
            project_description: p_description,
            project_start_date: p_date,
            project_owner: p_owner,
            project_team: p_team,
            project_status: p_status,
            project_type: p_type,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getProjectDetails(name) {
    try {
        try {
            const q = query(collection(db, "Projects"), where("project-name", "==", name));
            const querySnapshot = await getDocs(q);
            const project = [];
            querySnapshot.forEach((doc) => {
                project.push({ id: doc.id, ...doc.data() });
            });
            return project;
        }
        catch (e) {
            console.log(e);
        }
    }
    catch (e) {

    }
}