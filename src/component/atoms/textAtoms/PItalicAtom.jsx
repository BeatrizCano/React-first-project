
import PropTypes from 'prop-types';


function PItalicAtom({ p_text }) {
  return (
    <section className='user'>
      <p className='p_italic'>
        {p_text}
      </p>
    </section>
  );
}

PItalicAtom.propTypes = {
  p_text: PropTypes.string.isRequired,
};

export default PItalicAtom;