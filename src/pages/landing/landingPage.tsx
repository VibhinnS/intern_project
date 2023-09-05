import { Link } from "react-router-dom";
import React from "react";
import "./landingPage.css";
import { logOut } from "../../firebase";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import LOGIN from "../../components/login/login";
import { AiOutlineClose } from "react-icons/ai";

function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    boxShadow: 24,
    p: 0,
    outline: 0,
  };

  return (
    <>
    <div className="cursor"></div>
    <div id="nav">
        {/* <!-- <img src="https://d33wubrfki0l68.cloudfront.net/439bf938233c24af021ffe6d206cd42f546e1143/ff4ed/assets/logo.svg"
            alt=""> --> */}
        {/* <Link to="/dashboard"> */}


        <button onClick={handleOpen} className="login-button">
            LOG IN
        </button>
    </div>
    <div id="purple">
        
    </div>
    <div className="main">
        <div className="page1">
            
            <h1>What Gets Measured</h1>
            <h2>Gets Improved</h2>
            <video autoPlay muted loop src="src/pages/landing/pexels-olya-kobruseva-5562047 (1080p).mp4"></video>
        </div>
        <div className="page2">
            <h1>We are Profitwise,</h1>
            <div className="page2-container">
                <div className="page2-left">
                    <h2>A ONE STOP
                        SOLUTION
                        TO TRACK YOUR
                        E-COM AGENCY'S
                        PROFITABILITY</h2>
                </div>
                <div className="page2-right">
                    <p>Profitwise lets you track your
                        agency's revenue and expenses through months.
                    And lets you make data driven decisions</p>
                </div>
            </div>

        </div>
        <div className="page3">
            <h1>Partner Brands</h1>
            <div className="page3-part1">
                <div className="brand-logos">
                    <img src="assets\metaboundx.svg" />

                    <img src="assets\iag.svg" />

                    <img src="./assets/vaynerx.svg" />

                    <img src="assets/duo.svg" />
                </div>
            </div>
        </div>
        <div className="page4">
            <div className="elem">
                {/* <!-- <img src="https://d33wubrfki0l68.cloudfront.net/3401770635e95968e300d88f8b9479ecbc008eeb/be2e5/assets/home/home-experience-1.webp"
                    alt=""> --> */}
                <div className="text-div">
                    <h1>Strategize</h1>
                    <h1>Strategize</h1>
                </div>
                {/* <!-- <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp"
                    alt=""> --> */}
            </div>
            <div className="elem">
                {/* <!-- <img src="https://d33wubrfki0l68.cloudfront.net/3401770635e95968e300d88f8b9479ecbc008eeb/be2e5/assets/home/home-experience-1.webp"
                    alt=""> --> */}
                <div className="text-div">
                    <h1>Measure</h1>
                    <h1>Measure</h1>
                </div>
                {/* <!-- <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp"
                    alt=""> --> */}
            </div>
            <div className="elem">
                {/* <!-- <img src="https://d33wubrfki0l68.cloudfront.net/3401770635e95968e300d88f8b9479ecbc008eeb/be2e5/assets/home/home-experience-1.webp"
                    alt=""> --> */}
                <div className="text-div">
                    <h1>Improve</h1>
                    <h1>Improve</h1>
                </div>
                {/* <!-- <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp"
                    alt=""> --> */}
            </div>

        </div>
        {/* <!-- <div className="page5">
            <h2>Mentions Clients</h2>
            <div className="box"
                data-image="https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
            <div className="box"
                data-image="https://images.unsplash.com/photo-1688232543149-5602b136ba11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
            <div className="box"
                data-image="https://images.unsplash.com/photo-1688103920333-117afda88518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
            <div className="box"
                data-image="https://images.unsplash.com/photo-1687913161653-7cddb0ba09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
            <div className="box"
                data-image="https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
                <h3>Verizon</h3>
                <h4>2021</h4>
            </div>
        </div> --> */}
        <footer>
            <h1 className="action-text1">START</h1>
            <h1 className="action-text2">NOW!</h1>

            {/* <button className="learn-more">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button> */}
        </footer>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    <script src="./script.js"></script>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-transparent rounded-2xl">
          <div className="px-4 py-10 bg-white dark:bg-gray-800 rounded-2xl">
            <span
              onClick={handleClose}
              className="absolute  right-4 top-4 rounded-full p-2 duration-200 cursor-pointer"
            >
              <AiOutlineClose className="text-2xl" color="black" />
            </span>
            <LOGIN />
          </div>
        </Box>
      </Modal>

    </>
  );
}

export default LandingPage;
