import { v4 as id } from "uuid";
const initialData = [
  {
    id: id(),
    title: "Hello",
    description: "testing",
    isDone: false,
  },
  {
    id: id(),
    title: "Testing Todo",
    description: "Hey this is my test",
    isDone: false,
  },
];

export default initialData;
