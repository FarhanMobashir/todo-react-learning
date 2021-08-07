import { v4 as uuidv4 } from "uuid";

const initialData = [
  {
    id: uuidv4(),
    title: "Drink water",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptate!",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "Sleep for the whole day",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptate!",
    isDone: false,
  },
];

export default initialData;
