var express = require('express');
var router = express.Router();
var User = require('../models/user');
// let bcrypt = require('bcryptjs');

//update
router.post('/update/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const updateData = req.body; // Assuming you send the updated data in the request body
   
      // Find the product by ID and update it with the new data
      const updatedid = await User.findByIdAndUpdate(userId, updateData, {
        new: true, // To return the updated product instead of the old one
      }).exec();
   
      if (!updatedid) {
        // If the product is not found, return an error response
        return res.status(404).json({ message: 'You can update only your account', success: false });
      }
   
      res.json({ message: 'successfully updated', user: updatedid, success: true });
    } catch (err) {
      // Handle any errors during the update process
      res.status(500).json({ message: err.message, success: false });
    }
  });


//delete

  router.delete('/delete/:id', async (req, res) => {
    try {
      const userId = req.params.id;
   
      // Find the product by ID and remove it from the database
      const deleteduser = await User.findByIdAndRemove(userId).exec();
   
      if (!deleteduser) {
        // If the product is not found, return an error response
        return res.status(404).json({ message: 'User not found', success: false });
      }
   
      res.json({ message: 'User successfully deleted', success: true });
    } catch (err) {
      // Handle any errors during the deletion process
      res.status(500).json({ message: err.message, success: false });
    }
  });


//   get user
router.get('/id/:id', async (req, res) => {
    try {
      const userId = req.params.id;
   
      // Find the product in the database based on the provided ID
      const user = await User.findById(userId);
   
      if (!user) {
        // If the product with the given ID is not found, return an error response
        return res.status(404).json({ message: 'User not found', success: false });
      }
   
      // If the product is found, return the product details
      res.json({ message: 'User details fetched successfully', data: user, success: true });
    } catch (err) {
      // Handle any errors that occur during the process
      res.status(500).json({ message: err.message, success: false });
    }
  });

  module.exports = router;