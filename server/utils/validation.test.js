const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () =>{
  it('Should reject non-string values', () =>{
    var textData = 129;
    var response = isRealString(textData);

    expect(response).toBe(false);
  });
  it('Should reject string with only spaces', () =>{
    var textData = '     ';
    var response = isRealString(textData);

    expect(response).toBe(false);
  });
  it('Should allow string with non space chars', () =>{
    var textData = 'test';
    var response = isRealString(textData);

    expect(response).toBe(true);
  });

});
