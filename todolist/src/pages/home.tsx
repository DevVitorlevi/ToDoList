import Container from "../components/container";
import TaskList from "../core-components/task-list";
import TaskSummary from "../core-components/task-summary";

export default function Home() {
  return (
    <>
      <Container className="space-y-4">
        <Container as="header">
          <TaskSummary />
        </Container>
        <TaskList />
      </Container>
    </>
  )
}