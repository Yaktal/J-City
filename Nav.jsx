import React, { useState } from 'react'
import Logo from './Logo';
import Dropdown from './Dropdown';
import Page from './Pages/Page';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  // const [openDropdown, setOpendropdown] = useState(false)
  
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(prev => prev === dropdown ? null : dropdown);
  };
  
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const optionOne = [
    { value: '1', label: 'Current', path: '/' },
    { value: '2', label: 'Upcoming', path: '/'}
  ];
  
  const optionTwo = [
    { value: '1', label: 'Apartments', path: '/' },
    { value: '2', label: 'Hotels', path: '/' },
  ];
  const optionThree = [
    { value: '1', label: 'Shopping Malls', path: '/' },
    { value: '2', label: 'Markets', path: '/' },
  ];
  
  
  
  
  return (
    
    
    <div>
      <nav className='flex border-black border-2 w-screen justify-between' >
        
        <div className="left-nav "><Logo/></div>
        <div className="flex items-center">
          <div className="navApp border-black border- ">
            <header>
              <nav className='navContainer '>
                <Dropdown options={optionOne} 
                names='Now In Jos'
                isOpen={openDropdown === 'dropdown1'}
                onToggle={() => handleDropdownToggle('dropdown1')}
                label="Dropdown 1"
                Page={Page}/>
                
                <Dropdown options={optionTwo} 
                names='Accomodation'
                isOpen={openDropdown === 'dropdown2'}
                onToggle={() => handleDropdownToggle('dropdown2')}
                label="Dropdown 2"/>
                
                <NavLink className='flex items-center justify-items-center mx-2' to='/'>Restaurants</NavLink>
                
                <Dropdown options={optionThree} 
                names='Shopping'
                isOpen={openDropdown === 'dropdown3'}
                onToggle={() => handleDropdownToggle('dropdown3')}
                label="Dropdown 3"/>
                
                <NavLink className='flex items-center mx-2' to='/'>Attractions</NavLink>
                
              </nav>
            </header>
          </div>
          
        </div>
        <div className="right-nav">
          <div className="search">
            {/* <SearchInput initialData={initialData}/> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
