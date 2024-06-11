module.exports = {
  id: "plugin",
  decorators: {
    oas3: {
      'replace-servers-url': ({ serverUrl }) => {
        console.log("Cleaning up unused tags...");
        // mark the ignored tags as already used so we don't remove them
        // const usedTags = new Set(serverUrl?.map((tag) => tag.toLowerCase()));
        return {
          Server: {
            leave(Server) {
              if (serverUrl) {
                Server.url = serverUrl;
              }

            }
          }
        };
      }
    },
  }
};