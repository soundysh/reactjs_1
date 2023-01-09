import logo from "./logo.svg";
import logoMnet from "./Logobulet.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Ya namanya juga hidup yakan</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      <body>
        <section className="login">
          <div className="boxRight">
            <div className="flowSVG">
              <svg width="183" height="720" viewBox="0 0 183 720" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1590_1836)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M126.037 -2.13417e-06L109.232 19.8C92.4273 40.2 58.8174 79.8 75.6223 120C92.4273 160.2 159.647 199.8 172.251 240C184.855 280.2 33.6753 304.049 75.6223 360C117.569 415.951 34.9595 415.215 42.0124 480C49.0652 544.785 100.83 559.8 126.037 600C151.245 640.2 151.245 679.8 151.245 700.2L151.245 720L-1.51973e-06 720L-6.87235e-07 700.2C1.70482e-07 679.8 1.83546e-06 640.2 3.52567e-06 600C5.21588e-06 559.8 6.88086e-06 520.2 8.57107e-06 480C1.02613e-05 439.8 1.19263e-05 400.2 1.36165e-05 360C1.53067e-05 319.8 1.69717e-05 280.2 1.86619e-05 240C2.03521e-05 199.8 2.20171e-05 160.2 2.37073e-05 120C2.53975e-05 79.8 2.70625e-05 40.2 2.79202e-05 19.8L2.87527e-05 -7.86178e-06L126.037 -2.13417e-06Z"
                    fill="#E42312"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M126.037 -2.13417e-06L109.232 19.8C92.4273 40.2 58.8174 79.8 75.6223 120C92.4273 160.2 159.647 199.8 172.251 240C184.855 280.2 33.6753 304.049 75.6223 360C117.569 415.951 34.9595 415.215 42.0124 480C49.0652 544.785 100.83 559.8 126.037 600C151.245 640.2 151.245 679.8 151.245 700.2L151.245 720L-1.51973e-06 720L-6.87235e-07 700.2C1.70482e-07 679.8 1.83546e-06 640.2 3.52567e-06 600C5.21588e-06 559.8 6.88086e-06 520.2 8.57107e-06 480C1.02613e-05 439.8 1.19263e-05 400.2 1.36165e-05 360C1.53067e-05 319.8 1.69717e-05 280.2 1.86619e-05 240C2.03521e-05 199.8 2.20171e-05 160.2 2.37073e-05 120C2.53975e-05 79.8 2.70625e-05 40.2 2.79202e-05 19.8L2.87527e-05 -7.86178e-06L126.037 -2.13417e-06Z"
                    stroke="black"
                  />
                </g>
                <defs>
                  <filter id="filter0_d_1590_1836" x="-10" y="-10" width="193" height="740" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1590_1836" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1590_1836" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="textCentral">
              <h1>Welcome</h1>
              <small>Single Dashboard Bussiness Support</small>
            </div>
            <ul className="textRight">
              <li id="textActive">Login</li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
            <ul></ul>
          </div>
          <div className="boxLeft">
            <h2>Stay Connected</h2>
            <p>Please login</p>
            <img src={logoMnet} className="mnetBulet" alt="logo-mnet-bulet"></img>
            <form>
              <input type="text" placeholder="      Username..."></input>
              <input type="password" placeholder="      Password..."></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
