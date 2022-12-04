const Form = () => {
  return (
    <form>
      <input type="text" className="todo-input" />
      <button type="submit" className="todo-button">
        <i className="fa-solid fa-plus"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" id="">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
