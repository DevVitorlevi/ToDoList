import Container from "../components/container";
import TaskItem from "../core-components/task-item";
import TaskSummary from "../core-components/task-summary";

export default function Home() {
  return (
    <Container as="header" className="space-y-4">
      <TaskSummary />
      <TaskItem />
    </Container>
  )
}