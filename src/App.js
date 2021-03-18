import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import { UserDataProvider } from './State'
import './App.css';

function App() {
  return (
    <UserDataProvider>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </UserDataProvider>
  );
}

export default App;
