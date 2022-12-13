import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Axios from 'axios'
import {AiOutlinePlayCircle} from 'react-icons/ai'


const WelcomeModal = ({ isShow, closeModal, modalTitle, flattened, stretch, slim }) => {

  const [play, setPlay] = useState(false)

  useEffect(() => {
    Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  }, []);

  // functions
  const closeX = (e) => {
    if (e) e.preventDefault();
    closeModal();
  }

  const togglePlay = (e) => {
    if (e) { e.preventDefault() }
    if (play) {
      console.log('Not playing');
    } else {
      console.log('playing')
    }
    setPlay(!play)
  }
  return (

    <>

      <Modal show={isShow}
        onHide={closeX}
        size="sm"
        fade={false}
        keyboard={false}
        aria-labelledby="medium-modal"
        centered
        className={`custom-modal ${slim ? slim : ''} ${stretch ? 'stretched' : ''} ${flattened ? 'flat' : ''} lg`}
      >

        <Modal.Body>

          <div className="d-flex">

            <div className="dm--dbx ui-full-bg-norm" style={{ backgroundImage: 'url("../../../images/assets/bg@auth01.jpg")' }}>
              <div className="dm--d">
                <div>
                  {/* <img src="../../../images/assets/i" alt="icon" /> */}
                </div>
              </div>
            </div>

            <div className="dm--body">

              <div className="d-flex align-items-center mrgb1">
                <h2 className="onpurple font-600 mrgb0 font-mattermedium fs-18">
                  {modalTitle}
                </h2>
                <div className="ml-auto">
                  <Link to="" onClick={(e) => closeX(e)} className="link-round sm bg-brand-orangewhite ui-icon-animate">
                    <span className="fe fe-x fs-12 brand-orange"></span>
                  </Link>
                </div>
              </div>

              <div className="dm--ct mrgt2 video">

                <video autoPlay={play} loop playsInline controls>
                  <source src='https://res.cloudinary.com/uridevmedia/video/upload/v1669914418/Lagos_Invite_SMPH--_FINAL_geywsr.mp4' type='video/mp4' />
                </video>

              </div>
            </div>

          </div>

        </Modal.Body>

      </Modal>


    </>

  )

}

export default WelcomeModal;