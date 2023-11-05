var express = require('express');
var router = express.Router();
const Post = require("../models/post");
//create a blog or post
router.post('/addpost', async (req, res) => {
  try {
      let post = await new Post(req.body).save();
      res.json({ message: "Post Added Successfully",
       data: post, success: true })
  }
  catch (err) {
      res.json({ message: err.message, success: false })
  }
});


//update a blog or post giving username is must ...
router.put("/update/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
 

// deleting a post
router.delete("/delete/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the product by ID and remove it from the database
    const deletedPost = await Post.findByIdAndRemove(postId).exec();

    if (!deletedPost) {
      // If the product is not found, return an error response
      return res.status(404).json({ message: 'Post not found', success: false });
    }

    res.json({ message: 'Post successfully deleted', success: true });
  } catch (err) {
    // Handle any errors during the deletion process
    res.status(500).json({ message: err.message, success: false });
  }
});


router.get('/getid/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the product in the database based on the provided ID
    const post = await Post.findById(postId);

    if (!Post) {
      // If the product with the given ID is not found, return an error response
      return res.status(404).json({ message: 'Post not found', success: false });
    }

    // If the product is found, return the product details
    res.json({ message: 'Post details fetched successfully', data: post, success: true });
  } catch (err) {
    // Handle any errors that occur during the process
    res.status(500).json({ message: err.message, success: false });
  }
});



router.get('/allpost', async (req, res) => {
  try {
      const post = await Post.find().exec();
      res.json({ message: 'All post Details', data: post , success: true });
  }
  catch (err) {
      res.json({ message: err.message, success: false })

  }
});



  module.exports = router;