import { IBDatabase } from "/src/app/data/IBDatabase.jsx";

class CustomerInfoService extends IBDatabase {
    constructor() {
        super();
    }

    async addCustomer(customer) {
        return await super.addCustomer(customer);
    }

    async getCustomers() {
        return await super.getCustomers();
    }


}

const customerInfoService = new CustomerInfoService();
await customerInfoService.initDB()

export { customerInfoService };