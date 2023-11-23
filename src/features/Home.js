import React from 'react';
// import Navbar from './Navbar';
import Navbar from './Navbar';
// import '../scss/Home.css'
import '../scss/Home.css'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className=' container custom-top-margin'>

        <div className='row'>
          <div className='col-6'>
            <p className="custom-p1 ml-auto">Reach billions in a click. connect <br />millions in a moment.</p>
            <img src="/images/Rectangle 3.svg" alt="Rectangle" class="custom-rect" />
            <p className="custom-p">The world's most innovative companies build communication solutions<br /> using Celetel applications and APIs. Get started today and talk to your.<br /> customers over any channel.</p>
            <button className="btn btn-warning custom-button">Get started today</button>

            <div className="col-md-6 custom-Frame">
              <img src="/images/Frame.svg" alt="Frame" className="img-fluid " />
            </div>

          </div>


          <div className='col-lg-6 right'>

            <div className='card1'>
              <p>Activities<br /><span className="number">3</span></p>

              <div className="img1">
                <div className="img2">
                  <img src="/images/activity.svg" alt="activity" />
                </div>
                <img src="/images/Ellipse 8.svg" alt="Ellipse" />
              </div>


              <p>You have new activities</p>
              <div className="img3">
                <img src="/images/arrow-right-circle.svg" alt="arrow" />
                <p>go to Activities</p>
              </div>
            </div>
            <div className='Avatar'>
              <img src="/images/Avatar Image.svg" alt="Avt" />

            </div>


            <div className='Avatar1'>
              <img src="/images/Avatar1.svg" alt="arrow" />
              <p>Use code 676833 to verify your identity</p>
            </div>

            <div className="custom-img1">
              <img src="/images/Group1.svg" alt="Group" />
              <div className="custom-img2">
                <img src="/images/LockKey-r.svg" alt="activity" />
              </div>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6" style={{ padding: "0px", margin: "0px" }}>
              <div className="cardContainer">
                <div className="row">
                  <div className="col-lg-6 position-relative">
                    <img src="/images/Mobilesmsprototype.png" alt="activity" />

                    <div className="overlay-text blink">
                      Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,
                      sed <br /> do eiusmod tempor incididunt<br /> ut labore et dolore
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p className="hi-there">hi there</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;