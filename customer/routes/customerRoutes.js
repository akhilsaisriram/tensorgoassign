const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Route to add a new customer
router.post('/add', customerController.addCustomer);

// Route to delete a customer based on userId
router.delete('/delete/:id', customerController.deleteCustomer);

// Route to view customer details based on userId
router.get('/view/:userId', customerController.getCustomerDetails);

module.exports = router;
