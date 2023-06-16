
import './App.css';
import NavAtom from './component/atoms/textAtoms/NavAtom';
import ImgDiamondAtom from './component/atoms/imgAtoms/ImgDiamondAtom';
import ImgYellowCircleAtom from './component/atoms/imgAtoms/ImgYellowCircleAtoms';
import H1Atom from './component/atoms/textAtoms/H1Atom';
import PAtom from './component/atoms/textAtoms/PAtom';
import ButtonDoubleRedAtom from './component/atoms/ButtonsAtoms/ButtonDoubleRedAtom';
import ImgBlueCircleAtom from './component/atoms/imgAtoms/ImgBlueCircleAtom';
import ImgMovileEffectAtom from './component/atoms/imgAtoms/ImgMovileEffectAtom';
import SectionIconsAtom from './component/atoms/textAtoms/SectionIconsAtom';
import ImgDescription from './component/atoms/imgAtoms/ImgDescription';
import H2Atom from './component/atoms/textAtoms/H2Atom';
import UlAtom from './component/atoms/textAtoms/UlAtom';
import ButtonRedNoImgAtom from './component/atoms/ButtonsAtoms/ButtonRedNoImgAtom';
import SectionDescriptionFirstAtom from './component/atoms/textAtoms/SectionDescriptionFirstAtom';
import PStrongDescriptionAtom from './component/atoms/textAtoms/PStrongDescriptionAtom';
import SectionDescriptionSecondAtom from './component/atoms/textAtoms/SectionDescriptionSecondAtom';
import ButtonDoubleRedAndWhiteAtom from './component/atoms/ButtonsAtoms/ButtonDoubleRedAndWhiteAtom..';
import ImgDescriptionBackground from './component/atoms/imgAtoms/ImgDescriptionBackground';
import ImgStarsAtom from './component/atoms/imgAtoms/ImgStarsAtom';
import HrAtom from './component/atoms/textAtoms/HrAtom';
import PItalicAtom from './component/atoms/textAtoms/PItalicAtom';
import PStrongAtom from './component/atoms/textAtoms/PStrongAtom';
import ImgBannerAtom from './component/atoms/imgAtoms/ImageBannerAtom';

