import './signup.css';
import axios from "axios";
import { useState } from "react";
import google from "../../images/google.png";
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';

    const Signup = () => {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://127.0.0.1:4000/auth/register", {
        username,
        email,
        password,
      });
      toast.success('Registration successfully done!', {
        onClose: () => {
          // Redirect to the product listing component
          res.data && navigate('/login');
        },
    });
    //   res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      toast.error('Something went wrong!');
    }
  };
        return (
            <span class="centering">
                <form class="my-forms" onSubmit={handleSubmit}>
                    <span class="signup-welcome-row">
                        <h1>Sign Up!</h1>
                    </span>
                    <span class="socials-row">
                        <a href="#" title="Use Google">
                            <img src={google} alt="Google" />
                            Use Google
                        </a>
                    </span>
                    <span class="divider">
                        <span class="divider-line"></span>
                        OR
                        <span class="divider-line"></span>
                    </span>
                    <div class="my-form__content">
                        <div class="text-field">
                            <label for="username">Username:</label>
                            <input aria-label="username" 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Your username" 
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <div class="text-field">
                                <label for="email">Email ID:</label>
                                <input aria-label="email" 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Your email" 
                 
                                onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="text-field">
                                <label for="Password">Password:</label>
                                <input type="password" 
                                id="password"
                                name="password" 
                                placeholder="Your password" 
                            
                                onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <input type="submit" class="my-form__button" value="Sign-Up" />
                    </div>
                    <div class="my-form__actions">
                        <span>
                            By registering you agree to our
                            <a href="#" title="Reset Password">Terms</a>
                            and <a href="#" title="Reset Password">Privacy</a>
                        </span>
                        <div class="my-form__signin">
                            <a href="/login" title="Sign In">Sign-in</a>
                        </div>
                    </div>
                {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
                </form>
            </span>
        )
    };
    export default Signup;