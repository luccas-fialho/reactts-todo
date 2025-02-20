import styles from "./App.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What will u do?</h2>
          <TaskForm btnText="Create Task" />
        </div>
        <div>
          <h2>Your list</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
