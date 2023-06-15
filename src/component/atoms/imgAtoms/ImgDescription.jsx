import PropTypes from 'prop-types';


function ImgDescription({ img_description }) {
  return (
    <section className="description second_description" id='description'>
      <img className="img_description" src={img_description} alt='img captures'/>
    </section>
  );
}

ImgDescription.propTypes = {
  img_description: PropTypes.node.isRequired,
};

export default ImgDescription;