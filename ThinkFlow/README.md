# ThinkFlow

ThinkFlow is a customized derivative of [LearnHarness](https://github.com/amosblomqvist/learnharness) by Amos Blomqvist, licensed under AGPL-3.0-only. ThinkFlow branding and customizations by Suryam Samal.

ThinkFlow is a learning assistant for adaptive teaching, practice, and a persistent knowledge graph. Its home screen offers editable Quick Start topics for AI and data science.

[Architecture](docs/THINKFLOW_ARCHITECTURE.md) · [Four-minute demo](docs/THINKFLOW_DEMO.md) · [Viva](docs/THINKFLOW_VIVA.md) · [Troubleshooting](docs/THINKFLOW_TROUBLESHOOTING.md) · [ThinkFlow changelog](CHANGELOG_THINKFLOW.md)

[Source repository](https://github.com/Sur-yam/ThinkFlow) · [Documentation index](docs/README.md)

## How it works

1. **Measure.** Before teaching, the agent finds where your understanding ends on each part the lesson depends on. Your answers, confidence, and thinking show it where to start.
2. **Plan.** It works out a dependency map from that starting point to your goal. You can see the plan, and the lesson adapts when your understanding turns out different.
3. **Teach.** Each step builds on something you already understand. You predict, get an explanation, and check your understanding. Confusions are repaired before anything is built on them. The aim is for the goal to feel obviously true, not merely familiar.
4. **Practice.** Separate sessions pose varied problems that require the right knowledge to come to mind without being named first. Problems and hints adapt to your reasoning.

**Think out loud.** The thinking fields let you explain your reasoning, uncertainties, and reactions in your own words. This is how the agent gets a detailed picture rather than just a record of right and wrong answers. You can type or use dictation.

**Bring your files.** In the desktop app, attach PDFs, photos, or any other file with the paperclip, or drag them in. The file stays where it is: the message carries its path, and the agent reads it from there.

The agent can also research questions in the background, create visual explanations, show your own images in the lesson and mark them up with arrows and labels, and build interactive demonstrations.

## Knowledge that carries forward

What you are taught accumulates as propositions and reasoning chains: individual claims and the premises that lead to them. The graph shows this structure, with links back to the source sessions. You can also import notes.

Future teaching sessions can read the graph instead of starting from scratch. Practice sessions can draw their material from it. It stores the ideas and their connections, not ratings of your ability.

![Upstream LearnHarness knowledge graph](docs/assets/knowledge-graph.png)

## Run locally

Use Node 26, as upstream CI does. From PowerShell:

```powershell
git clone https://github.com/Sur-yam/ThinkFlow.git
Set-Location ThinkFlow
npm.cmd ci
npm.cmd run plugins:setup
npm.cmd run dev
```

Open http://localhost:3000. Configure a model connection and the Strong, Cheap, and Vision slots in Settings before sending a lesson. See [ThinkFlow releases](https://github.com/Sur-yam/ThinkFlow/releases) for any published builds.

## Your keys, your data

- **Your keys and models.** No ThinkFlow subscription or markup. Billing depends on your provider, CLI configuration, subscription, or local setup. The live cost meter estimates known API costs, not subscription, CLI, or custom-endpoint charges.
- **Local storage.** Your chats, graph, settings, and API keys live on your machine. Learning records are plain files you can inspect.
- **External services.** Models run through your configured providers. Model requests send the context needed for the task; web research and dictation also contact external services. Local storage does not mean offline processing.
- **Inspectable behavior.** System prompts are visible and editable. The app is open source under the AGPL-3.0 license.

## Development and support

```bash
npm ci
npm run plugins:setup
npm run dev        # http://localhost:3000
npm test           # fixtures and fake providers
```

See the [documentation index](docs/README.md) for all guides, [development](docs/development.md) for setup and checks, [architecture](docs/architecture.md) for the runtime, [keyboard shortcuts](docs/keyboard.md), [themes](docs/themes.md) for the theme file format, and [desktop builds and releases](docs/desktop-release.md).

For trusted local plugins, start with the [authoring guide and capability map](docs/plugin-authoring.md). It links the question, practice-problem, submission, view-context and UI contracts. Use [`examples/plugins/`](examples/plugins/) for small runnable templates, [`plugins/`](plugins/) for feature source projects, and the [host architecture](docs/plugin-architecture.md) for internals.

Desktop builds use the existing LearnHarness profile directory. ThinkFlow has no default update feed.

Report ThinkFlow bugs in [ThinkFlow Issues](https://github.com/Sur-yam/ThinkFlow/issues).

Security vulnerabilities: report privately as described in [SECURITY.md](SECURITY.md), not in public issues.

## License and corresponding source

ThinkFlow and its upstream foundation are distributed under [AGPL-3.0-only](LICENSE). Preserve applicable copyright, modification and license notices when sharing this project. When conveying a binary, provide its complete Corresponding Source through a method permitted by section 6. If users interact remotely with a modified deployment, section 13 requires a prominent offer of its Corresponding Source at no charge. Link to the source for the exact version you deploy or distribute.
