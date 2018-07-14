const expect = require('chai').expect;
const pipeline = require('../pipeline');

describe('pipeline test', function() {
  it('exists', function() {
    expect(pipeline()).to.be.ok;
  });

  it('handles string', function() {
    expect(pipeline('set 1 | add 1')).to.eql(2);
  });

  it('another attempt', function() {
    expect(pipeline('set 1 | mult 10 | mult 4 | add 2')).to.eql(42);
  });
});
