# ThinkFlow architecture

ThinkFlow customizes the LearnHarness interface and delegates teaching to the existing agent pipeline.

| Area | Responsibility |
| --- | --- |
| [app/](../app) | Next.js pages, layout metadata and HTTP routes |
| [components/](../components) | Composers, Quick Start, settings, graph and reactive session state |
| [src/server/](../src/server) | Request admission, model readiness, live turns and store composition |
| [src/agent/](../src/agent) | Model connections, Pi agents, prompts, tools and background workers |
| [src/core/](../src/core) | Shared input and record contracts, model/UI projections and graph algorithms |
| [src/store/](../src/store) | Local chat, graph, job, settings and auth persistence |
| [electron/](../electron) | Desktop window, private local server launch and desktop integrations |

## Trace a Teach request

1. [components/home.tsx](../components/home.tsx) puts a Quick Start prompt in the editable Teach composer. Sending passes through model-slot and connection checks. [components/start-session.ts](../components/start-session.ts) creates a record through [app/api/chats/route.ts](../app/api/chats/route.ts), then navigates to the saved chat with an opening prompt handoff.
2. [app/chat/[id]/page.tsx](../app/chat/%5Bid%5D/page.tsx) opens the session. [components/session-core.ts](../components/session-core.ts) submits the first input to [app/api/chat/route.ts](../app/api/chat/route.ts). [src/server/chat-handler.ts](../src/server/chat-handler.ts) checks input, readiness and per-chat liveness and coordinates saving accepted input and starting the run. Admission and streaming use separate HTTP requests.
3. [src/agent/teacher-agent.ts](../src/agent/teacher-agent.ts) assembles the appropriate Pi agent, including the prober for a probing phase. [src/agent/models.ts](../src/agent/models.ts) resolves the model and provider stream. [src/agent/tools.ts](../src/agent/tools.ts) supplies role- and settings-dependent tools, including questions and planning. One turn can span several model calls and tool results.
4. [src/store/chats.ts](../src/store/chats.ts) writes the durable ChatRecord under the local data root. It holds native messages and can hold settings, plan and usage. [src/core/native-messages.ts](../src/core/native-messages.ts) projects history for model context, and [src/core/view.ts](../src/core/view.ts) projects it for display.
5. [app/api/chats/[id]/stream/route.ts](../app/api/chats/%5Bid%5D/stream/route.ts) exposes replay and live events. [src/server/pi/ui-stream.ts](../src/server/pi/ui-stream.ts) carries agent events to the client, whose SessionModel projects live and saved state into [components/chat.tsx](../components/chat.tsx). Settlement reconciles the view with the saved record. Browser disconnect detaches the stream while the server owns the turn.

## Runtime dependencies

- Opening pages, viewing saved local records and drafting Quick Start prompts require no model key. Generating lessons, practice and graph extraction requires configured models and usable provider access. A compatible local endpoint can supply model inference when configured.
- Search and dictation use separate external services. Dictation needs Deepgram. Search needs a supported search service for keyword searches.
- Electron provides desktop file selection and private packaged transport. The local browser demo can use the core learning UI. [electron/main.cjs](../electron/main.cjs) launches the packaged standalone server, and [config.ts](../config.ts) defines the browser/server development data paths.
