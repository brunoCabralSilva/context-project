import './App.css';
import Form from './components/Form';
import Presentation from './components/Presentation';
import ProjProvider from './context/ProjProvider';

function App() {
  return (
    <ProjProvider>
      <div className="main">
        <Form />
        <Presentation />
      </div>
    </ProjProvider>
  );
}

export default App;
