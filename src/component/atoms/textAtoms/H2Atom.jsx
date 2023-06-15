
import PropTypes from 'prop-types';


function H2Atom({ h2_text }) {
  return (
    <section className='title'>
      <h2>
        {h2_text}
      </h2>
    </section>
  );
}

H2Atom.propTypes = {
  h2_text: PropTypes.string.isRequired,
};

export default H2Atom;