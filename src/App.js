import './App.css';
import linkedinLogo from './svg/linkedin-icon-2-logo-svgrepo-com.svg'
import xingLogo from './svg/xing-icon-logo-svgrepo-com.svg'

function App() {
  return (
    <div className="App">
      <div className="Logo-Container">
        <img src={linkedinLogo} alt="LinkedIn logo" />
        <img src={xingLogo} alt="Xing logo" />
      </div>
    </div>
  );
}

export default App;
