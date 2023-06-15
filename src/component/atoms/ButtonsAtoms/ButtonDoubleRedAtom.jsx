import PropTypes from 'prop-types';


function ButtonDoubleRedAtom({ button_content }) {
  const {img_button, text_button, link_button, img_button1, text_button1, link_button1} = button_content

  return (
    <section className='button_download'>
      <button className="red_button">
        <img className='img_button' src={img_button} alt=''/>
        <a className="text_button" href={link_button}>
            {text_button}
        </a>        
      </button>
      <button className="red_button">
        <img className='img_button' src={img_button1} alt=''/>
        <a className="text_button" href={link_button1}>
            {text_button1}
        </a>        
      </button>
    </section>
  );
}

ButtonDoubleRedAtom.propTypes = {
  button_content: PropTypes.shape({
          img_button: PropTypes.node.isRequired,
          text_button: PropTypes.string.isRequired,           
          link_button: PropTypes.node.isRequired,
          img_button1: PropTypes.node.isRequired,
          text_button1: PropTypes.string.isRequired,           
          link_button1: PropTypes.node.isRequired,
      }),       
};

export default ButtonDoubleRedAtom;