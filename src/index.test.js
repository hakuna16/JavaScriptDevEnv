import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('shoudld pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Our Index.html Test', () => {
  it('Should say Users', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users1');
      done();
      window.close();
    });
  });
});
