let Shape = require('../shape');

describe('shape object',function(){
    let shape = new Shape({width:20,height:10}, 'Triangle');
    it('create shape object correctly',function(){
        shape.should.be.not.null;
    });
    it('have shape type attribute',function(){
        shape.should.have.property('shape');
    });
})
