
import PropTypes from 'prop-types';

function SectionUserTestimonialsAtom({icon_star_description}) {

  const { text1, img, text2 }  = icon_star_description

  return (
   
            <div className="user">
                <img className="star" src={img} alt="star"/>
                <hr className="line"></hr>
                <p className="p_italic">
                    {text1}
                </p>
                <p>
                    <strong>
                        {text2}
                    </strong>
                </p>
            </div>
  )}

  SectionUserTestimonialsAtom.propTypes = {
    icon_star_description: PropTypes.shape({
            img: PropTypes.node.isRequired,
            text1: PropTypes.string.isRequired,           
            text2: PropTypes.string.isRequired,
        }),       
};

export default SectionUserTestimonialsAtom;