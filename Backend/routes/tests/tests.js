// Import the dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../index");

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Vehicles", () => {
  describe("GET /Vehicles", () => {
    // Test to get the vehicles list
    it("should get an array with the vehicle list", done => {
      chai
        .request(app)
        .get("/vehicles")
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("array")
          done()
        })
    })

    // Test to get a single vehicle
    it("should get the vehicle with id 21", done => {
      const id = 21
      chai
        .request(app)
        .get(`/vehicles/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done()
        })
    })

    // Test to get a 404 error
    it("should not get a single vehicle", done => {
      const id = 12
      chai
        .request(app)
        .get(`/vehicles/${id}`)
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })

    // Test to post a vehicle to the list
    it("should insert a Blue 2018 Kia Picanto into the database", done => {
      chai
        .request(app)
        .post(`/vehicles`)
        .send({
          color: "blue",
          model: "Picanto",
          year: 2018,
          brandId: 71,
          plate: "txs332"
        })
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })
})

describe("Brands", () => {
  describe("GET /brands", () => {
    // Test to get the brands list
    it("should get an array with the brands list", done => {
      chai
        .request(app)
        .get("/brands")
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("array")
          done()
        })
    })

    // Test to get a single brand
    it("should get the brand with id 11", done => {
      const id = 11
      chai
        .request(app)
        .get(`/brands/${id}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a("array")
          done()
        })
    })

    // Test to get a 404 error
    it("should not get a single brand", done => {
      const id = 12
      chai
        .request(app)
        .get(`/brands/${id}`)
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })
  })
})
