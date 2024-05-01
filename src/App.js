import './App.css';
import Calendar from './components/calendar/Calendar';
import TodoList from './components/todo/TodoList';

function App() {
  return (
    <div>
      <TodoList />
      <Calendar />
    </div>
  );
}

export default App;
