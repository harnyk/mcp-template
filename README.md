# MCP Server Template

This project is a template for creating MCP (Model Context Protocol) servers. It provides a basic "Hello, world!" example of a tool and a prompt to help you get started.

## Features

*   **`hello_world` tool**: A simple tool that returns a "Hello, world!" message.
*   **`HelloWorld` prompt**: A simple prompt that uses the `hello_world` tool.

## Technologies Used

*   **TypeScript**: For type-safe and maintainable code.
*   **Node.js**: The runtime environment.
*   **`@modelcontextprotocol/sdk`**: The SDK for building MCP servers.
*   **`zod`**: For robust schema validation of tool inputs.

## Getting Started

### Using degit

You can use `degit` to create a new project from this template:

```bash
npx degit harnyk/mcp-template your-project-name
```

### Prerequisites

*   Node.js and pnpm installed.

### Installation

1.  Clone this repository.
2.  Install the dependencies:

    ```bash
    pnpm install
    ```

### Usage

To start the MCP server, run:

```bash
pnpm start
```

This will start the server and make it available for MCP clients.

## Configuration

To configure your LLM agent to use this MCP server, you need to add a new entry to the `mcpServers` object in your agent's settings file.

For example, you can add one of the following configurations.

With `npx`:
```json
"example-npx": {
  "command": "npx",
  "args": ["github:harnyk/mcp-template"]
}
```

Alternatively, with `pnpm dlx`:
```json
"example-pnpm": {
  "command": "pnpm",
  "args": ["dlx", "github:harnyk/mcp-template#master", "mcp-server"]
}
```

This configuration will create a new MCP server that uses `npx` (or `pnpm dlx`) to run the `mcp-template` from the `harnyk` GitHub repository.

Here is an example of how the `mcpServers` object might look with the new configuration:

```json
"mcpServers": {
  "example-npx": {
    "command": "npx",
    "args": ["github:harnyk/mcp-template"]
  },
  "example-pnpm": {
    "command": "pnpm",
    "args": ["dlx", "github:harnyk/mcp-template#master", "mcp-server"]
  }
}
```

## Creating Your Own Tools and Prompts

### Tools

1.  Create a new file in the `src/tools` directory (e.g., `src/tools/my_tool.ts`).
2.  In the new file, create a function that registers your tool with the MCP server. See `src/tools/hello_world.ts` for an example.
3.  In `src/server.ts`, import your new tool and register it with the server.

### Prompts

1.  Create a new file in the `src/prompts` directory (e.g., `src/prompts/my_prompt.ts`).
2.  In the new file, create a function that registers your prompt with the MCP server. See `src/prompts/hello_world.ts` for an example.
3.  In `src/server.ts`, import your new prompt and register it with the server.