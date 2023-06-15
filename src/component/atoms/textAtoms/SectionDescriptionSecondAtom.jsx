
import PropTypes from 'prop-types';

function SectionDescriptionSecondAtom({icons_second_description}) {

  const { text_icon1, img_icon, text_icon2, text_icon3 }  = icons_second_description

  return (
    <section className="second_description">

        <div className="second_div_description">
            
            <div className="item_second_div">
                <img className="icon_tick" src={img_icon} alt="tick"/>
                <p>
                    {text_icon1}
                </p>
            </div>

            <div className="item_second_div">
                <img className="icon_tick" src={img_icon} alt="tick"/>
                <p>
                    {text_icon2}
                </p>
            </div>

            <div className="item_second_div">
                <img className="icon_tick" src={img_icon} alt="tick"/>
                <p>
                    {text_icon3}
                </p>
            </div>
        </div>
    </section>
  )}

  SectionDescriptionSecondAtom.propTypes = {
    icons_second_description: PropTypes.shape({
            img_icon: PropTypes.node.isRequired,
            text_icon1: PropTypes.string.isRequired,
            text_icon2: PropTypes.string.isRequired,
            text_icon3: PropTypes.string.isRequired,
        }),       
};

export default SectionDescriptionSecondAtom;