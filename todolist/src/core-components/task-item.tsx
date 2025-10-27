import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheck from "../components/input-check";
import { Text } from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react"
import XIcon from "../assets/icons/X.svg?react"
import CheckIcon from "../assets/icons/ckeck.svg?react"
import PencilIcon from "../assets/icons/edit.svg?react"
import { useState } from "react";
import InputText from "../components/input-text";

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false)

  function handleEditTask() {
    setIsEditing(true)
  }
  function handleExitEditTask() {
    setIsEditing(false)
  }
  return (
    <Card size={"md"} className="flex items-center gap-4">
      {!isEditing
        ?
        <>
          <InputCheck />
          <Text variant={"body-md-bold"} className="flex-1">Fazer Compras</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant={"terciary"} />
            <ButtonIcon icon={PencilIcon} variant={"terciary"} onClick={handleEditTask} />
          </div>
        </>
        :
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon icon={XIcon} variant={"secundary"} onClick={handleExitEditTask} />
            <ButtonIcon icon={CheckIcon} variant={"primary"} />
          </div>
        </>
      }
    </Card>
  )
}