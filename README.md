# ThinkFlow

ThinkFlow is an AI learning assistant for guided lessons and practice. It checks what you already understand, builds a lesson around your goal, and saves concepts and reasoning in a knowledge graph you can revisit in later sessions.

## Run from source

Install [Git](https://git-scm.com/downloads) and [Node.js 26](https://nodejs.org/en/download), the Node version used by CI. Run these commands in order:

```sh
git clone https://github.com/Sur-yam/ThinkFlow.git
cd ThinkFlow
npm ci
npm run plugins:setup
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) after the development server reports it is ready. On Windows PowerShell, use `npm.cmd` in place of `npm` if PowerShell blocks `npm.ps1`.

`plugins:setup` prepares dependencies for the source plugins. The `dev` command builds the bundled plugins and authoring assets before starting Next.js. Allow those steps to finish on the first launch.

### Start a lesson

1. Open **Settings** at the bottom of the sidebar, choose **Providers**, and configure a supported model connection using your provider credentials or sign-in.
2. Set the **Strong**, **Cheap**, and **Vision** model slots. The app opens without credentials, and model-driven features require the configured connection.
3. Return to the home screen and choose a Quick Start topic or enter your own learning goal.

See the [Getting started guide](docs/getting-started.md) for provider setup, practice, and dictation.

### Desktop

Check [ThinkFlow Releases](https://github.com/Sur-yam/ThinkFlow/releases) for published installers. To open Electron from source, finish the dependency and plugin setup above, stop the browser development server, then run `npm run desktop:dev` from the repository root. After plugin preparation, Electron waits up to five minutes for Next.js to respond.

### Production build

From the repository root, stop the development server, then run:

```sh
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000). Browser mode uses a local server with no app login. Keep it bound to localhost for personal use.

## Development

Run these checks after installing dependencies and preparing the plugins:

```sh
npm run typecheck
npm test
npm run lint
```

The test suite uses temporary learning-data directories and does not require paid models or real provider sign-in.

- [Development and configuration](docs/development.md)
- [Troubleshooting](docs/THINKFLOW_TROUBLESHOOTING.md)
- [Architecture](docs/THINKFLOW_ARCHITECTURE.md)
- [Demo walkthrough](docs/THINKFLOW_DEMO.md)
- [Desktop packaging](docs/desktop-release.md)
- [Changelog](CHANGELOG_THINKFLOW.md)

By default, browser development stores learning records in `data/` and saved API keys in `auth.json`. Keep those files out of commits. Model requests send the context needed for the task to your configured provider.

## Contribution

OpenAI Codex contributed the Windows desktop launcher fixes, repository cleanup, portable test assertions, and this setup guide.

ThinkFlow is licensed under the [GNU Affero General Public License v3.0](LICENSE).
