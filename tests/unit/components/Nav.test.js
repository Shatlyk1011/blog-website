import Nav from "@/components/Nav.vue";
import { render, screen } from "@testing-library/vue";

describe("Nav", () => {
  test("display nav items", () => {
    render(Nav, {
      global: {
        stubs: {
          routerLink: true,
        },
      },
    });
    const allLists = screen.getAllByRole("listitem");

    const allListNames = allLists.map((i) => i.textContent);
    expect(allListNames).toEqual(["Поиск", "Все посты", "Обо мне"]);
  });
});
