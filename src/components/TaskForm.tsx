import styles from "./TaskForm.module.css";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" placeholder="Task title" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Difficulty:</label>
        <input type="text" name="difficulty" placeholder="Task difficulty" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
