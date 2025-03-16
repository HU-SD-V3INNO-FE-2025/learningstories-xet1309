import CustomerInfo from "../view/CustomerInfo.jsx";
import {useEffect, useState} from "react";
import {customerInfoService} from "../service/CustomerInfoService.jsx";



const CustomerInfoController = () => {
    const[customer, setCustomer] = useState({});
    const[customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers()
    },[]);

    const fetchCustomers = async () => {
        const customers = await customerInfoService.getCustomers()
        setCustomers(customers);
    }

    const handleAddCustomer = async (data) => {
        const customer = await customerInfoService.addCustomer(data);
        setCustomer(customer);
    }

    const handleRemoveCustomer = async (data) => {
        console.log(data);
        const customer = await customerInfoService.removeCustomer(data.key);
        fetchCustomers()
    }

    const handleUpdateCustomer = async (data) => {
        await customerInfoService.updateCustomer(data);
        fetchCustomers();
    };


    return(
        <CustomerInfo
            addCustomer={handleAddCustomer}
            customers={customers}
            removeCustomer={handleRemoveCustomer}
            updateCustomer={handleUpdateCustomer}
        />
    )
}

export default CustomerInfoController;