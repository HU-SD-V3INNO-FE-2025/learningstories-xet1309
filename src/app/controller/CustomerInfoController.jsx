import CustomerInfo from "../view/CustomerInfo.jsx";
import {useEffect, useState} from "react";
import {customerInfoService} from "../service/CustomerInfoService.jsx";



const CustomerInfoController = () => {
    const[customer, setCustomer] = useState({});
    const[customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers()
    },[customer]);

    const fetchCustomers = async () => {
        const customers = await customerInfoService.getCustomers()
        setCustomers(customers);
    }

    const handleAddCustomer = (data) => {
        customerInfoService.addCustomer(data);
        setCustomer(data);
    }

    return(
        <CustomerInfo addCustomer={handleAddCustomer} customers={customers} />
    )
}

export default CustomerInfoController;