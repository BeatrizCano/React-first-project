import PropTypes from 'prop-types';


function ImgBlueCircleAtom({ img_blue_circle}) {
  return (
    <section className="blue_circle">
      <img className="img_blue_circle" src={img_blue_circle} alt='blue circle'/>
    </section>
  );
}

ImgBlueCircleAtom.propTypes = {
    img_blue_circle: PropTypes.node.isRequired,
};

export default ImgBlueCircleAtom;