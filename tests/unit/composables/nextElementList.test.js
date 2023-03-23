import nextElementList from "@/composables/nextElementList";

describe("nextElementList", () => {
  describe("move one element", () => {
    it("moves one element on an array", () => {
      const list = ["a", "b", "c", "d"];
      const currentWord = "c";
      const result = nextElementList(list, currentWord);
      expect(result).toBe("d");
    });
  });

  describe("last element", () => {
    it("moves to the first list item", () => {
      const list = ["a", "b", "c", "d"];
      const currentWord = "d";
      const result = nextElementList(list, currentWord);
      expect(result).toBe("a");
    });
  });
});
