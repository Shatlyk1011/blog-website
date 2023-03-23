import { render, screen } from "@testing-library/vue";
import { nextTick } from "vue";

import Hero from "@/components/Hero/Hero.vue";

describe("Hero", () => {
  test("renders image when page loads", () => {
    render(Hero);

    const image = screen.getByRole("img", {
      name: /hero image/i,
    });
    expect(image).toBeInTheDocument();
  });

  it("renders action sentence ", () => {
    render(Hero);

    const actionSentence = screen.getByRole("heading", {
      name: /Все о веб разработке/i,
    });

    expect(actionSentence).toBeInTheDocument();
  });

  it("checks whether setInterval was runned", () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock);

    render(Hero);
    expect(mock).toHaveBeenCalled();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("swaps action word after interval", async () => {
    vi.useFakeTimers();
    render(Hero);

    vi.advanceTimersToNextTimer();

    await nextTick();

    const actionSentence = screen.getByRole("heading", {
      name: /Все о дизайн разработке/i,
    });

    expect(actionSentence).toBeInTheDocument();

    vi.useRealTimers();
  });

  it("removes interval when component is unmounted", () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal("clearInterval", mock);

    const { unmount } = render(Hero);
    unmount();

    expect(mock).toHaveBeenCalled();

    vi.useRealTimers();
    vi.unstubAllGlobals();
  });
});
