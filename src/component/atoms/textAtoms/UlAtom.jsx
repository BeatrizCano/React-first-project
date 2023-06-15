import PropTypes from 'prop-types';

function UlAtom({ul}) {

  const { ul_text1, ul_text2, ul_text3 }  = ul

  return (
    <section>
            <ul className="grey_color">
                <li>
                    {ul_text1}
                </li>
                <li>
                    {ul_text2}
                </li>
                <li>
                    {ul_text3}
                </li>
            </ul>
      </section>
   
  );
}

UlAtom.propTypes = {
    ul: PropTypes.shape({           
            ul_text1: PropTypes.string.isRequired,
            ul_text2: PropTypes.string.isRequired,
            ul_text3: PropTypes.string.isRequired,
        }),       
};

export default UlAtom;