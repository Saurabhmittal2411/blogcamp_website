import './user.css';
import google from "../../images/google.png";
import email from "../../images/email.png";
import lock from "../../images/lock.png";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';

function Login() {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	// const [userName, setuserName] = useState("");
    const navigate = useNavigate();
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://127.0.0.1:4000/auth/login";
            
			const { data: res } = await axios.post(url, data);
            if (res.data){
                // console.log(res.data.data.username)
			localStorage.setItem("token", res.data.token);  
			// localStorage.setItem("name", res.data.userName);  
			localStorage.setItem("userInfo", res.data.userId);
            
            toast.success('login successfully!', {
                onClose: () => {
                    navigate('/');
                },
            });
            // userName=res.data.userName;  
        }
        else{
            toast.error('Bad User Credential');
        }
		} 
        
        catch (error) {
            
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
                
				setError(error.response.data.message);
                toast.error('Something went wrong!!!');
			}
		}
	}

    return (
        <div class="login-wrapper">
            <div class="login-side">
                <div class="my-form__wrapper">
                    <div class="login-welcome-row">
                        <h1>Welcome back &#x1F44F;</h1>
                        <p>Please enter your details!</p>
                    </div>
                    <form class="my-form"  onSubmit={handleSubmit}>
                        <div class="socials-row">
                            <a href="#" title="Use Google">
                                <img src={google} alt="Google" /> Log in with Google
                            </a>
                        </div>
                        <div class="divider">
                            <div class="divider-line"></div>
                            Or
                            <div class="divider-line"></div>
                        </div>
                        <div class="text-fields">
                            <label for="email">Email:</label>
                            <input type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your Email"
                            onChange={handleChange}
							value={data.email}
							required
                             />
                            <img alt="Email Icon" title="Email Icon" src={email} />
                        </div>
                        <div class="text-fields">
                            <label for="password">Password:</label>
                            <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            placeholder="Your Password" 
                            onChange={handleChange}
							value={data.password}
							required
                            />
                            {error && <div className="error_msg">{error}</div>}
                            <img alt="Password Icon" title="Password Icon" src={lock} />
                        </div>
                        <input type="submit" class="my-form__button" value="Login" />
                        <div class="my-form__actions">
                            <div class="my-form__row">
                                <span>Did you forget your password?</span>
                                <a href="#" title="Reset Password">
                                    Reset Password
                                </a>
                            </div>
                            <div class="my-form__signup">
                                <a href="/signup" title="Create Account">
                                    Create Account
                                    {/* <div>{setuserName}</div> */}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Login;
