
import PropTypes from 'prop-types';

function NavAtom({logo}) {

  const { img, text1, text2, text3, text4, text5, text6, text7, link, text8 }  = logo

  return (
    <header>
        <nav className='nav'>
            <div className='logo'>
                <a href='#home'><img src={img} className='img_logo' alt='logo' id='logo'/></a>
            </div>
            <ul className="nav-list">
                <li>
                    <a href="#description">{text1}</a>
                </li>
                <li>
                    <a href="#features">{text2}</a>
                </li>
                <li>
                    <a href="#screens">{text3}</a>
                </li>
                <li htmlFor="dropdown" className="dropdown">  
                        <select id="dropdown" name="dropdown">
                          <option value="1">{text4}</option> 
                          <option value="2">{text5}</option>
                          <option value="3">{text6}</option> 
                          <option value="4">{text7}</option>
                        </select>                     
                </li>
                <li className="list_download">
                    <a className="btn" href={link}>
                    {text8}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

NavAtom.propTypes = {
    logo: PropTypes.shape({
            img: PropTypes.node.isRequired,
            text1: PropTypes.string.isRequired,
            text2: PropTypes.string.isRequired,
            text3: PropTypes.string.isRequired,
            text4: PropTypes.string.isRequired,
            text5: PropTypes.string.isRequired,
            text6: PropTypes.string.isRequired,
            text7: PropTypes.string.isRequired,
            text8: PropTypes.string.isRequired,
            link: PropTypes.node.isRequired,
        }),       
};

export default NavAtom;