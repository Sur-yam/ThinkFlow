# ThinkFlow troubleshooting

## Windows startup

- If `npm ci` reports `EPERM` for `esbuild.exe`, stop any other install, build, or test for this checkout. Run `npm.cmd ci` in one terminal and wait for it to succeed before running `npm.cmd run plugins:setup`.
- The authoring step emits TypeScript declarations and builds a ZIP. Follow its progress in the terminal. With root dependencies installed, `.
ode_modules\.bin
ext.cmd dev -H localhost` starts Next.js without regenerating plugin builds. Previously built and enabled plugins can still load.
- A cold start compiles each page on its first request. ThinkFlow uses local font fallbacks, so Next.js can compile pages without fetching Google Fonts. If a page still fails, check the terminal for the first error.

## Session history

New sessions use a short title derived from the opening prompt. The model receives the full text. You can rename sessions from the sidebar. `npm test` uses a temporary profile for test data.

## Deepgram dictation

A token grant 403 can occur when the Deepgram API key lacks Member permissions. Create a key with Member permissions in the Deepgram project and save it in **Settings → Providers → Dictation**. If you configured `DEEPGRAM_API_KEY` in the server environment or `.env.local`, update it there and restart ThinkFlow. See the [dictation guide](getting-started.md#dictation).
