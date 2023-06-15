
import PropTypes from 'prop-types';

function SectionIconsAtom({icons}) {

  const { text_icon1, img_icon1, text_icon2, img_icon2, text_icon3, img_icon3, text_icon4, img_icon4, text_icon5, img_icon5,}  = icons

  return (
    <section className="icon">
            <div className="background_color_identify">
                <img className="img_icon" src={img_icon1} alt="identify goals"/>
                <p className="text_icon">
                    {text_icon1}
                </p>
            </div>

            <div className="background_color_situation">
                <img className="img_icon" src={img_icon2} alt="situation analysis"/>
                <p className="text_icon">
                {text_icon2}
                </p>
            </div>

            <div className="background_color_tasks">
                <img className="img_icon" src={img_icon3} alt="tasks settings"/>
                <p className="text_icon">
                {text_icon3}
                </p>
            </div>

            <div className="background_color_social">
                <img className="img_icon" src={img_icon4} alt="social interaction"/>
                <p className="text_icon">
                {text_icon4}
                </p>
            </div>       

            <div className="background_color_get_things">
                <img className="img_icon" src={img_icon5} alt="get things done"/>
                <p className="text_icon">
                {text_icon5}
                </p>
            </div>         
    </section>
  )}

SectionIconsAtom.propTypes = {
    icons: PropTypes.shape({
            img_icon1: PropTypes.node.isRequired,
            text_icon1: PropTypes.string.isRequired,
            img_icon2: PropTypes.node.isRequired,
            text_icon2: PropTypes.string.isRequired,
            img_icon3: PropTypes.node.isRequired,
            text_icon3: PropTypes.string.isRequired,
            img_icon4: PropTypes.node.isRequired,
            text_icon4: PropTypes.string.isRequired,
            img_icon5: PropTypes.node.isRequired,
            text_icon5: PropTypes.string.isRequired,
        }),       
};

export default SectionIconsAtom;