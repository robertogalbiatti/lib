import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { LibButton } from '../src/components/atoms/lib-button';
import { LibCheckbox } from '../src/components/atoms/lib-checkbox';
import { LibChip } from '../src/components/atoms/lib-chip';
import { LibTextField } from '../src/components/atoms/lib-text-field';

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
        <LibCheckbox
          disabled={false}
          onChange={() => setChecked(!checked)}
          label="Click me!"
        ></LibCheckbox>
      </div>

      <div>
        <h2>Chip</h2>
        <LibChip label="LibChip" color="red"></LibChip>
      </div>

      <div>
        <h2>Text Field</h2>
        <LibTextField id="email" label="E-mail" type="email"></LibTextField>
        <h2>Text Field Disabled</h2>
        <LibTextField
          id="password"
          label="Senha"
          type="password"
          variant="secondary"
          disabled
        ></LibTextField>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
