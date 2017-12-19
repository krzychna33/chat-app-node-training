const expect = require('expect');

const {Users} = require('./users');

describe('Users', ()=>{

  var users;

  beforeEach(() =>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Kowal',
      room: 'TestRoom1'
    }, {
      id: '2',
      name: 'Piotrke',
      room: 'TestRoom2'
    }, {
      id: '3',
      name: 'xdd',
      room: 'TestRoom1'
    }]
  });

  it('Should add new user', () =>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Jen',
      room: 'Testeed'
    };
    var resUsers = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('Should remove a user', () =>{
    var userByRemove = users.removeUser('2');
    expect(users.users).toEqual([{
      id: '1',
      name: 'Kowal',
      room: 'TestRoom1'
    }, {
      id: '3',
      name: 'xdd',
      room: 'TestRoom1'
    }]);
    expect(userByRemove).toEqual({
      id: '2',
      name: 'Piotrke',
      room: 'TestRoom2'
    })
  });

  it('Should not remove a user', () =>{
    var userByRemove = users.removeUser('22');
    expect(users.users).toEqual([{
      id: '1',
      name: 'Kowal',
      room: 'TestRoom1'
    }, {
      id: '2',
      name: 'Piotrke',
      room: 'TestRoom2'
    }, {
      id: '3',
      name: 'xdd',
      room: 'TestRoom1'
    }]);
    expect(userByRemove).toNotExist();
  });

  it('Should find a user', () =>{
    var userByFind = users.getUser('3');

    expect(userByFind).toEqual({
      id: '3',
      name: 'xdd',
      room: 'TestRoom1'
    })
  });

  it('Should not find a user', () =>{
    var userByFind = users.getUser('35');

    expect(userByFind).toNotExist();
  });

  it('Should return users for testRoom1', ()=>{
    var userList = users.getUserList('TestRoom1');

    expect(userList).toEqual(['Kowal', 'xdd']);
  });

  it('Should return users for testRoom2', ()=>{
    var userList = users.getUserList('TestRoom2');

    expect(userList).toEqual(['Piotrke']);
  });
});
