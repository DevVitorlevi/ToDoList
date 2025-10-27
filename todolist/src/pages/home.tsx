import Container from "../components/container";
import TaskSummary from "../core-components/task-summary";

export default function Home() {
  return (
    <Container as="header">
      <TaskSummary />
    </Container>
  )
}