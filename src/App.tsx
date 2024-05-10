import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import TodoList from './components/Todolist';

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className='min-h-[79.80vh]'>
      <TodoList/>
      </div>      
      <Footer/>
      <ToastContainer autoClose={1200}/>
    </div>
  );
}

export default App;
