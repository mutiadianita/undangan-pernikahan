import './App.scss';
import {
  Banner,
  Footer,
  Header,
  Story,
  Prewedding,
  Wedding } from './layouts'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Story/>
      <Prewedding/>
      <Wedding/>
      <Footer/>
    </div>
  );
}

export default App;
