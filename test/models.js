const { expect } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const Brand = require('../models/Brand');
const Command = require('../models/Command');
const Model=require('../models/Model');
const Place = require('../models/Place');
const Reservation = require('../models/Reservation');
const Sneakers = require('../models/Sneakers');
const User = require('../models/User');

describe('User model',function(){
  it('should create a new user',(done) =>{
     const userMock=sinon.mock(new User({username: 'root',email:'test@gmail.com',password:'root'}));
     const user=UserMock.object;

     UserMock
      .expect('save')
      .yields(null);

      user.save((err) =>{
        UserMock.verify();
        UserMock.restore();
        expects(err).to.be.null;
        done();
    });
  });
  it('should return error if user is not created',(done) =>{
    const UserMock=sinon.mock(new User({username:'root', email:'test@gmail.com',password:'root'}));
    const user=UserMock.object;
    const expectedError{
      name: 'ValidationError'
    };

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err,result) => {
        userMock.verify();
        userMock.restore();
        expect(err.name).to.equal('ValidationError');
        expect(result).to.be.undefined;
        done();
    });
  });
  it('should not create a user with the unique email', (done) => {
    const UserMock = sinon.mock(User({ username:'root' email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;
    const expectedError = {
      name: 'MongoError',
      code: 11000
    };

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err, result) => {
      UserMock.verify();
      UserMock.restore();
      expect(err.name).to.equal('MongoError');
      expect(err.code).to.equal(11000);
      expect(result).to.be.undefined;
      done();
    });
  });
  it('should be invalid if name is empty', (done) => {
        var UserMock=sinon.mock(User{email:'test@gmail.com',password:'root'});
        const user=userMock.object;
        const expectedError={
          name:'MongoError',
          code:11000
        };
        user.save((err,result) => {
            UserMock.verify();
            userMock.restore();
            expect(err.name).to.equal('MongoError');
            expect(err.code).to.equal(11000);
            expect(result).to.be.undefined;
            done();
        });
    });
  it('should be invalid if mail is empty',(done) => {
        var UserMock=sinon.mock(User{username:'root',password:'root'});
        const user=userMock.object;
        const expectedError={
          name:'MongoError',
          code:11000
        };
        user.save((err,result) => {
            UserMock.verify();
            userMock.restore();
            expect(err.name).to.equal('MongoError');
            expect(err.code).to.equal(11000);
            expect(result).to.be.undefined;
            done();
        });
    });
  it('should be invalid if password is empty',(done) => {
        var UserMock=sinon.mock(User{username: 'root',email:'test@gmail.com'});
        const user=userMock.object;
        const expectedError={
          name:'MongoError',
          code:11000
        };
        user.save((err,result) => {
            UserMock.verify();
            userMock.restore();
            expect(err.name).to.equal('MongoError');
            expect(err.code).to.equal(11000);
            expect(result).to.be.undefined;
            done();
        });
    });
 it('should find user by email', (done) => {
    const userMock = sinon.mock(User);
    const expectedUser = {
      _id: '5700a128bd97c1341d8fb365',
      username:'root',
      email: 'test@gmail.com'
    };

    userMock
      .expects('findOne')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedUser);

    User.findOne({ email: 'test@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(result.email).to.equal('test@gmail.com');
      expect(result.username).to.equal('root');
      done();
    });
  });
  it('should find user by username', function(done){
    const userMock=sinon.mock(User);
    const expectedUser = {
      _id: '5700a128bd97c1341d8fb365',
      username: 'root',
      email: 'test@gmail.com'
    };

    userMock
      .expects('findOne')
      .withArgs({username: 'root'})
      .yields(null,expectedUser);

    user.findOne({username: 'root'}, (err,result) => {
        userMock.verify();
        userMock.restore();
        expect(result.username).to.equal('root');
        expect(result.email).to.equal('test@gmail.com');
        done();
    });
  });
  it('should remove user by email', (done) => {
    const userMock = sinon.mock(User);
    const expectedResult = {
      nRemoved: 1
    };

    userMock
      .expects('remove')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedResult);

    User.remove({ email: 'test@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.be.null;
      expect(result.nRemoved).to.equal(1);
      done();
    });
  });
  it('should remove user by usermail', (done) => {
    const userMock = sinon.mock(User);
    const expectedResult = {
      nRemoved: 1
    };

    userMock
      .expects('remove')
      .withArgs({ username: 'root' })
      .yields(null, expectedResult);

    User.remove({ username: 'root' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.be.null;
      expect(result.nRemoved).to.equal(1);
      done();
    });
  });
});
describe('Brand model',function(){
  it('should create a new brand',(done) =>{
     const brandMock=sinon.mock(new Brand({brand: 'nike'}));
     const brand=BrandMock.object;

     BrandMock
      .expect('save')
      .yields(null);

      brand.save((err) =>{
        BrandMock.verify();
        BrandMock.restore();
        expects(err).to.be.null;
        done();
    });
  });
   it('should not create a new brand',(done) =>{
     const brandMock=sinon.mock(new Brand({brand: 'nike'}));
     const brand=BrandMock.object;

     BrandMock
      .expect('save')
      .yields(null);

      brand.save((err) =>{
        BrandMock.verify();
        BrandMock.restore();
        expects(err).to.be.null;
        done();
    });
  });
});
describe('Command model',function(){

});
    

  

  






 
  
  
