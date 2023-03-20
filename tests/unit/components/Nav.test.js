import Nav from "@/components/Nav.vue";
import { render, screen } from "@testing-library/vue";

describe("Nav", () => {
  describe("nav list items", () => {
    test("display nav items", () => {
      render(Nav);
      const allLists = screen.getAllByRole("listitem");

      const allListNames = allLists.map((i) => i.textContent);
      console.log(allListNames);
      expect(allListNames).toEqual(["Поиск", "Все посты", "Обо мне"]);
    });
  });
});
