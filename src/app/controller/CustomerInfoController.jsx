import CustomerInfo from "../view/CustomerInfo.jsx";
import {useState} from "react";
import {customerInfoService} from "../service/CustomerInfoService.jsx";



const CustomerInfoController = () => {
    const[customer, setCustomer] = useState({});

    const handleAddCustomer = (data) => {
        customerInfoService.addCustomer(data);
        setCustomer(data);
    }

    return(
        <CustomerInfo addCustomer={handleAddCustomer} />
    )
}

export default CustomerInfoController;