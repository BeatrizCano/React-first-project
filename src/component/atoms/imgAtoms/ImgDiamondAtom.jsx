
import PropTypes from 'prop-types';


function ImgDiamondAtom({ img_diamond }) {
  return (
    <section className="img_diamond" id='home'>
      <img className="green_diamond" src={img_diamond} alt='green diamond'/>
    </section>
  );
}

ImgDiamondAtom.propTypes = {
  img_diamond: PropTypes.node.isRequired,
};

export default ImgDiamondAtom;