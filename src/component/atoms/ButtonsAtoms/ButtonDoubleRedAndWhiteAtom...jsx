
import PropTypes from 'prop-types';


function ButtonDoubleRedAndWhiteAtom({ button_content_red_and_white }) {
  const { text_button, link_button, text_button1, link_button1 } =  button_content_red_and_white

  return (
    <section className='button_download third_div_description'>
      <button className="red_button">
        <a className="text_button" href={link_button}>
            {text_button}
        </a>        
      </button>
      <button className="privacy_button">
        <a href={link_button1}>
            {text_button1}
        </a>        
      </button>
    </section>
  );
}

ButtonDoubleRedAndWhiteAtom.propTypes = {
    button_content_red_and_white: PropTypes.shape({
          text_button: PropTypes.string.isRequired,           
          link_button: PropTypes.node.isRequired,
          text_button1: PropTypes.string.isRequired,           
          link_button1: PropTypes.node.isRequired,
      }),       
};

export default ButtonDoubleRedAndWhiteAtom;