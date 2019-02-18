import React, { PureComponent } from 'react';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import RBCarousel from 'react-bootstrap-carousel';

import HM0 from './img/humanoidManual-0.png';
import HM1 from './img/humanoidManual-1.png';
import HM2 from './img/humanoidManual-2.png';
import HM3 from './img/humanoidManual-3.png';
import HM4 from './img/humanoidManual-4.png';
import HM5 from './img/humanoidManual-5.png';
import HM6 from './img/humanoidManual-6.png';
import HM7 from './img/humanoidManual-7.png';

// const Bigbunny =
//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
// const ElephantsDream =
//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
// const ForBiggerBlaze =
//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
// const ForBiggerEscapes =
//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';
// const ForBiggerFun =
//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4';
// const ForBiggerJoyrides =
//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';
// const ForBiggerMeltdowns =
//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4';
// const Sintel =
//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4';
// const SuburuOutback =
//   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4';

class CarouselManualBody extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      autoplay: false,
      leftIcon: <span className="fas fa-chevron-left" />,
      rightIcon: <span className="fas fa-chevron-right" />
    };
  }

  render() {
    // let leftIcon = <span className="fas fa-chevron-left" />;
    // let rightIcon = <span className="fa fa-music" />;
    let { leftIcon, rightIcon } = this.state;

    return (
      <div className="container">
        <div className="row">
          {/* <div className="col-md-4">
            <img className="text-position1" src={Holo} alt="..." />
          </div> */}
          <div className="col-md-12">
            {/* <div className="fixedsizeM"> */}
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={3000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div className="img-div-style">
                <img className="text-position2" src={HM0} alt="..." />
              </div>
              <div className="img-div-style">
                <img className="text-position2" src={HM1} alt="..." />
              </div>

              <div className="img-div-style">
                <img className="text-position2" src={HM2} alt="..." />
              </div>
              <div className="img-div-style">
                <img className="text-position2" src={HM3} alt="..." />
              </div>
              <div className="img-div-style">
                <img className="text-position2" src={HM4} alt="..." />
              </div>
              <div className="img-div-style">
                <img className="text-position2" src={HM5} alt="..." />
              </div>
              <div className="img-div-style">
                <img className="text-position2" src={HM6} alt="..." />
              </div>
              <div className="img-div-style">
                <img className="text-position2" src={HM7} alt="..." />
              </div>
              {/* <div className="img-div-style">
                <video
                  className="carousel-center"
                  controls
                  style={{ width: '100%' }}
                  height="550"
                >
                  <source src={Bigbunny} type="video/mp4" />
                </video>
              </div> */}
            </RBCarousel>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselManualBody;
