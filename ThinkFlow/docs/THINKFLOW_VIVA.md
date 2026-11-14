# ThinkFlow viva

1. **What did you implement?** Quick Start drafts in `components/home.tsx`, product branding and presentation material. The teaching engine is inherited from LearnHarness.
2. **Does choosing a topic immediately make a request?** It fills an editable Teach draft. The usual submit action starts the flow.
3. **Why gate submission before creating a chat?** The composer checks model slots and connection readiness to avoid orphan records from foreseeable failures.
4. **Which endpoint creates the record?** `POST /api/chats`. `POST /api/chat` admits input and starts or continues a turn.
5. **Can one turn contain several model requests?** Yes. A Pi agent can interleave model calls and native tool execution in a turn.
6. **Why separate admission and streaming?** The server owns the turn. The UI can reconnect through `GET /api/chats/:id/stream`.
7. **What stops concurrent main turns?** Per-chat liveness admission in `src/server/chat-handler.ts` rejects a competing turn with HTTP 409.
8. **What happens if the browser disconnects?** The view detaches. The run continues unless explicitly stopped or otherwise terminated.
9. **What survives a reload?** Saved ChatRecord state, including native messages and applicable plan and usage. Transient UI drafts and live events have separate lifetimes.
10. **Where is a ChatRecord stored?** The filesystem adapter in `src/store/chats.ts` stores it under `chats/` in the data root.
11. **Why two projections?** `src/core/native-messages.ts` prepares provider context and `src/core/view.ts` derives learner-facing messages and tools from the native record.
12. **How does probing hand off to teaching?** A successful `probe_done` result selects the teacher and queues a fresh-agent handoff.
13. **Why does a new lesson have no graph immediately?** Graph extraction is separate from the lesson and depends on eligible content, settings and model access.
14. **What does the graph encode?** Propositions and their supporting reasoning chains with provenance.
15. **How does Practice reuse Teach infrastructure?** A practice record selects the practitioner while sharing turn admission, persistence and recovery.
16. **Is the app usable without a hosted key?** Local pages and saved data are available. New inference needs a usable configured connection, which may be a compatible local model server.
17. **What does Electron own?** The desktop shell, private packaged server, desktop capabilities and packaged credential transport.
18. **What does the general event stream do?** `/api/events` signals clients to refetch canonical resources, while the per-chat stream carries turn events.
19. **Why preserve protocol and storage identifiers?** Existing clients, plugins and saved records use them as compatibility contracts.
20. **What does AGPL require for a distributed derivative?** Preserve notices and provide corresponding source under the license terms. A modified remotely used service must prominently offer its corresponding source.
