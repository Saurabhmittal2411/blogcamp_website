import './contact.css'
import Navbar from '../../components/navbar/navbar';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import facebbok from '../../images/facebook.png';
export default function Contact() {
  return (
    <div>
        <Navbar/>
      <div class="contact-container">
      <div class="contact-left">
        <h2 class="contact-left-heading">Contact Us Here</h2>

        <form action="#">
          <div class="form-element">
            <input type="text" id="contact-name" class="form-input" />
            <label for="contact-name">Full Name</label>
          </div>

          <div class="form-element">
            <input type="text" id="contact-email" class="form-input" />
            <label for="contact-email">Email</label>
          </div>

          <div class="form-element">
            <textarea
              name=""
              id="contact-message"
              cols="30"
              rows="10"
              class="form-input"
            ></textarea>
            <label for="contact-message">Your Message</label>
          </div>

          <input type="submit" class="form-btn" value="Send" />
        </form>
      </div>
      <div class="contact-right">
        <h2>Or Here</h2>

        <p>
          <strong>Email:</strong>
        </p>
        <p>saurabhmittal2411@gmail.com</p>
        <br />
        <p>
          <strong>Get Social:</strong>
        </p>
        <div class="col-3">
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
      </div>
    </div>
    </div>
  )
}
