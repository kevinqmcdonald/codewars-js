// app/kata.js
class Primes {
  static * stream() {
    yield 2;
    let n = 3;
    while(true) {
      if(isPrime(n)) yield n;
      n += 2;
    }

    function isPrime(n) {
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
}

module.exports = Primes;
