const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

module.exports = {
  fs,
  contactsPath,
};

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./operations");
