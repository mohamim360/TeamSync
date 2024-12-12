let io;

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
			cors: {
				origin: "https://team-sync-client-kappa.vercel.app", 
				methods: ["GET", "POST"],
			},
		});
    return io;
  },
  getIO: () => {
    if (!io) {
      console.log("no socket");
    }
    return io;
  },
};
