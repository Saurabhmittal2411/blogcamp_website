import './write.css';
import plus from '../../images/plus.png';
import writebackground from '../../images/background (1).png';
import Navbar from '../../components/navbar/navbar';
import {React,  useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';


 const Write=()=> {
  const [post, setpost] = useState({
    title: '',
    desc: '',
    username: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setpost((prevpost) => ({
      ...prevpost,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the product data to the backend using Axios POST request
    axios
      .post('http://127.0.0.1:4000/post/addpost', post)
      .then((response) => {
        console.log('Post added successfully:', response.data);

        toast.success('Post added successfully!', {
            onClose: () => {
              // Redirect to the product listing component
              navigate('/home');
            },
          });

        // You can perform additional actions after successful product addition
      })
      .catch((error) => {
        console.error('Error adding post:', error.response.data);
        toast.error('Error adding post. Please try again.');
      });
  };



  return (
    <div>
      <Navbar/>
      <div className="write">
      <img className="writeImg" src={writebackground} alt=""/>
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <img src={plus} alt="no pic"class="plusimg"/>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input className="writeInput" 
          placeholder="title"
          type="text" 
          name="title"
          value={post.title}
          onChange={handleChange}
          required
/>
        </div>
        <div className="writeFormGroup">
          <textarea className="writeInput writeText"
          placeholder="Tell your story..."
          type="text"
          name='desc'
          value={post.desc}
            onChange={handleChange}
            required
/>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
    </div>
  )
};
export default Write;
