const MOCK_DATA = {
  id: 1,
  name_animal: "dog",
  category: "Food",
};
const fetchMock = jest
  .spyOn(global, "fetch")
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve([MOCK_DATA]) })
  );

describe("withFetch", () => {
  test("works", async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/api/dog`);
    const result = await res.json();
    expect(fetchMock).toHaveBeenCalledWith(
      `${process.env.BACKEND_URL}/api/dog`
    );

    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(1);
  });
});
