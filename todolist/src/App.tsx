import TrashIcon from "./assets/icons/trash.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import Icon from "./components/icon";
import InputCheck from "./components/input-check";
import InputText from "./components/input-text";
import { Text } from "./components/text";
export default function App() {
  return (
    <>
      <Text as="div" variant={"body-md"} className="text-pink-base">
        <Icon svg={TrashIcon} className="w-6 h-6 fill-current" />
      </Text>

      <div>
        <Badge variant={"secundary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>
      <Button icon={TrashIcon} variant={"primary"} className="rounded-md">Nova Tarefa</Button>

      <div>
        <ButtonIcon variant={"terciary"} icon={TrashIcon}></ButtonIcon>
      </div>
      <InputText />
      <InputCheck />
    </>

  )
}