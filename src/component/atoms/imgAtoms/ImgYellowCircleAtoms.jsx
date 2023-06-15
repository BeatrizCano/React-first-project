
import PropTypes from 'prop-types';


function ImgYellowCircleAtom({ img_yellow_circle}) {
  return (
    <section className="img_yellow_circle">
      <img className="yellow_circle" src={img_yellow_circle} alt='yellow_circle'/>
    </section>
  );
}

ImgYellowCircleAtom.propTypes = {
    img_yellow_circle: PropTypes.node.isRequired,
};

export default ImgYellowCircleAtom;