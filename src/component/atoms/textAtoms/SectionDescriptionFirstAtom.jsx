
import PropTypes from 'prop-types';

function SectionDescriptionFirstAtom({icons_first_description}) {

  const { text_icon1, img_icon1, text_icon2, img_icon2, text_icon3, img_icon3,}  = icons_first_description

  return (
    <section className="second_description">

        <div className="first_div_description">
            
            <div className="items_second_description background_schedule_violet">
                <img className="img_icon_description" src={img_icon1} alt="clock"/>
                <p className="color_white">
                    {text_icon1}
                </p>
            </div>

            <div className="items_second_description">
                <img className="img_icon_description" src={img_icon2} alt="list"/>
                <p>
                    {text_icon2}
                </p>
            </div>

            <div className="items_second_description">
                <img className="img_icon_description" src={img_icon3} alt="schedule"/>
                <p>
                    {text_icon3}
                </p>
            </div>
        </div>
    </section>
  )}

  SectionDescriptionFirstAtom.propTypes = {
    icons_first_description: PropTypes.shape({
            img_icon1: PropTypes.node.isRequired,
            text_icon1: PropTypes.string.isRequired,
            img_icon2: PropTypes.node.isRequired,
            text_icon2: PropTypes.string.isRequired,
            img_icon3: PropTypes.node.isRequired,
            text_icon3: PropTypes.string.isRequired,
        }),       
};

export default SectionDescriptionFirstAtom;