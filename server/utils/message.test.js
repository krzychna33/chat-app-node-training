var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

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

describe('generateLocationMessage', () =>{
  it('Should generate correct Location Message', () =>{
    var from = "Jen";
    var latitude = 1;
    var longitude = 1;
    var url = 'https://www.google.com/maps?q=1,1'

    var response = generateLocationMessage(from, latitude, longitude);

    expect(response.from).toBe(from);
    expect(response.url).toBe(url);
    expect(response.createdAt).toBeA('number');
  });
});
