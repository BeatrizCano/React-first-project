import PropTypes from 'prop-types';


function H1Atom({ h1_text }) {
  return (
    <section className='title'>
      <h1>
        {h1_text}
      </h1>
    </section>
  );
}

H1Atom.propTypes = {
  h1_text: PropTypes.string.isRequired,
};

export default H1Atom;