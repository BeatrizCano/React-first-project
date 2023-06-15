
import PropTypes from 'prop-types';


function PStrongAtom({ p_strong_text }) {
  return (
    <section>
      <p>
        <strong>
            {p_strong_text}
        </strong>
      </p>
    </section>
  );
}

PStrongAtom.propTypes = {
  p_strong_text: PropTypes.string.isRequired,
};

export default PStrongAtom;