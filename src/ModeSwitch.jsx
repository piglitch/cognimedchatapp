import React, { useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ModeSwitch = ({ setDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    setDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleMode}>{isDarkMode ? <DarkModeIcon /> : <WbSunnyIcon />}</button>
    </div>
  );
};

export default ModeSwitch;
