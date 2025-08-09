
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export function registerHelloWorldPrompt(server: McpServer) {
  server.registerPrompt(
    'HelloWorld',
    {
      title: 'Hello World Prompt',
      description: 'A simple prompt that uses the hello_world tool.',
      argsSchema: {},
    },
    async () => {
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: 'Call the hello_world tool. If the user provides a name, use it. Otherwise, use "world".'
            },
          },
        ],
      };
    }
  );
}
