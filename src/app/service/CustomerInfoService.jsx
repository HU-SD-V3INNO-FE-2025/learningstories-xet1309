import { IBDatabase } from "/src/app/data/IBDatabase.jsx";

class CustomerInfoService extends IBDatabase {
    constructor() {
        super();
    }

    async addCustomer(customer) {
        return await super.addCustomer(customer);
    }

    async getCustomers() {
        return super.getCustomers();
    }

    async removeCustomer(key) {
        console.log(key);
        return await super.removeCustomer(key);
    }

    async updateCustomer(key, customer) {
        return await super.updateCustomer(key, customer);
    }


}

const customerInfoService = new CustomerInfoService();
await customerInfoService.initDB()

export { customerInfoService };