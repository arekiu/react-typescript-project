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

  const toggleDoneTask = (i: number): void => {
    const copyTasks: ITask[] = [...tasks];
    copyTasks[i].done = !copyTasks[i].done;
    setTasks(copyTasks);
  };

  const removeTask = (i: number): void => {
    const updatedTasks: ITask[] = [...tasks];
    updatedTasks.splice(i, 1);
    setTasks(updatedTasks);
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

          {tasks.map((task: ITask, i: number) => (
            <div key={i} className="card card-body mt-2">
              <h2 style={{ textDecoration: task.done ? "line-through" : "" }}>
                {task.name}
              </h2>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={() => toggleDoneTask(i)}
                >
                  {task.done ? "✓" : "✗"}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeTask(i)}
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
