const request = require('supertest');
const con = require('../database/connection');
const app = require('../server');

const image = __dirname + '/tmp/image.jpg';
let token;

//Running few commands before start
beforeAll(async done => {
    //run the migration
    await con.migrate.latest()
    //run the seeds
    await con.seed.run()
    //get token
    await request(app).post('/login')
    .send({
        email:"test123@test.com",
        pass:"test"
    })
    .then(res=>{
        token = `Bearer ` + res.body.token;
        done();
    })
    .catch(err=>{
        console.log(err)
        done();
    });
});
//###########    TESTS    ###############
//########### USER ROUTES ###############
describe('\n###### ROUTES USER ######', () => {
    //LIST
    it('Test route user list', async done => {
    await request(app).get('/user')
    .set({ authorization: token })
    .then(res=>{
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeDefined();
        expect(res.type).toBe('application/json')
        done();
    })
    .catch(err=>{
        console.log(err)
        done();
        })
    })
    //CREATE
    it('Test route user create', async done => {
        await request(app).post('/user')
        .field({
            name:'Faustao',
            email: "email@email.com",
            pass:"domingao",
            age:18
        })
        .attach('image', image)
        .then(res=>{
            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('message')
            done();
        })
        .catch(err=>{
            console.log(err)
            done();
            })
        })
    //UPDATE
    it('Test route user update', async done =>{
        await request(app).put('/user/1')
        .set({
            Authorization: token
        })
        .field({
            name:'Faustao',
            email: "emaillll@email.com",
            pass:"domingao",
            age:18
        })
        .attach('image', image)
        .then(res=>{
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('message');
            done();
        })
        .catch(err=>{
            console.log(err)
            done();
        })
    })
})
//########### ANIMAL ROUTES ###############
describe('\n###### ROUTES ANIMAL ######', () => {
      //LIST
      it('Test route animal reponse list ', async done => {
        await request(app).get('/animal')
            .then(res=>{
                expect(res.statusCode).toBe(200);
                expect(res.body).toBeDefined();
                done();
            })
            .catch(err=>{
                console.log(err)
                done();
            });
    })
    //CREATE
    it('Test route animal create', async done => {
        //Checking if animal create is running without fail
        await request(app).post('/animal')
            .set({
                Authorization: token
            })
            .field({
                name:'Caramelo',
                race:'vira-lata',
                age:12,
                about:'The most pretty dog in the world',
                user_id:1
            })
            .attach('image', image)
            .attach('image', image)
            .attach('image', image)
            .attach('image', image)
            .then((res)=>{
                expect(res.statusCode).toBe(201);
                expect(res.body).toHaveProperty('message')
                done();
            })
            .catch(err=>{
                console.log(err)
                done();
            })
    })  
    //UPDATE
    it('Test route animal update', async done => {
        //Checking if animal create is running without fail
        await request(app).put('/animal/1')
            .set({
                Authorization: token
            })
            .field({
                name:"Caramelozinn",
                race:"vira-lata",
                age:19,
                about:'The most pretty dog in the world'
            })
            .attach('image', image)
            .attach('image', image)
            .attach('image', image)
            .attach('image', image)
            .then( res =>{
                expect(res.statusCode).toBe(200);
                expect(res.body).toHaveProperty('message')
                done();
            })
            .catch(err=>{
                console.log(err)
                done();
            })
    }) 
})