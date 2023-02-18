import './App.css';
import linkedinLogo from './svg/linkedin-icon-2-logo-svgrepo-com.svg'
import xingLogo from './svg/xing-icon-logo-svgrepo-com.svg'

function App() {
  return (
    <div className="App">
      <div className="Logo-Container">
        <a href='https://www.linkedin.com/in/fabian-janetzki-954641229/'>
          <img src={linkedinLogo} alt="LinkedIn logo" />
        </a>
        <a href='https://www.xing.com/profile/Fabian_Janetzki/cv'>
          <img src={xingLogo} alt="Xing logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