function App() {
    const logoData = {
      img: 'src/assets/imagenes comprimidas/logo.svg',
      text1: 'DESCRIPTION',
      text2: 'FEATURES',
      text3: 'SCREENS',
      text4: 'EXTRA',
      text5: 'ARTICLE DETAILS',
      text6: 'TERMS CONDITIONS',
      text7: 'PRIVACY POLICY',
      text8: 'DOWNLOAD',
      link: 'https://factoriaf5.org/?gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutk8EIHAeCTiB1IgGsGTw3naDZaJEa7v34vp5Z5Hr3xk1a9weU4NqZoaAid-EALw_wcB"'
    }

    const button_contentData = {
      img_button: 'src/assets/imagenes comprimidas/Apple Logo (1).png',
      text_button: 'DOWNLOAD',
      link_button: 'https://factoriaf5.org/?gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutk8EIHAeCTiB1IgGsGTw3naDZaJEa7v34vp5Z5Hr3xk1a9weU4NqZoaAid-EALw_wcB',
      img_button1: 'src/assets/imagenes comprimidas/Google Play.png',
      text_button1: 'DOWNLOAD',
      link_button1: 'https://factoriaf5.org/?gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutk8EIHAeCTiB1IgGsGTw3naDZaJEa7v34vp5Z5Hr3xk1a9weU4NqZoaAid-EALw_wcB'
    };

    const iconsData = {
      img_icon1: 'src/assets/imagenes comprimidas/people_circle.png',
      text_icon1: 'Identify Goals',
      img_icon2: 'src/assets/imagenes comprimidas/less than_circle.png',
      text_icon2: 'Situation Analysis',
      img_icon3: 'src/assets/imagenes comprimidas/ajustes_circle.png',
      text_icon3: 'Tasks Settings',
      img_icon4: 'src/assets/imagenes comprimidas/comentarios.png',
      text_icon4: 'Social Interaction',
      img_icon5: 'src/assets/imagenes comprimidas/cohete_circle.png',
      text_icon5: 'Get Things Done',
    } 

    const ulData = {
      ul_text1: ' Analyse and evaluate your current status and productivity', 
      ul_text2: 'Begin monitoring your day to day routine with Sync app', 
      ul_text3:'See the improved results in no more than a couple of weeks',
    }

    const button_content_no_imgData = {
      text_button_no_img: 'LIGHTBOX', 
      link_button_no_img: '#',
    } 

    const icons_first_descriptionData = {
      text_icon1: 'Schedule', 
      img_icon1: 'src/assets/imagenes comprimidas/clock_360.png',
      text_icon2: 'Tracking', 
      img_icon2: 'src/assets/imagenes comprimidas/list.png', 
      text_icon3: 'Organize', 
      img_icon3: 'src/assets/imagenes comprimidas/schedule.png',
    }

    const icons_second_descriptionData = {
      text_icon1: 'You can always add new tasks or change the settings of existing ones in your calendar view or the app control panel', 
      img_icon: 'src/assets/imagenes comprimidas/check.png', 
      text_icon2: 'It is easy to stay focused on your most important daily activities that will get you closer to meeting your goals',
      text_icon3: 'Use phone reminders to free up your long term memory which will reduce stress and make you more productive', 
    }

    const button_content_red_and_whiteData = {
      text_button: 'TERMS', 
      link_button: '#', 
      text_button1: 'PRIVACY', 
      link_button1: '#',
    }

    const banner_pageData = {
      img1: 'src/assets/imagenes comprimidas/customer-logo-1.png', 
      img2: 'src/assets/imagenes comprimidas/customer-logo-2.png', 
      img3: 'src/assets/imagenes comprimidas/customer-logo-3.png', 
      img4: 'src/assets/imagenes comprimidas/customer-logo-4.png', 
      img5: 'src/assets/imagenes comprimidas/customer-logo-5.png',
    }


  return (
    <>
    <NavAtom logo={logoData}></NavAtom>
    <ImgDiamondAtom img_diamond={'src/assets/imagenes comprimidas/decorative-green-diamond.svg'}></ImgDiamondAtom>
    <ImgYellowCircleAtom img_yellow_circle={'src/assets/imagenes comprimidas/decorative-yellow-circle.svg'}></ImgYellowCircleAtom>
    <H1Atom h1_text={'Mobile App Landing Page'}></H1Atom>   
    <PAtom p_text={' Start focusing on your goals and get more things done with Sync mobile application. It is the first app to harness the power of social connections to help you stay focused and get organized '}></PAtom> 
    <ButtonDoubleRedAtom button_content={button_contentData} /> 
    <ImgBlueCircleAtom img_blue_circle={'src/assets/imagenes comprimidas/decorative-blue-circle.svg'}></ImgBlueCircleAtom>
    <ImgMovileEffectAtom img_mobile_effect={'src/assets/imagenes comprimidas/header-iphone.png'}></ImgMovileEffectAtom>
    <SectionIconsAtom icons={iconsData}/>
    <ImgDescription img_description={'src/assets/imagenes comprimidas/description-1-app.png'}></ImgDescription>
    <H2Atom  h2_text={' Organize Your Time And Start Getting Results'}></H2Atom> 
    <PAtom p_text={'Sync is the first mobile app on the market to harness the power of social connections to help you stop procrastinating and the start getting things done. Give it a try and see the changes right away.'}></PAtom> 
    <UlAtom ul={ulData}></UlAtom>
    <ButtonRedNoImgAtom button_content_no_img={button_content_no_imgData}></ButtonRedNoImgAtom>
    <SectionDescriptionFirstAtom icons_first_description={icons_first_descriptionData}></SectionDescriptionFirstAtom>
    <PStrongDescriptionAtom></PStrongDescriptionAtom>
    <SectionDescriptionSecondAtom icons_second_description={icons_second_descriptionData}></SectionDescriptionSecondAtom>
    <ButtonDoubleRedAndWhiteAtom button_content_red_and_white={button_content_red_and_whiteData}></ButtonDoubleRedAndWhiteAtom>
    <ImgDescriptionBackground img_description={'src/assets/imagenes comprimidas/description-2-app.png'}></ImgDescriptionBackground>
    <H2Atom  h2_text={'Special Features'}></H2Atom>
    <H2Atom  h2_text={'User Testimonials'}></H2Atom>
    <ImgStarsAtom img_star={'src/assets/imagenes comprimidas/five_stars_720.png'}></ImgStarsAtom>
    <HrAtom></HrAtom>
    <PItalicAtom p_text={'I love using Sync form my personal development needs. It meets all my requirements and it actually helps a lot with focusing skills'}></PItalicAtom>
    <PStrongAtom p_strong_text={'Rick jones - Designer'}></PStrongAtom>
    <ImgStarsAtom img_star={'src/assets/imagenes comprimidas/five_stars_720.png'}></ImgStarsAtom>
    <HrAtom></HrAtom>
    <PItalicAtom p_text={'After trying out a large number of personal coaching apps I decided  to give Sync a try and what a wonderful surprise it was.'}></PItalicAtom>
    <PStrongAtom p_strong_text={'Lynda Marquez - Developer'}></PStrongAtom>
    <ImgStarsAtom img_star={'src/assets/imagenes comprimidas/five_stars_720.png'}></ImgStarsAtom>
    <HrAtom></HrAtom>
    <PItalicAtom p_text={'Never dreamed I could learn so fast how to focus on my personal goals and improve my life to levels thought posible.'}></PItalicAtom>
    <PStrongAtom p_strong_text={'Jay Frisco - Marketer'}></PStrongAtom>
    <ImgBannerAtom banner_page= {banner_pageData}></ImgBannerAtom>
    </>
  )
}

export default App;
