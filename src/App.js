import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Search from './components/Search';
function App() {
  return (
  <>
  <Header />
  <Search />
  <Banner />
  <div className='max-w-screen-lg mx-auto flex items-center justify-center flex-col md:flex-row gap-4'>
    <div>
  <Card title="Maximise water treatment" />
  </div>
  <div className="hidden md:flex">
    <Card title="Unlock net zero buildings and factories" />
  </div>
  <div className="hidden md:flex">
    <Card title="Maximise water treatment" />
  </div>
  <div>
  <Card title="Unlock net zero buildings and factories" />
  </div>
</div>
  <Footer />
  </>
  );
}

export default App;
