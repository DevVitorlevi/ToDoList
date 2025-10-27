import PlusIcon from "../assets/icons/more.svg?react";
import Button from "../components/button";
import TaskItem from "./task-item";

export default function TaskList() {

  return (
    <>
      <Button variant={"primary"} className="w-full rounded-2xl" icon={PlusIcon}>
        Nova Tarefa
      </Button>
      <TaskItem />
    </>
  )
}