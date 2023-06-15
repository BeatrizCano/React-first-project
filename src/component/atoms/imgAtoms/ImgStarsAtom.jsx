
import PropTypes from 'prop-types';


function ImgStarsAtom({ img_star }) {
  return (
    <section className="user">
      <img className="star" src={img_star} alt='star'/>
    </section>
  );
}

ImgStarsAtom.propTypes = {
  img_star: PropTypes.node.isRequired,
};

export default ImgStarsAtom;