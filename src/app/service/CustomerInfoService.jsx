import {IBDatabase} from "/src/app/data/IBDatabase.jsx";

class CustomerInfoService extends IBDatabase {
    constructor() {
        super();
    }

    async generateIDForCustomer(customer) {
        return {
            key: Date.now(),
            ...customer
        };
    }

    async addCustomer(customer) {
        return await super.addCustomer(await this.generateIDForCustomer(customer));
    }

    async getCustomers() {
        return super.getCustomers();
    }

    async removeCustomer(key) {
        console.log(key);
        return await super.removeCustomer(key);
    }

    async updateCustomer(customer) {
        return await super.updateCustomer(customer);
    }


}

const customerInfoService = new CustomerInfoService();
await customerInfoService.initDB()

export { customerInfoService };