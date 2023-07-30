import React from 'react';
import './Header.css';

import {images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';


const Header = () => {
  return (
    <div className='app_header_app app_wraper section_padding' id='home'>
        <div className='app_wrapper_info'>
            <SubHeading />
        </div>
        <div className='app_wrapper_img'>

        </div>
    </div>
  )
}

export default Header