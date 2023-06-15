
import PropTypes from 'prop-types';


function ButtonRedNoImgAtom({ button_content_no_img }) {
  const {text_button_no_img, link_button_no_img} = button_content_no_img

  return (
    <section>
      <button className="red_button">
        <a className="text_button" href={link_button_no_img}>
            {text_button_no_img}
        </a>        
      </button>
    </section>
  );
}

ButtonRedNoImgAtom.propTypes = {
  button_content_no_img: PropTypes.shape({
          text_button_no_img: PropTypes.string.isRequired,           
          link_button_no_img: PropTypes.node.isRequired,
      }),       
};


export default  ButtonRedNoImgAtom;