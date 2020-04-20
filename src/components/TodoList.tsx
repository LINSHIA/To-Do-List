import React, { Component } from "react";
import { RootState } from "../store/index";
import { removeTaskFromList, addTaskToList } from "../store/todo/action";
import { Task } from "../store/todo/types";
import { Grid, Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";

export interface ITodoListProps {
  removeTaskFromList: typeof removeTaskFromList;
  addTaskToList: typeof addTaskToList;
  todoList: Task[];
}

export class TodoList extends Component<ITodoListProps> {
  generateID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    randomNumber += this.props.todoList.length;
    return randomNumber;
  };

  addTask = (event: any) => {
    event.preventDefault();

    const formField: HTMLInputElement | null = document.querySelector(
      '[name="todolist-input"]'
    );
    let formFieldValue: string = "";
    if (formField !== null) formFieldValue = formField.value;

    this.props.addTaskToList({
      id: this.generateID(),
      taskDetail: formFieldValue,
    });
  };

  deleteTask = (id: number) => {
    this.props.removeTaskFromList(id);
  };

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Form onSubmit={this.addTask}>
            <Form.Field>
              <label htmlFor="todolist-input">Enter New Todo-List</label>
              <Input
                name="todolist-input"
                type="text"
                placeholder="Enter to do task"
              />
            </Form.Field>
            <Input type="submit" value="Add" />
          </Form>
        </Grid.Row>
        <h3>ToDo List</h3>
        <Grid.Row>
          <ul>
            {this.props.todoList.map((element) => (
              <li>
                {element.taskDetail}
                <Button
                  size="mini"
                  color="green"
                  onClick={(event) => this.deleteTask(element.id)}
                >
                  X
                </Button>
              </li>
            ))}
          </ul>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    todoList: state.todo.taskList,
  };
};

export default connect(mapStateToProps, {
  addTaskToList,
  removeTaskFromList,
})(TodoList);
