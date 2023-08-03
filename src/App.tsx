import { useState } from "react";
import "./App.css";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (name: string) => {
    const newTasks: ITask = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  autoFocus
                />
                <div className="col text-center">
                  <button className="btn btn-success btn-block mt-2 ">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>

          {tasks.map((task: ITask, i: number) => {
            return <h1 key={i}>{task.name}</h1>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
