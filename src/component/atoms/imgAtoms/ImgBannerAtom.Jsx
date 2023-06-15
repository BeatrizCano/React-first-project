
import PropTypes from 'prop-types';

function ImgBannerAtom({img_banner}) {

  const { img1, img2, img3, img4, img5 }  = img_banner

  return (
    <section className="banner">
      <img className="img_banner" src={img1} alt='logo'/>
      <img className="img_banner" src={img2} alt='logo'/>
      <img className="img_banner" src={img3} alt='logo'/>
      <img className="img_banner" src={img4} alt='logo'/>
      <img className="img_banner" src={img5} alt='logo'/>
    </section>
  );
}

ImgBannerAtom.propTypes = {
    img_banner: PropTypes.shape({
            img1:PropTypes.node.isRequired,
            img2:PropTypes.node.isRequired,
            img3:PropTypes.node.isRequired,
            img4:PropTypes.node.isRequired,
            img5:PropTypes.node.isRequired,
        }),       
};

export default ImgBannerAtom;


