describe('fizzBuzz', function () {

  var game;

  describe('knows when a number is', function () {

    it('is divisible by 3', function () {
      game = new fizzBuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });

  });
});
