const { fs, contactsPath } = require("../contacts");

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parseData = JSON.parse(data);

    const contactById = await parseData.find(
      (contact) => contact.id === Number(contactId)
    );
    console.table(contactById)
    return contactById ;
  } catch (error) {
    console.error("Контакт не найден");
  }
};

module.exports = {
  getContactById,
};
