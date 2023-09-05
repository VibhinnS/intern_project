import "./landingPage.css";

function LandingPage() {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>
          Duo Studio — A Creative Digital Agency in Washington DC
        </title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css"
        />
        <link
          rel="stylesheet"
          href="src/pages/landing/style.css"
        />
      </head>
      <div className="cursor"></div>
      <div id="nav">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/439bf938233c24af021ffe6d206cd42f546e1143/ff4ed/assets/logo.svg"
          alt=""
        />
        <div id="nav-part2">
          <h4>Home</h4>
          <h4>Work</h4>
          <h4>Studio</h4>
          <h4>Contact</h4>
        </div>
        <div id="nav-part3">
          <div id="circle"></div>
        </div>
      </div>
      <div id="purple"></div>
      <div className="main">
        <div className="page1">
          <h1>Digitally crafted</h1>
          <h2>brand experiences</h2>
          <video
            autoPlay
            muted
            loop
            src="https://duo-studio.co/assets/home/Duo%20Reel--Desktop-reduced.mp4"
          ></video>
        </div>
        <div className="page2">
          <h1>We are Duo Studio,</h1>
          <div className="page2-container">
            <div className="page2-left">
              <h2>A CREATIVE COLLECTIVE MADE TO UNLOCK YOUR BRAND’S POTENTIAL</h2>
            </div>
            <div className="page2-right">
              <p>
                We weave together bold strategy and creative execution to produce thought-provoking digital experiences.
                We take a highly personalized approach to delivering branding, web design, and content marketing solutions.
                Born in the DC area - now serving clients worldwide.
              </p>
              <button>About us</button>
            </div>
          </div>
        </div>
        <div className="page3">
          <h1>Selected Works</h1>
          <div className="page3-part1">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/aa3d2ff66de5f16336bd94fd68c3c2ce61e29f68/d5064/assets/home/home-casestudy-mgny.webp"
              alt=""
            />
            <video
              autoPlay
              loop
              muted
              src="https://d33wubrfki0l68.cloudfront.net/a13ea7c2ca2f38134748966280e54af4340ce821/f976d/assets/home/projects_madegood-reduced.mp4"
            ></video>
          </div>
        </div>
        <div className="page4">
          {/* Your content for page 4 */}
        </div>
        <div className="page5">
          {/* Your content for page 5 */}
        </div>
        <footer>
          {/* Your footer content */}
        </footer>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" 
              integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" 
              crossOrigin="anonymous" 
              referrerPolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" 
              integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw==" 
              crossOrigin="anonymous" 
              referrerPolicy="no-referrer"></script>
      <script src="src/pages/landing/script.js"></script>
    </div>
  );
}

export default LandingPage;
