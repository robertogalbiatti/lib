import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { LibButton } from '../src/components/atoms/lib-button';
import { LibCheckbox } from '../src/components/atoms/lib-checkbox';
import { LibChip } from '../src/components/atoms/lib-chip';
import { LibTextField } from '../src/components/atoms/lib-text-field';
import { LibTextArea } from '../src/components/atoms/lib-text-area';
import { LibRadioButton } from '../src/components/atoms/lib-radiobutton';
import { LibRadioGroup } from '../src/components/molecules/lib-radiogroup';
import { LibSelect } from '../src/components/atoms/lib-select';
import { LibLoadingSpinner } from '../src/components/atoms/lib-loading-spinner';

function App() {
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState('');
  const [payment, setPayment] = useState('pix');
  const [framework, setFramework] = useState('react');

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

      <div>
        <h2>Text Area</h2>
        <LibTextArea
          id="description"
          label=""
          onChange={(event) => setDescription(event.target.value)}
        ></LibTextArea>
        <h2>Text Area Disabled</h2>
        <LibTextArea id="description" label="" disabled></LibTextArea>
      </div>

      <div>
        <h2>Radio Button</h2>

        <LibRadioGroup
          name="payment"
          label="Forma de pagamento"
          value={payment}
          onValueChange={setPayment}
          orientation="vertical"
        >
          <LibRadioButton id="payment-pix" value="pix" label="PIX" />

          <LibRadioButton
            id="payment-credit"
            value="credit"
            label="Cartão de crédito"
          />

          <LibRadioButton id="payment-cash" value="cash" label="Dinheiro" />
          <LibRadioButton
            id="payment-coin"
            value="penny"
            label="Moeda"
            disabled
          />
        </LibRadioGroup>

        <LibRadioGroup
          name="framework"
          label="framework"
          value={framework}
          onValueChange={setFramework}
          orientation="horizontal"
        >
          <LibRadioButton id="react" value="react" label="React" />
          <LibRadioButton id="angular" value="angular" label="Angular" />
          <LibRadioButton id="vue" value="vue" label="Vue" />
        </LibRadioGroup>
      </div>

      <h2>Select</h2>
      <LibSelect
        id="cars"
        name="cars"
        label="Selecione um carro"
        clearable
        defaultValue=""
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
      </LibSelect>

      <h2>Loading Spinner</h2>
      <br></br>
      <LibLoadingSpinner size={0.7} label="Carregando dados" />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
