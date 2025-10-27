import PlusIcon from "../assets/icons/more.svg?react";
import Button from "../components/button";
import useTasks from "../hooks/useTasks";
import TaskItem from "./task-item";

export default function TaskList() {
  const { tasks } = useTasks()
  return (
    <>
      <Button variant={"primary"} className="w-full rounded-2xl" icon={PlusIcon}>
        Nova Tarefa
      </Button>
      <TaskItem />
    </>
  )
}