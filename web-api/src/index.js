const server = require("./infra/server");

const main = async () => {
    // Start Server
    await server();
};

main();