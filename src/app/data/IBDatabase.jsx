import { openDB } from 'idb';

const DB_NAME = 'indexeddb-learning-story';
const VERSION = 1;

class IBDatabase {
    constructor() {
        this.db = null;
        this.dbName = DB_NAME;
        this.version = VERSION;
    }

    async upgradeDB(db, oldVersion, newVersion, transaction) {
        console.log(`upgrade from ${oldVersion} to ${newVersion} needed`);
    }

    async initDB() {
        this.db = await openDB(this.dbName, this.version, {
            upgrade: (db, oldVersion, newVersion, transaction) =>
                this.upgradeDB(db, oldVersion, newVersion, transaction),
        });
    }
}

export { IBDatabase };