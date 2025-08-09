#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { registerHelloWorldTool } from './tools/hello_world.js';
import { registerHelloWorldPrompt } from './prompts/hello_world.js';

const server = new McpServer({
    name: 'hello-world-server',
    version: '0.1.0',
    title: 'Hello World Server',
});

registerHelloWorldTool(server);
registerHelloWorldPrompt(server);

const transport = new StdioServerTransport();
await server.connect(transport);
