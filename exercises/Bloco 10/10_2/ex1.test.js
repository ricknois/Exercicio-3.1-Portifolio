const { TestResult } = require("@jest/types");
const { exportAllDeclaration } = require("@babel/types");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test(`uppercase test`, (done) => {
  uppercase('word', (str) => {
    expect(str).toBe('WORD');
    done();
  });
});