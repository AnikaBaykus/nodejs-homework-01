const { fs, contactsPath } = require("../contacts");
const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parseData = JSON.parse(data);

    const newDate = parseData.filter((contact) => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newDate), "utf8");
    return parseData;
  } catch (error) {
    console.error("Такой контакт не найден");
  }
};
module.exports = {
  removeContact,
};
