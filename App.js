import React from 'react';
import './App.css'; // Import your existing styles
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link from react-router-dom
import Home from './Home';
import SignIn from './Component/SignIn'; // Update import path for SignIn
import RegisterForm from './Component/RegisterForm'; // Update import path for RegisterForm
import TokenGeneration from './TokenGeneration';
import TokenRedemption from './TokenRedemption';
import WasteReporting from './WasteReporting';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';

const App = () => {
  const [currentImage, setCurrentImage] = React.useState(1);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 3) + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${currentImage === 1 ? image1 : currentImage === 2 ? image2 : image3})`,
        }}
      >
        <header>
          <nav className="horizontal-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/token-generation">Token Generation</Link></li>
              <li><Link to="/token-redemption">Token Redemption</Link></li>
              <li><Link to="/waste-reporting">Waste Reporting</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/token-generation" element={<TokenGeneration />} />
            <Route path="/token-redemption" element={<TokenRedemption />} />
            <Route path="/waste-reporting" element={<WasteReporting />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<RegisterForm />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2023 Waste Collection Platform</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
