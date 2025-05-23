import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../src/components/atoms/Button';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Button variant="primary" onClick={() => alert('Clicked')}>
      Hello from lib!
    </Button>
  </React.StrictMode>
);
