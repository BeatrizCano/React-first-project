import PropTypes from 'prop-types';


function PAtom({ p_text }) {
  return (
    <section className='title'>
      <p>
        {p_text}
      </p>
    </section>
  );
}

PAtom.propTypes = {
  p_text: PropTypes.string.isRequired,
};

export default PAtom;