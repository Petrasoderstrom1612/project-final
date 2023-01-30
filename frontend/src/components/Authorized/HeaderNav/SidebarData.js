import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/wedding/:guestpassword',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Location',
    path: '/wedding/location/:guestpassword',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'RSVP',
    path: '/wedding/rsvp/:guestpassword',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
];