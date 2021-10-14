const { listContacts } = require("./listContacts");
const { getContactById } = require("./getContact");
const { addContact } = require("./addContact");
const { removeContact } = require("./removeContact");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};

listContacts();
