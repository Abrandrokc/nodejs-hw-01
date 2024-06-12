import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { faker } from '@faker-js/faker';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  const users = faker.helpers.multiple(createFakeContact, {
    count: number,
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
    console.log(`Contacts saved to ${PATH_DB}`);
  } catch (error) {
    console.log("Error:", error);
  }
};

generateContacts(5);
