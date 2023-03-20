import { render, screen } from "@testing-library/vue";

import Hero from "@/components/Hero/Hero.vue";

describe("Hero", () => {
  test("renders image when page loads", () => {
    render(Hero);

    const image = screen.getByRole("img", {
      name: /hero image/i,
    });
    expect(image).toBeInTheDocument();
  });
});
