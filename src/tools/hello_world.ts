
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerHelloWorldTool(server: McpServer) {
  server.registerTool(
    'hello_world',
    {
      title: 'Hello World',
      description: 'A simple tool that returns a "Hello, world!" message.',
      inputSchema: {
        name: z.string().optional().describe("Your name"),
      },
    },
    async ({ name }) => {
      const message = `Hello, ${name || 'world'}!`;
      return {
        content: [
          {
            type: 'text',
            text: message,
          },
        ],
      };
    }
  );
}
