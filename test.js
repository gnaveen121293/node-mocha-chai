var assert = require("chai").assert,
expect = require("chai").expect,
should = require("chai").should();
var supertest = require("supertest");
var server = supertest.agent("http://localhost:1337")


describe("Testing Contact list api",function(){
	// before("Before hook  ",function(){

	// 	console.log("this is before hook")
	// })
	// after("After hook  ",function(){

	// 	console.log("this is after hook")
	// })
	// beforeEach("this is Before Each",function(){
	// 	console.log("this is a before each hook")
	// })
	// afterEach("this is a after Each",function(){
	// 	console.log("this is my after each hook")
	// })
	it("Shoud get all contact",function(done){
		server.get("/getContacts")
		.expect(200)
		.expect('contact-type',/json/)
		.end(function(err,res){

			console.log(res.body);

			res.body.forEach(function(data){
				data.should.have.property("name")
				data.name.should.equal("mahesh")
			})
			done();
		})
		
		/*var foo = "uma";
		var tea={

			flavors : "sweet"
		};
		// assert.typeOf(foo,'string');
		// expect(foo).to.be.a('string');
		foo.should.be.a('string');
		foo.should.equal("uma")
		foo.should.have.lengthOf(3);
		tea.should.have.property('flavors')
*/
		
	})
	// it("this is my second test",function(){
	// 	console.log("this nis my second test case")
	// })
	// it("this is my second test",function(){
	// 	console.log("this nis my second test case")
	// })
});