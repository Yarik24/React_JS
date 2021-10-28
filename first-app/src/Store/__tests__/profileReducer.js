import { setName } from "../../Action/ProfileActions";
import profileReducer from "../profileReducer";

it("Changes the username to the specified", () => {
  const expected = {
    name: "Yarik",
  };
  const received = profileReducer(null, setName("Yarik"));

  expect(received).toEqual(expected);
});