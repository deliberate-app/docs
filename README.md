# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator. Dependencies are managed with [bun](https://bun.sh/), and common tasks are available as [just](https://just.systems/) recipes (see the `justfile`, or run `just` to list them).

### Installation

```
$ just install
```

### Local Development

```
$ just start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ just build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. Use `just serve` to test the build locally.

### Deployment

```
$ just deploy
```

This command builds the website and pushes it to the `gh-pages` branch for GitHub Pages hosting (deploying as `deliberate` via SSH).
