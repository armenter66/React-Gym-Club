import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testemonials from './components/Testemonials/Testemonials';

import './App.css';
import JoinUs from './components/JoinUs/JoinUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testemonials/>
      <JoinUs/>
      <Footer/>
    </div>
  );
}

export default App;
