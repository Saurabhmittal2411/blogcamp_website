import './footer.css';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import facebbok from '../../images/facebook.png';
import { toast } from 'react-toastify';
export default function Footer() {
    const submit = () => toast("we will contact you shortly");
    return (
        <div class="footer">
            <div class="foooter">
                <div class="col-1">
                    <h3> LINKS </h3>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                    <a href='/write'>Write</a>
                </div>
                <div class="col-2">
                    <h3>CONTACT US</h3>
                    <form>
                        <input type="email" placeholder="your Email address" required /><br />
                        <button type="submit" onClick={submit}>Submit</button>
                    </form>
                </div>
                <div class="col-3">
                    <h3> FOLLOW US</h3>
                    <div class="social-icon">
                        <a href="https://www.instagram.com/" target="/">
                            <img src={instagram} alt="" srcset="" />
                        </a>
                        <a href="https://twitter.com/">
                            <img src={twitter} alt="" srcset="" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src={facebbok} alt="" srcset="" />
                        </a>
                    </div>
                </div>
                <div class="col-4">
                    <h3> CALL US</h3>
                    <div class="social-icon">
                        7428061255
                    </div>
                </div>

            </div>
            <div class="row">
                <hr />
                <p> Copyright &copy; www.BlogCamp.com. All rights reserved.</p>
            </div>
        </div>
  )
}
