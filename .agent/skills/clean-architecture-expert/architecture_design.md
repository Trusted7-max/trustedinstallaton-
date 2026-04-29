# Clean Architecture Design: Agent Harness Platform

## Layer Overview (Inner → Outer)

```
┌─────────────────────────────────────────────────────────┐
│  Layer 4: Frameworks & Drivers                          │
│  FastAPI, Supabase, OpenAI SDK, python-docx, PyPDF2     │
├─────────────────────────────────────────────────────────┤
│  Layer 3: Interface Adapters                            │
│  Controllers, Presenters, Repository Implementations     │
├─────────────────────────────────────────────────────────┤
│  Layer 2: Use Cases (Application Business Rules)        │
│  AgentOrchestration, HarnessExecution, TodoManagement   │
├─────────────────────────────────────────────────────────┤
│  Layer 1: Entities (Enterprise Business Rules)          │
│  Thread, Message, Todo, WorkspaceFile, HarnessRun       │
└─────────────────────────────────────────────────────────┘
```

---

## Layer 1: Entities (Enterprise Business Rules)

Pure Python dataclasses. No framework dependencies. No database knowledge.

### Core Entities

```
entities/
├── thread.py          # Thread lifecycle, mode transitions
├── message.py         # Message, Role, ToolCall, ToolResult
├── todo.py            # Todo, TodoList, TodoStatus
├── workspace_file.py  # WorkspaceFile, FileSource, FileType
├── harness_run.py     # HarnessRun, PhaseResult, HarnessStatus
├── harness_phase.py   # PhaseDefinition, PhaseType
├── agent_session.py   # AgentSession, SessionStatus
└── contract.py        # ContractClassification, Clause, RiskAssessment
```

### Key Entity Rules

- **Thread**: Can only have one active harness run. Deep mode is per-message, not per-thread.
- **HarnessRun**: Phase transitions are strictly sequential. Cannot skip phases. Only one active run per thread.
- **TodoList**: Full replacement pattern. Position-ordered. Scoped to thread.
- **WorkspaceFile**: Unique (thread_id, file_path). Text stored inline, binary via storage reference.
- **Phase**: Dependencies point inward. Phase knows nothing about HTTP, SSE, or databases.

---

## Layer 2: Use Cases (Application Business Rules)

Orchestrate entities. Depend only on entities and interfaces (ports).

```
use_cases/
├── agent/
│   ├── execute_agent_loop.py       # AgentLoopExecutor
│   ├── execute_deep_mode.py        # DeepModeExecutor
│   └── delegate_sub_agent.py       # SubAgentDelegator
├── planning/
│   ├── create_todos.py             # CreateTodos
│   ├── update_todos.py             # UpdateTodos
│   └── read_todos.py               # ReadTodos
├── workspace/
│   ├── create_file.py              # CreateWorkspaceFile
│   ├── read_file.py                # ReadWorkspaceFile
│   ├── edit_file.py                # EditWorkspaceFile
│   ├── list_files.py               # ListWorkspaceFiles
│   └── upload_file.py              # UploadWorkspaceFile
├── harness/
│   ├── start_harness.py            # StartHarnessRun
│   ├── execute_phase.py            # ExecutePhase
│   ├── advance_phase.py            # AdvancePhase
│   ├── pause_for_human_input.py    # PauseForHumanInput
│   ├── resume_harness.py           # ResumeHarness
│   ├── cancel_harness.py           # CancelHarnessRun
│   └── execute_batch_agents.py     # ExecuteBatchAgents
├── contract_review/
│   ├── classify_contract.py        # ClassifyContract
│   ├── extract_clauses.py          # ExtractClauses
│   ├── analyze_clause_risk.py      # AnalyzeClauseRisk
│   ├── generate_redlines.py        # GenerateRedlines
│   └── generate_executive_summary.py # GenerateExecutiveSummary
├── gatekeeper/
│   ├── check_prerequisites.py      # CheckHarnessPrerequisites
│   └── trigger_harness.py          # TriggerHarnessFromGatekeeper
└── post_harness/
    └── generate_summary.py         # GeneratePostHarnessSummary
```

### Use Case Rules

- Each use case is a single class with an `execute()` method.
- Use cases receive input DTOs, return output DTOs.
- Use cases depend on repository interfaces (ports), not implementations.
- No HTTP, no database, no framework imports.

---

## Layer 3: Interface Adapters (Ports & Implementations)

### Ports (Interfaces)

```
ports/
├── repositories/
│   ├── thread_repository.py        # IThreadRepository
│   ├── message_repository.py       # IMessageRepository
│   ├── todo_repository.py          # ITodoRepository
│   ├── workspace_repository.py     # IWorkspaceRepository
│   ├── harness_repository.py       # IHarnessRepository
│   └── knowledge_repository.py     # IKnowledgeRepository
├── services/
│   ├── llm_service.py              # ILLMService
│   ├── sse_service.py              # ISSEService
│   ├── file_storage_service.py     # IFileStorageService
│   ├── text_extraction_service.py  # ITextExtractionService
│   ├── sandbox_service.py          # ISandboxService
│   └── docx_generation_service.py  # IDocxGenerationService
└── event_bus/
    └── event_bus.py                # IEventBus
```

### Adapters (Implementations)

