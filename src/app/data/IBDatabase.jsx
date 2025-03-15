import { openDB } from 'idb';

const DB_NAME = 'indexeddb-learning-story';
const VERSION = 1;
const DB_STORE_NAME = 'customers';

class IBDatabase {
    constructor() {
        this.db = null;
        this.dbName = DB_NAME;
        this.version = VERSION;
        this.storeName = DB_STORE_NAME;
    }

    async migrateToVersion1() {
        console.log(`migrate from version 0 to version 1`);
        if (!this.db.objectStoreNames.contains(this.storeName)) {
            this.db.createObjectStore(this.storeName, {
                autoIncrement: true,
                keyPath: 'key',
            });
            console.log(`${this.storeName} store created`);
        }
    }

    async upgradeDB(db, oldVersion, newVersion, transaction) {
        console.log(`upgrade from ${oldVersion} to ${newVersion} needed`);
        this.db = db;

        if (oldVersion < 1) await this.migrateToVersion1();
        await transaction.done;
    }

    async initDB() {
        this.db = await openDB(this.dbName, this.version, {
            upgrade: (db, oldVersion, newVersion, transaction) =>
                this.upgradeDB(db, oldVersion, newVersion, transaction),
        });

        console.log(`${this.dbName} initDB`);
    }

    async addCustomer(customer) {
        return await this.db.add(this.storeName, customer);
    }

    async getCustomers() {
        return await this.db.getAll(this.storeName);
    }


    async removeCustomer(key) {
        return await this.db.delete(this.storeName, key);
    }

}

export { IBDatabase };