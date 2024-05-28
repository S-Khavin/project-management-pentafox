import { db } from "../firebaseConfig";
import { collection, getDocs, where, query, addDoc, updateDoc, doc } from "firebase/firestore";

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



export async function addOrUpdateProject({ projectId, c_gst, c_name, c_email, c_mobile, c_address, p_name, p_description, p_date, p_owner, p_team, p_status, p_type }) {
    try {
        // Set default owner if not provided
        const owner = p_owner || 'Sriram Srinivasan';

        const projectData = {
            customer_gst: c_gst,
            customer_name: c_name,
            customer_email: c_email,
            customer_mobile: c_mobile,
            customer_address: c_address,
            project_name: p_name,
            project_description: p_description,
            project_start_date: p_date instanceof Date && !isNaN(p_date) ? p_date : new Date(), // Validate date
            project_owner: owner,
            project_team: p_team,
            project_status: p_status,
            project_type: p_type,
        };

        if (projectId) {
            // Update existing project
            await updateDoc(doc(db, `Projects/${projectId}`), projectData);
            console.log("Document updated");
        } else {
            // Add new project
            const docRef = await addDoc(collection(db, "Projects"), projectData);
            console.log("Document written with ID: ", docRef.id);
        }
    } catch (e) {
        console.error("Error adding/updating document: ", e);
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