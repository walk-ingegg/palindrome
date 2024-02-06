let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {
  describe("#palindrome", function () {
    it("パリンドロームでない場合はfalseを返す", function () {
      let nonPalindrome = new Phrase("apple");
      assert.strictEqual(nonPalindrome.palindrome(), false);
    });

    it("単純なパリンドロームの場合はtrueを返す", function () {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("パリンドロームが大文字小文字混じりでもtrueを返す", function () {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("パリンドロームに句読点が含まれていてもtrueを返す", function () {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("空文字の場合はfalseを返す", function () {
      let emptyPhrase = new Phrase("");
      assert.strictEqual(emptyPhrase.palindrome(), false);
    });
  });

  describe("#letters", function () {
    it("文字列だけを返す", function () {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });
  });
});
