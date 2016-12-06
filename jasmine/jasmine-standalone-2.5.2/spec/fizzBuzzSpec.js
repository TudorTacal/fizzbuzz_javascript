describe('fizzBuzz', function () {

  var fizzBuzz;

  describe('knows when a number is', function () {

    it('is divisible by 3', function () {
      fizzBuzz = new fizzBuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });

  });
});
