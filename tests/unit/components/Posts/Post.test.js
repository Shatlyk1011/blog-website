import { render, screen } from "@testing-library/vue";
import Post from "@/components/Posts/Post.vue";

describe("Post", () => {
  describe("in posts > post", () => {
    it("accepts props", () => {
      render(Post, {
        props: {
          heading: "Design",
        },
      });

      const heading = screen.queryByText("Design");

      expect(heading).toBeInTheDocument();
    });
  });
});
