import React, { useState } from 'react';

import { Sidebar, SidebarToggleButton, SidebarContext } from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import MainPage from './scenes/mainPage';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Funzione per aprire/chiudere la sidebar
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='relative'>
      {/* Pagina iniziale con titolo, breve descrizione e select */}
      <MainPage/> 
      <SidebarContext.Provider value={{isOpen, toggle}} >
        {/* Topbar con bottone per sidebar, titolo, searchbar con animazione apple */}
        <Topbar/> 
        {/* Sidebar con: admin, login... */} 
        <Sidebar/> 
        {/* Bottone per aprire e chiudere la sidebar */}
        <SidebarToggleButton/> 
      </SidebarContext.Provider>

    </div>
  )
}

export default App