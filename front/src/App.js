
import './App.css';
import Card from './components/Card';
import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';
import Searcher from './components/Searcher';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Searcher />
        <div className='categories'>
          <h3>Buscar por tipo de alojamiento</h3>
          <div className='categories_contianer'>
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
        </div>
        <div className="recomendations">
          <h3>Recomendaciones</h3>
          <div className='recomendations_container'>
          <Card/>
          <Card/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
