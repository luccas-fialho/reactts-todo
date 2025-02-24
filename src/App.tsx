import styles from "./App.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

import { ITask } from "./interfaces/Task";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const toggleModal = (display: boolean): void => {
    const modal = document.querySelector("#modal");

    display ? modal!.classList.remove("hide") : modal!.classList.add("hide");
  };

  const editTask = (task: ITask): void => {
    toggleModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number): void => {
    const updatedTask: ITask = {
      id,
      title,
      difficulty,
    };

    const updatedItems = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTaskList(updatedItems);

    toggleModal(false);
  };

  return (
    <>
      <Modal
        children={
          <TaskForm
            btnText="Edit task"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What will u do?</h2>
          <TaskForm
            btnText="Create Task"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Your list</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
