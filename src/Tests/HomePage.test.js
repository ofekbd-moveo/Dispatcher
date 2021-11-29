import { render, screen } from "@testing-library/react";
import moment from "moment";
import Card from "../Components/Card/Card";

describe("Card renders properties", () => {
  const sourceMock = { id: "id", name: "source" };
  const mockProps = {
    source: sourceMock,
    author: "author",
    title: "title",
    description: "description",
    url: "url",
    urlToImage: "urlToImage",
    publishedAt: "2021-11-16T02:15:38Z",
    content: "content",
  };

  render(<Card {...mockProps} />);

  test("renders title", async () => {
    const titleElement = screen.queryAllByText("title");
    expect(titleElement).toBeInTheDocument;
  });

  test("renders description", async () => {
    const descriptionElement = screen.queryAllByText("description");
    expect(descriptionElement).toBeInTheDocument;
  });

  test("renders source", async () => {
    const sourceElement = screen.queryAllByText("source");
    expect(sourceElement).toBeInTheDocument;
  });

  test("renders formatted date", async () => {
    const formatedDate = moment("2021-11-16T02:15:38Z").format("dddd MMM d, yyyy");
    const dateElement = screen.queryAllByText(formatedDate);
    expect(dateElement).toBeInTheDocument;
  });

  test('renders "NAVIGATE TO DISPATCH"  button text', async () => {
    const dateElement = screen.queryAllByText("NAVIGATE TO DISPATCH");
    expect(dateElement).toBeInTheDocument;
  });
});
