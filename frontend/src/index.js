import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './components/Authorized/HeaderNav/navbar.css';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
