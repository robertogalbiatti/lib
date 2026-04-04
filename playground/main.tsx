import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../src/components/atoms/Button';
import { Checkbox } from '../src/components/atoms/Checkbox';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <main>
      <h1>Testing Lib Button Component</h1>

      <div>
        <h2>Primary Button</h2>
        <Button onClick={() => alert('Primary button clicked!')}>
          Primary Button
        </Button>
      </div>

      <div>
        <h2>Secondary Button</h2>
        <Button 
          variant="secondary" 
          onClick={() => alert('Secondary button clicked!')}
        >
          Secondary Button
        </Button>
      </div>

      <div>
        <h2>Tertiary Button</h2>
        <Button 
          variant="tertiary" 
          onClick={() => alert('Tertiary button clicked!')}
        >
          Tertiary Button
        </Button>
      </div>

      <div>
        <h2>Disabled Button</h2>
        <Button 
          disabled={true} 
          onClick={() => alert('This should not appear!')}
        >
          Disabled Button
        </Button>
      </div>
      <div>
        <h2>Checkbox</h2>
        <Checkbox
          disabled={false} 
          onChange={() => setChecked(!checked)}
        >
          Checkbox
        </Checkbox>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
