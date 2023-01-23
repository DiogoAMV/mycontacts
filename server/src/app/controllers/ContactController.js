class ContactController {
  index(request, response) {
    // list all records

    response.send('Send from Contact Controller');
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
