import './profile.css'
import card1 from '../../images/card1.png';
import userss from '../../images/user.png';
import Navbar from '../../components/navbar/navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
export default function Profile() {

  const navigate = useNavigate();
  // const userName=localStorage.getItem('userName');
  // const users=localStorage.getItem('user');
  
  
  
  const { id } = useParams();
  const [user, setuser] = useState({
    username: '',
    email: '',
    password:'',
  });
  
  useEffect(() => {
    // Fetch the product details for the specified ID
    axios
    .get(`http://127.0.0.1:4000/user/id/${id}`)
    .then((response) => {
      setuser(response.data.data); // Assuming 'data' is an array with a single product object
      
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setuser((prevuser) => ({
      ...prevuser,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Call the API to update the product
    axios
      .post(`http://127.0.0.1:4000/user/update/${user._id}`, user)
      .then((response) => {
        console.log('user profile updated successfully:', response.data);
        // Redirect or show a success message
        toast.success('User profile updated successfully ', {
          onClose: () => {
            // Redirect to the product listing component
            navigate('/');
          },
        })
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        toast.error('Something went wrong!');

        // Show an error message or toast notification
      });
  };
  const handleDelete = (userId) => {
    // Delete the product using the API
    axios
      .delete(`http://127.0.0.1:4000/user/delete/${userId}`)
      .then(() => {
        // Filter out the deleted product from the state
        
        setuser((prevUser) =>
          prevUser.filter((user) =>  user._id !== userId)
        );

        // Show toast notification for successful deletion
        toast.success('User Id deleted successfully!');
        // history.push('/product-list');
        navigate('/home');
      })
      .catch((error) => {
        console.error('Error deleting user Id:', error.response.data);
        toast.error('Error deleting user Id. Please try again.');
      });
  };


  return (
    <div>
      <Navbar />
      
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete" onClick={() => handleDelete(user._id)}>Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={card1} alt="" />
            <label htmlFor="fileInput">
              <img class="sizeprofile" src={userss} width="25px" height="25px" />
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} className="settingsPPInput" />
          </div>
          <label>Username</label>
          <input type="text"
            placeholder="Your Name:"
            name="userName"
            // value={userName}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input type="email"
            placeholder="Your Email:"
            name="email"
            // value={users}
            onChange={handleInputChange}
          />
          <label>Password</label>
          <input type="password"
            placeholder="Password:"
            name="password"
            // value={users}
            onChange={handleInputChange} />
          <button className="settingsSubmitButton" type="submit"onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </div>
     
  )
}