```
adapters/
├── controllers/
│   ├── chat_controller.py          # HTTP → Use Cases
│   ├── deep_mode_controller.py     # Deep mode HTTP handler
│   ├── harness_controller.py       # Harness HTTP handler
│   ├── workspace_controller.py     # Workspace REST endpoints
│   └── sse_handler.py             # SSE event streaming
├── presenters/
│   ├── chat_presenter.py           # Use Case output → HTTP response
│   ├── sse_presenter.py            # Use Case output → SSE events
│   └── error_presenter.py          # Errors → standardized responses
├── repositories/
│   ├── supabase_thread_repository.py
│   ├── supabase_message_repository.py
│   ├── supabase_todo_repository.py
│   ├── supabase_workspace_repository.py
│   ├── supabase_harness_repository.py
│   ├── supabase_knowledge_repository.py
│   └── in_memory_*_repository.py  # In-memory implementations for testing
├── services/
│   ├── openai_llm_service.py
│   ├── supabase_file_storage_service.py
│   ├── python_docx_extraction_service.py
│   ├── pypdf2_extraction_service.py
│   ├── sandbox_execution_service.py
│   └── python_docx_generation_service.py
└── event_bus/
    └── asyncio_queue_event_bus.py
```

---

## Layer 4: Frameworks & Drivers

```
frameworks/
├── fastapi/
│   ├── app.py                      # Application factory
│   ├── routes/
│   │   ├── chat.py
│   │   ├── threads.py
│   │   ├── workspace.py
│   │   └── harness.py
│   └── middleware/
│       ├── auth.py
│       └── cors.py
├── supabase/
│   ├── client.py
│   └── migrations/
├── config/
│   └── settings.py                 # Environment configuration
└── di/
    └── container.py                # Dependency injection setup
```

---

## Dependency Flow

```
Frameworks → Adapters → Use Cases → Entities
     ↓          ↓          ↓
   (depends on interfaces defined in ports/)
```

**Inner layers define interfaces. Outer layers implement them.**

---

## Key Architectural Decisions

### 1. Workspace-Based Context Passing
Phases communicate via workspace files, not inline data dumps. The orchestrator passes file paths, not content. This keeps the main thread's token count at ~5k regardless of contract size.

### 2. Phase Type Dispatch
The harness engine dispatches by `PhaseType` enum. Each type has its own execution strategy. The engine knows nothing about LLM internals — it calls `ILLMService` through a port.

### 3. Structured Output Enforcement
`llm_single` phases use Pydantic models for output validation. The use case validates before advancing. Invalid output = phase error.

### 4. Resumability via Workspace
Harness state is recoverable from workspace files. If interrupted mid-batch, the engine detects partial output and resumes from where it left off.

### 5. Testability
All use cases can be tested with in-memory repository implementations. No database, no LLM API, no HTTP server required for unit tests.

### 6. Deep Mode Additive Design
Deep mode extends the existing agent loop. When OFF, current behavior is unchanged. No refactoring of existing tool-calling behavior.

---

## Data Flow Examples

### Deep Mode Message Flow
```
HTTP Request → DeepModeController → ExecuteDeepMode → AgentLoopExecutor
     ↓                                    ↓
  FastAPI                          ILLMService (port)
                                        ↓
                                 OpenAILLMService (adapter)
                                        ↓
                                   OpenAI SDK
```

### Harness Phase Execution Flow
```
HTTP Request → HarnessController → ExecutePhase → PhaseType dispatch
     ↓                                  ↓
  FastAPI                         IWorkspaceRepository (port)
                                        ↓
                              SupabaseWorkspaceRepository (adapter)
                                        ↓
                                   Supabase Client
```

### Contract Review Phase 6 (Batch Risk Analysis)
```
ExecuteBatchAgents → chunk items → asyncio.gather()
     ↓
  For each clause:
    AnalyzeClauseRisk → ILLMService → IWorkspaceRepository
     ↓
  Accumulate results → Write risk-analysis.md → IEventBus (SSE events)
```

---

## Directory Structure

```
law_agent_harness/
├── src/
│   ├── domain/                    # Layer 1: Entities
│   │   ├── entities/
│   │   │   ├── thread.py
│   │   │   ├── message.py
│   │   │   ├── todo.py
│   │   │   ├── workspace_file.py
│   │   │   ├── harness_run.py
│   │   │   ├── harness_phase.py
│   │   │   ├── agent_session.py
│   │   │   └── contract.py
│   │   └── exceptions.py
│   │
│   ├── application/               # Layer 2: Use Cases
│   │   ├── agent/
│   │   ├── planning/
│   │   ├── workspace/
│   │   ├── harness/
│   │   ├── contract_review/
│   │   ├── gatekeeper/
│   │   ├── post_harness/
│   │   └── dtos/                  # Input/Output DTOs
│   │
│   ├── ports/                     # Layer 3: Interfaces
│   │   ├── repositories/
│   │   ├── services/
│   │   └── event_bus/
│   │
│   ├── adapters/                  # Layer 3: Implementations
│   │   ├── controllers/
│   │   ├── presenters/
│   │   ├── repositories/
│   │   ├── services/
│   │   └── event_bus/
│   │
│   └── infrastructure/            # Layer 4: Frameworks
│       ├── fastapi/
│       ├── supabase/
│       ├── config/
│       └── di/
│
├── tests/
│   ├── unit/                      # Entity + Use Case tests (no DB)
│   ├── integration/               # Adapter tests (with DB)
│   └── e2e/                       # Full flow tests
│
├── migrations/                    # Supabase SQL migrations
├── prd.md
└── pyproject.toml
```
