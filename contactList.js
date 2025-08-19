// contactList.js

const readline = require('readline');

// Create interface for user input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store contacts
let contacts = [];

// Function to display the menu
function showMenu() {
  console.log('\n--- Contact List ---');
  console.log('1. Add a contact');
  console.log('2. View all contacts');
  console.log('3. Search for a contact');
  console.log('4. Exit');
  rl.question('Choose an option (1-4): ', handleMenu);
}

// Function to handle menu options
function handleMenu(option) {
  switch (option) {
    case '1':
      addContact();
      break;
    case '2':
      viewContacts();
      break;
    case '3':
      searchContact();
      break;
    case '4':
      exitApp();
      break;
    default:
      console.log('Invalid option! Please choose 1-4.');
      showMenu();
      break;
  }
}

// Add a contact
function addContact() {
  rl.question('Enter contact name: ', (name) => {
    rl.question('Enter phone number: ', (phone) => {
      contacts.push({ name, phone });
      console.log(`Contact ${name} added successfully!`);
      showMenu();
    });
  });
}

// View all contacts
function viewContacts() {
  if (contacts.length === 0) {
    console.log('No contacts found.');
  } else {
    console.log('\nContacts:');
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.name} - ${contact.phone}`);
    });
  }
  showMenu();
}

// Search for a contact
function searchContact() {
  rl.question('Enter name to search: ', (searchName) => {
    const found = contacts.find(contact => contact.name.toLowerCase() === searchName.toLowerCase());
    if (found) {
      console.log(`Found: ${found.name} - ${found.phone}`);
    } else {
      console.log('Contact not found.');
    }
    showMenu();
  });
}

// Exit application
function exitApp() {
  console.log('Goodbye!');
  rl.close();
}

// Start the app
showMenu();
