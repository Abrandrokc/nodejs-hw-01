import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeAllContacts = async () => {
    try {
        const updatedData = [];

        await fs.writeFile(PATH_DB, updatedData, 'utf-8');
        console.log(`Contact saved to ${PATH_DB}`);
    }
    catch (error) {
        console.log("Error:", error);
    }

};

removeAllContacts();
