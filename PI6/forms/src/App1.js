import './App.css';
import BlurForm from './Forms/BlurForm';
import CustomHookForm from './Forms/CustomHookForm';
import KeyStrokeForm from './Forms/KeyStrokeForm';
import RefForm from './Forms/RefForm';
import SubmitForm from './Forms/SubmitForm';

function App() {
  return (
    <div className="App">
        <h3> Submit form Validation</h3>
      <SubmitForm />
      <h3>useRef Form Validation on submit </h3>
      <RefForm/>
      <h3>Validate on Blur </h3>
      <BlurForm />
      <h3>KeyStroke form validation</h3>
      <KeyStrokeForm />
      <h3>Custom Hook - useInput</h3>
      <CustomHookForm/>
    </div>
  );
}

export default App;
