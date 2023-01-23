const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // list all records
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Get a record
  }

  store() {
    // Create a new record
  }

  update() {
    // Update a record
  }

  delete() {
    // Delete a record
  }
}

module.exports = new ContactController();
