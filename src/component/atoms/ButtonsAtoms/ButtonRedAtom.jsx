
import PropTypes from 'prop-types';


function ButtonRedAtom({ button_content }) {
  const {img_button, text_button, link_button} = button_content

  return (
    <section className='button_download'>
      <button className="red_button">
        <img className='img_button' src={img_button} alt=''/>
        <a className="text_button" href={link_button}>
            {text_button}
        </a>        
      </button>
    </section>
  );
}

ButtonRedAtom.propTypes = {
  button_content: PropTypes.shape({
          img_button: PropTypes.node.isRequired,
          text_button: PropTypes.string.isRequired,           
          link_button: PropTypes.node.isRequired,
      }),       
};


export default ButtonRedAtom;
