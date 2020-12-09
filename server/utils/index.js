const responsHandle = (code, msg, rsp)=>{
    return {
        returnCode: code||200,
        returnMsg: msg||'',
        rsp:rsp||{}
    }
}

module.exports = {
    responsHandle
}