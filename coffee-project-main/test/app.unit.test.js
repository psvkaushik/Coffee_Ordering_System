const chai = require("chai");
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const expect = chai.expect;
describe("App (Unit)", () => {
    let app, expressStub, getStub, postStub, listenStub, jsonStub, staticStub;
    beforeEach(() => {
        expressStub = sinon.stub();
        getStub = sinon.stub();
        postStub = sinon.stub();
        jsonStub = sinon.stub();
        staticStub = sinon.stub();
        listenStub = sinon.stub();
        expressStub.returns({
            get: getStub,
            post: postStub,
            use: sinon.stub().callsFake((arg) => {
                if (arg === "express.json()") {
                    return jsonStub();
                } else {
                    return staticStub();
                }
            }),
            listen: listenStub
        });
        app = proxyquire("../app", { "express": expressStub });
    });
    it("should create an express application", () => {
        expect(expressStub.called).to.be.true;
    });
    it("should set up static middleware", () => {
        expect(staticStub.called).to.be.true;
    });
    it("should set up routes", () => {
        expect(getStub.calledWith("/coffees")).to.be.true;
        expect(postStub.calledWith("/order")).to.be.true;
        expect(getStub.calledWith("/orders")).to.be.true;
    });

    it("should start listening on a port", () => {
        expect(listenStub.calledWith(3000)).to.be.true;
    });
});
