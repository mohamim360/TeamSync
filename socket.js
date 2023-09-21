let io;

module.exports = {
	init: httpServer =>{
		io = require('socket.io')(httpServer, {
			cors: {
				origin: "*", 
				methods: ["GET", "POST"],
			},
		});
		return io;
	}
	,
	getIO: () =>{
		if(!io){
			console.log('no socket');
		}
		return io;
	}
}