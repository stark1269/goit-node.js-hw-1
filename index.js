const { program } = require('commander');
const contacts = require('./contacts.js');

program
  .option('--action <type>')
  .option('--id <type>')
  .option('--name <type>')
  .option('--email <type>')
  .option('--phone <type>');

program.parse();
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const listContacts = await contacts.listContacts();
      console.log(listContacts);
      break;
    case 'get':
      const getContactById = await contacts.getContactById(id);
      console.log(getContactById);
      break;
    case 'add':
      const addContact = await contacts.addContact(name, email, phone);
      console.log(addContact);
      break;
    case 'remove':
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);