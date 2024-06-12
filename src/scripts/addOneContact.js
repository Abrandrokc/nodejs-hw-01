import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import { faker } from '@faker-js/faker';
export const addOneContact = async () => {
    const users = faker.helpers.multiple(createFakeContact, {
  count: 1,
});
  try {
    let existingData;
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      existingData = JSON.parse(data);
    } catch (error) {
        console.log("", error);
      existingData = [];
    }
    const updatedData = [...existingData, ...users];
    const jsonUsers = JSON.stringify(updatedData, null, 2);
    await fs.writeFile(PATH_DB, jsonUsers, 'utf-8');
    console.log(`Contact saved to ${PATH_DB}`);
  } catch (error) {
    console.log("Error:", error);
  }

};

addOneContact();
