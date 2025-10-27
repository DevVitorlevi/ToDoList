import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./icon";
import { Text } from "./components/text";
import Badge from "./components/badge";
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
    </>
  )
}