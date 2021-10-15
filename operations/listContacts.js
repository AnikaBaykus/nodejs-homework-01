const { fs, contactsPath } = require("../contacts");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parseData = JSON.parse(data);

    return console.table(parseData);
  } catch (error) {
    console.error("Не получилось открыть список контактов");
  }
};

module.exports = {
  listContacts,
};
