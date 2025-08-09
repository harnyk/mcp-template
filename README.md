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

## Creating Your Own Tools and Prompts

### Tools

1.  Create a new file in the `src/tools` directory (e.g., `src/tools/my_tool.ts`).
2.  In the new file, create a function that registers your tool with the MCP server. See `src/tools/hello_world.ts` for an example.
3.  In `src/server.ts`, import your new tool and register it with the server.

### Prompts

1.  Create a new file in the `src/prompts` directory (e.g., `src/prompts/my_prompt.ts`).
2.  In the new file, create a function that registers your prompt with the MCP server. See `src/prompts/hello_world.ts` for an example.
3.  In `src/server.ts`, import your new prompt and register it with the server.
