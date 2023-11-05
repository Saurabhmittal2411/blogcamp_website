import './drop-down.css';
import profile from '../../images/card1.png';
import user from '../../images/user.png';
import signup from '../../images/signup.png';
import login from '../../images/login.png';
import logout from '../../images/logout.png';
export default function Dropdown() {
  return (
    <div>
      <div class="sub-menu-wrap"id="submenu" >
        <div class="sub-menu">
          <div class="user-info">
            <img src={profile} alt="no profile pic" title='Profile pic' />
            <h2>Saurabh Mittal</h2>
          </div>
          <hr />
          <a href="/profile" class="sub-menu-link">
            <img src={user} alt="no" />
            <p>Edit Profile</p>
            <div>{'>'}</div>
          </a>
          <a href="/login" class="sub-menu-link">
            <img src={login} alt="no" />
            <p>Login</p>
            <div>{'>'}</div>
          </a>
          <a href="/signup" class="sub-menu-link">
            <img src={signup} alt="no" />
            <p>Signup</p>
            <div>{'>'}</div>
          </a>
          <a href="#" class="sub-menu-link">
            <img src={logout} alt="no" />
            <p>Logout</p>
            <div>{'>'}</div>
          </a>
        </div>
      </div>
    </div>
  )
}
