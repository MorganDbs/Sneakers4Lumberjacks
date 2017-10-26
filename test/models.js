const {
    expect
} = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const User = require('../models/User');
const Place = require('../models/Place');
const Brand = require('../models/Brand');
const Model = require('../models/Model');
const Sneakers = require('../models/Sneakers');
const Command = require('../models/Command');
const Reservation = require('../models/Reservation');



describe('User model', function() {
    it('should create a new user', (done) => {
        const userMock = sinon.mock(new User({
            username: 'root',
            email: 'test@gmail.com',
            password: 'root'
        }));
        const user = UserMock.object;

        UserMock
            .expect('save')
            .yields(null);

        user.save((err) => {
            UserMock.verify();
            UserMock.restore();
            expects(err).to.be.null;
            done();
        });
    });
    it('should return error if user is not created', (done) => {
        const UserMock = sinon.mock(new User({
            username: 'root',
            email: 'test@gmail.com',
            password: 'root'
        }));
        const user = UserMock.object;
        const expectedError {
            name: 'ValidationError'
        };

        UserMock
            .expects('save')
            .yields(expectedError);

        user.save((err, result) => {
            userMock.verify();
            userMock.restore();
            expect(err.name).to.equal('ValidationError');
            expect(result).to.be.undefined;
            done();
        });
    });
    it('should not create a user with the unique email', (done) => {
        const UserMock = sinon.mock(User({
            username: 'root'
            email: 'test@gmail.com',
            password: 'root'
        }));
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
        var UserMock = sinon.mock(User {
            email: 'test@gmail.com',
            password: 'root'
        });
        const user = userMock.object;
        const expectedError = {
            name: 'MongoError',
            code: 11000
        };
        user.save((err, result) => {
            UserMock.verify();
            userMock.restore();
            expect(err.name).to.equal('MongoError');
            expect(err.code).to.equal(11000);
            expect(result).to.be.undefined;
            done();
        });
    });
    it('should be invalid if mail is empty', (done) => {
        var UserMock = sinon.mock(User {
            username: 'root',
            password: 'root'
        });
        const user = userMock.object;
        const expectedError = {
            name: 'MongoError',
            code: 11000
        };
        user.save((err, result) => {
            UserMock.verify();
            userMock.restore();
            expect(err.name).to.equal('MongoError');
            expect(err.code).to.equal(11000);
            expect(result).to.be.undefined;
            done();
        });
    });
    it('should be invalid if password is empty', (done) => {
        var UserMock = sinon.mock(User {
            username: 'root',
            email: 'test@gmail.com'
        });
        const user = userMock.object;
        const expectedError = {
            name: 'MongoError',
            code: 11000
        };
        user.save((err, result) => {
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
            username: 'root',
            email: 'test@gmail.com'
        };

        userMock
            .expects('findOne')
            .withArgs({
                email: 'test@gmail.com'
            })
            .yields(null, expectedUser);

        User.findOne({
            email: 'test@gmail.com'
        }, (err, result) => {
            userMock.verify();
            userMock.restore();
            expect(result.email).to.equal('test@gmail.com');
            expect(result.username).to.equal('root');
            done();
        });
    });
    it('should find user by username', function(done) {
        const userMock = sinon.mock(User);
        const expectedUser = {
            _id: '5700a128bd97c1341d8fb365',
            username: 'root',
            email: 'test@gmail.com'
        };

        UserMock
            .expects('findOne')
            .withArgs({
                username: 'root'
            })
            .yields(null, expectedUser);

        user.findOne({
            username: 'root'
        }, (err, result) => {
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
            .withArgs({
                email: 'test@gmail.com'
            })
            .yields(null, expectedResult);

        User.remove({
            email: 'test@gmail.com'
        }, (err, result) => {
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

        UserMock
            .expects('remove')
            .withArgs({
                username: 'root'
            })
            .yields(null, expectedResult);

        User.remove({
            username: 'root'
        }, (err, result) => {
            userMock.verify();
            userMock.restore();
            expect(err).to.be.null;
            expect(result.nRemoved).to.equal(1);
            done();
        });
    });
});
describe('Brand model', function() {
    it('should create a new brand', (done) => {
        const brandMock = sinon.mock(new Brand({
            brand: 'nike'
        }));
        const brand = BrandMock.object;

        BrandMock
            .expect('save')
            .yields(null);

        brand.save((err) => {
            BrandMock.verify();
            BrandMock.restore();
            expects(err).to.be.null;
            done();
        });
    });
    it('should not create a new brand', (done) => {
        const brandMock = sinon.mock(new Brand({
            brand: 'nike'
        }));
        const brand = BrandMock.object;
        const expectedError {
            name: 'ValidationError'
        };

        BrandMock
            .expect('save')
            .yields(expectedError);

        brand.save((err) => {
            BrandMock.verify();
            BrandMock.restore();
            expect(err.name).to.equal('ValidationError');
            expect(result).to.be.undefined;
            done();
        });
    });
});
describe('Place model', function() {
    it('should create a Place', (done) => {
        const placeMock = sinon.mock(new Place({
            placeName: 'Himalaya',
            coordX: 83.93106230000001,
            coordY: 28.5983159
        }));
        const place = PlaceMock.object;

        PlaceMock
            .expects('save')
            .yields(null);

        place.save((err) => {
            PlaceMock.verify();
            PlaceMock.restore();
            expects(err).to.be.null;
            done();
        });
    });
    it('should not create a Place with same name', (done) => {
        const placeMock = sinon.mock(new Place({
            placeName: 'Himalaya',
            coordX: 83.91,
            coordY: 28.59859
        }));
        const place = PlaceMock.object;
        const expectedError {
            name: 'ValidationError'
        };

        PlaceMock
            .expects('save')
            .yields(expectedError);

        place.save((err) => {
            PlaceMock.verify();
            PlaceMock.restore();
            expect(err.name).to.equal('ValidationError');
            expect(result).to.be.undefined;
            done();
        });
    });
    it('should find Place by name', (done) => {
        const placerMock = sinon.mock(Place);
        const expectedPlace = {
            _id: 'a remplir',
            Placename: 'Himalaya',
            coordX: 83.93106230000001,
            coordY: 28.5983159
        };

        PlaceMock
            .expects('findOne')
            .withArgs({
                placeName: 'Himalaya'
            })
            .yields(null, expectedUser);

        Place.findOne({
            placeName: 'Himalaya'
        }, (err, result) => {
            expect(result.placeName).to.equal('Himalaya');
            done();
        });
    });
});
describe('Model model', function() {
    var place = Place.findOne({
        placeName: 'Himalaya'
    }, (err, result) => {
        expect(result.placeName).to.equal('himalaya');
        done();
    });

    it('should create a new model', (done) => {
        const modelMock = sinon.mock(new Model({
            placeId: place._id,
            modelName: 'Spiridon',
            price: 50,
            sex: "Unisex"
        }));
        const model = ModelMock.object;

        ModelMock
            .expect('save')
            .yields(null);

        model.save((err) => {
            ModelMock.verify();
            ModelMock.restore();
            expects(err).to.be.null;
            done();
        });
    });
    it('should not create a new model', (done) => {
        const modelMock = sinon.mock(new Model({
            placeId: place._id,
            modelName: 'Spiridon',
            price: 50,
            sex: "Unisex"
        }));
        const model = ModelMock.object;

        modelMock
            .expect('save')
            .yields(null);

        model.save((err) => {
            ModelMock.verify();
            ModelMock.restore();
            expects(err).to.be.null;
            done();
        });
    });

    it('should find model by modelname', function(done) {
        const modelMock = sinon.mock(Model);
        const expectedModel = {
            _id: 'a remplir',
            placeId: place._id,
            modelName: 'Spiridon',
            price: 50,
            sex: "Unisex"
        };

        modelMock
            .expects('findOne')
            .withArgs({
                modelName: 'Spiridon'
            })
            .yields(null, expectedModel);

        model.findOne({
            modelName: 'Spiridon'
        }, (err, result) => {
            ModelMock.verify();
            ModelMock.restore();
            expect(result.modelName).to.equal('Spiridon');
            done();
        });
    });
});
describe('Sneakers model', function() {
    it('should create a Sneakers', (done) => {
        var model = Model.findOne({ModelName: 'Spiridon'}, (err, result) => {
            expect(result.modelName).to.equal('Spiridon');
            done();
        });
        const sneakersMock = sinon.mock(new Sneakers({size: 4,modelId: model._id}));
        const sneakers = SneakersMock.object;

        SneakersMock
            .expects('save')
            .yields(null);

        sneakers.save((err) => {
            SneakersMock.verify();
            SneakersMock.restore();
            expects(err).to.be.null;
            done();
        });
    });

    it('should find sneakers by size and modelId', function(done) {
        var model = Model.findOne({ModelName: 'Spiridon'}, (err, result) => {
            expect(result.modelName).to.equal('Spiridon');
            done();
        });
        const sneakersMock = sinon.mock(Sneakers);
        const expectedSneakers = {
            _id: 'a remplir',
            modelId: model._id,
            size: 4
        };

        SneakersMock
            .expects('findOne')
            .withArgs({
                modelId: model._id,
                size: 4
            })
            .yields(null, expectedSneakers);

        user.findOne({ modelId: model._id , size:4}, (err, result) => {
            SneakersMock.verify();
            SneakersMock.restore();
            expect(result.modelId).to.equal(model._id);
            expect(result.size).to.equal(4);
            done();
        });
    });
});
describe('Command model',function(){
    it('should create a new Command', (done) => {
        var user=User.findOne({email: 'test@gmail.com'}, (err, result) => {
            expect(result.email).to.equal('test@gmail.com');
            done();
        });
        const commandMock = sinon.mock(new Command({ userId: user._id }));
        const command = CommandMock.object;

        CommandMock
            .expect('save')
            .yields(null);

        command.save((err) => {
            CommandMock.verify();
            CommandMock.restore();
            expects(err).to.be.null;
            done();
        });
     });
});
describe('Reservation model',function(){
it('should create a new Reservation', (done) => {
        var user=User.findOne({email: 'test@gmail.com'}, (err, result) => {
            expect(result.email).to.equal('test@gmail.com');
            done();
        });
        var command= Command.findOne({userId: user._id },(err, result) =>{
                expect(result.userId).to.equal(user._id);
                done();
        });
        var model= Model.findOne({modelName: 'Spiridon'},(err,result) =>{
                expect(result.modelName).to.equal('Spiridon');
                done();
        });
        var sneakers= Sneakers.findOne({size:4, modelId: model._id},(err,result) =>){
            expect(result.size).to.equal(4);
            expect(result.modelId).to.equal(model._id);
            done();
        }
        const reservationMock = sinon.mock(new Reservation({ commandId: command._id , sneakersId: sneakers._id }));
        const reservation = ReservationMock.object;

        ReservationMock
            .expect('save')
            .yields(null);

        reservation.save((err) => {
            ReservationMock.verify();
            ReservationMock.restore();
            expects(err).to.be.null;
            done();
        });
     });
});