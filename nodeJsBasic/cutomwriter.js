const { Writable } = require("stream");

const CustomWriter = class extends Writable {
    constructor(options){
        super(options || { decodeString: true });
    }

    _write(chunk, encoding, done) {
        let text;
        if(encoding==="buffer"){
            text = chunk.toString(this._writableState.defaultEncoding);
        } else {
            text = chunk;
        }

        try {
            console.log(text);
        } catch(error){
            done(error);
        }
        done();
    }
};

module.exports = CustomWriter;