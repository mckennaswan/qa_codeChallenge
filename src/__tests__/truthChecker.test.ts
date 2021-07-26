describe("checking for truth", () => {
  test("are the littleNumbers < bigNumbers?", () => {
    let littleNumbers: Array<number> = [1, 2, 3];
    let bigNumbers: Array<number> = [7, 8, 9];

    for (let i = 0; i < littleNumbers.length && i < bigNumbers.length; i++) {
      expect(littleNumbers[i]).toBeLessThan(bigNumbers[i]);
    }
  });
  test("wordToCheck is a palindrome, case and everything", () => {
    let wordToCheck = "civic";
    expect(wordToCheck.split("civic").reverse().join("civic")).toBe(wordToCheck);
  });
  test("true", () => {
    let val = true;
    expect(val).toBeTruthy();
  });
  test("there is a sequence to this test", () => {
    let values: Array<any> = ["civic"];
    for (let i = 0; i < values.length; i++) {
      if (i == 0) expect(typeof values[i]).toBe("string");
      else if (i == 1) expect(typeof values[i]).toBe("boolean");
      else if (i == 2) expect(typeof values[i]).toBe("number");
      else if (i == 3) expect(values[i]).toBeNull();
      else expect(false).toBe(true);
    }
  });
});
