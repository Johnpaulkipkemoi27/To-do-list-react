
import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm';
import TaskContainer from './components/TaskContainer';
import TaskCount from './components/TaskCount';


const App = () => {
  return (
    <div div className="container">
      <Header/>
      <AddTaskForm/>
      <TaskContainer/>
      
      <TaskCount/>
      
    </div>
  );
};

export default App
