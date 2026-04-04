import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { LibButton } from '../src/components/atoms/lib-button';
import { LibCheckbox } from '../src/components/atoms/lib-checkox';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <main>
      <h1>Testing Lib Button Component</h1>

      <div>
        <h2>Primary Button</h2>
        <LibButton onClick={() => alert('Primary button clicked!')}>
          Primary Button
        </LibButton>
      </div>

      <div>
        <h2>Secondary Button</h2>
        <LibButton
          variant="secondary"
          onClick={() => alert('Secondary button clicked!')}
        >
          Secondary Button
        </LibButton>
      </div>

      <div>
        <h2>Tertiary Button</h2>
        <LibButton
          variant="tertiary"
          onClick={() => alert('Tertiary button clicked!')}
        >
          Tertiary Button
        </LibButton>
      </div>

      <div>
        <h2>Disabled Button</h2>
        <LibButton
          disabled={true}
          onClick={() => alert('This should not appear!')}
        >
          Disabled Button
        </LibButton>
      </div>
      <div>
        <h2>Checkbox</h2>
        <LibCheckbox disabled={false} onChange={() => setChecked(!checked)}>
          Checkbox
        </LibCheckbox>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
