
import PropTypes from 'prop-types';


function ButtonAtom({ button_content }) {
  return (
    <div>
      <button className="btn">
        {button_content}
      </button>
    </div>
  );
}

ButtonAtom.propTypes = {
  button_content: PropTypes.string.isRequired,
};

export default ButtonAtom;