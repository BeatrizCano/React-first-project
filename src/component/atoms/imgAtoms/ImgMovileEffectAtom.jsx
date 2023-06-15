
import PropTypes from 'prop-types';


function ImgMovileEffectAtom({ img_mobile_effect }) {
  return (
    <section className="mobile">
      <img className="img_mobile" src={img_mobile_effect} alt='mobile'/>
    </section>
  );
}

ImgMovileEffectAtom.propTypes = {
  img_mobile_effect: PropTypes.node.isRequired,
};

export default ImgMovileEffectAtom;