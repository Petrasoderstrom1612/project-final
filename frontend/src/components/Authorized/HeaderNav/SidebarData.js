import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/weddingform/guestpassword/:guestpassword',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Location',
    path: '/weddingform/guestpassword/:guestpassword/location',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Toastmasters',
    path: '/weddingform/guestpassword/:guestpassword/toastmasters',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'RSVP',
    path: '/weddingform/guestpassword/:guestpassword/rsvp',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
];