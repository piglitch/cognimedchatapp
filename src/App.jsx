import { useState } from 'react';
import Search from './components/Search';
import SideNav from './components/SideNav';
import Chat from './components/Chat';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    if (isDarkMode) {
      document.body.style.backgroundColor = 'white'; 
      document.body.style.color = 'black';
      return console.log('darkmode toggled');
    }
    document.body.style.color = 'white';
    document.body.style.backgroundColor = '#222';
    console.log(console.log('LIGHT-MODE TOGGLED'));
  };

  const toggleMenuCollapse = () => {
    setIsMenuCollapsed(prevCollapsed => !prevCollapsed);
  };

  return (
    <div className={`flex w-full h-screen ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className={`menu w-1/3 ${isMenuCollapsed ? 'collapsed' : ''}`}>
        <SideNav toggleDarkMode={toggleDarkMode}/>
        <Search />
      </div>
        <button onClick={toggleMenuCollapse}>
          {isMenuCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </button>
      <Chat className="2/3" />
    </div>
  );
};

export default App;
