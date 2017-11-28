var expect = require('expect');

var {generateMessage} = require('./message.js');

describe('generateMessage', ()=>{
  it('Should generate correct message object', () =>{
    var from = "Andrew";
    var text = "Hello m8s";

    var response = generateMessage(from, text);

    expect(response.from).toBe(from);
    expect(response.text).toBe(text);
    expect(response.createdAt).toBeA('number');
  });
});
