import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
        Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
        About Me
        </Link>
      </li>       
      <li>
      <Link to="/project" onClick={() => setMobileToggle(false)}>
      Portfolio
        </Link>
        {/* <DropDown>
          <ul>              
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
              Portfolio
              </Link>
            </li>           
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
                 Project Details
              </Link>
            </li>                        
          </ul>
        </DropDown> */}
      </li>

      {/* <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>           
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
