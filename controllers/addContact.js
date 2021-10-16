const { v4: uuidv4 } = require("uuid");

const { fs, contactsPath } = require("../contacts");

const addContact = async (name, email, phone) => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parseData = JSON.parse(data);
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };

    parseData.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(parseData), "utf8");
    console.table(parseData)
    return parseData;
  } catch (error) {
    console.error("Не удалось добавить новый контакт");
  }
};

module.exports = {
  addContact,
};
