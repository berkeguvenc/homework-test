import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList testleri", () => {
  let user;
  beforeEach(() => {
    user = userEvent.setup();
    render(<TodoList />);
  });

  it("liste boştur", () => {
    const items = screen.queryAllByRole("listitem");

    expect(items).toHaveLength(0);
  });

  it("item listesine ekleme", async () => {
    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /ekle/i });

    await user.type(input, "Test");
    await user.click(addButton);

    const itemList = screen.queryAllByRole("listitem");
    expect(itemList).toHaveLength(1);
  });

  it("Birden fazla item ekleme", async () => {
    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /ekle/i });

    await user.type(input, "Test");
    await user.click(addButton);

    await user.type(input, "Test 2");
    await user.click(addButton);

    const itemList = screen.queryAllByRole("listitem");
    expect(itemList).toHaveLength(2);
  });

  it("boş input ile test", async () => {
    const addButton = screen.getByRole("button", { name: /ekle/i });

    await user.click(addButton);

    const itemList = screen.queryAllByRole("listitem");
    expect(itemList).toHaveLength(0);
  });

  it("sil butonu test", async () => {
    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /ekle/i });

    await user.type(input, "Test");
    await user.click(addButton);

    const deleteButton = screen.getByRole("button", { name: /sil/i });
    await user.click(deleteButton);

    const itemList = screen.queryAllByRole("listitem");
    expect(itemList).toHaveLength(0);
  });

  it("tıklayınca tamamlandı", async () => {
    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /ekle/i });

    await user.type(input, "Test");
    await user.click(addButton);

    await user.type(input, "Test 2");
    await user.click(addButton);

    const todoItem = screen.getByText("Test");
    await user.click(todoItem);

    const completedItem = screen.getByText("Test");
    expect(completedItem).toHaveStyle("text-decoration: line-through;");

    const todoItem2 = screen.getByText("Test 2");
    expect(todoItem2).not.toHaveStyle("text-decoration: line-through");
  });
});
