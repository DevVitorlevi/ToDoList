import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/icon";
import { Text } from "./components/text";

export default function App() {
  return (
    <>
      <Text as="div" variant={"body-md"} className="text-pink-base">
        <Icon svg={TrashIcon} className="w-6 h-6 fill-current" />
      </Text>
    </>
  )
}