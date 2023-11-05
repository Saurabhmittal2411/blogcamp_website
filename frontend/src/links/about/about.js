import './about.css';
import card1 from '../../images/card1.png';
import Navbar from '../../components/navbar/navbar';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import facebbok from '../../images/facebook.png';
export default function About() {
  return (
    <div>
      <Navbar />
      <section class="about-us">
        <div class="about">
          <img src={card1} class="pic" />
          <div class="text">
            <h2>ABOUT ME</h2>
            <h5>Full stack Developer</h5>
            <p>"Hello there! I'm <u>SAURABH MITTAL</u>, a passionate BCA student with a flair for coding and a love for words.
              My journey in the world of tech has equipped me with a diverse skill set including
              HTML, CSS, JavaScript, PHP, C, C++, Java, and SQL. Currently, I'm immersing myself in the world of MERN stack through a
              dynamic summer training program.</p>
            <div class="col-3">
              {/* <h3> FOLLOW US</h3> */}
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
      </section>
    </div>
  )
}
