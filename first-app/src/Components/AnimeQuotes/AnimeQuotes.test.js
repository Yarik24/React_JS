import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../Store";
import AnimeQuotes from "./AnimeQuotes";

it("Creating a snapshot of a component AnimeQuotes", () => {
  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <AnimeQuotes />
      </BrowserRouter>
    </Provider>
  );
  expect(component).toMatchSnapshot();
});