import Badge from "../components/badge";
import { Text } from "../components/text";

export default function TaskSummary() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Text variant={"body-sm-bold"}>Tarefas Criadas</Text>
        <Badge variant={"secundary"}>5</Badge>
      </div>
      <div className="flex gap-2 items-center">
        <Text variant={"body-sm-bold"}>Concluidas</Text>
        <Badge>2 de 5</Badge>
      </div>
    </div>
  )
}