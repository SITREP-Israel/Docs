# Credits

## Design inspiration

The visual and structural approach of these docs — pipeline-as-graph, per-stage readouts, minimal chrome, mermaid diagrams treated as first-class content rather than decoration — is indebted to two projects:

- **[Snowglobe](https://snowglobe.so/)** — for its approach to presenting agent pipelines as legible, stage-by-stage flows rather than as opaque "LLM does the thing" black boxes. The discipline of naming each stage, showing what it reads and writes, and treating the graph as documentation is borrowed from there.

- **[LLM Council](https://github.com/karpathy/llm-council)** by **[Andrej Karpathy](https://karpathy.ai/)** — for the pattern of multi-LLM deliberation as a visible, inspectable process. The framing that adversarial or alternative perspectives should be run explicitly (rather than averaged away) shaped how SITREP ISR thinks about ingesting sources on all sides of a story.

Neither project is responsible for how these ideas are (mis-)applied here.

## Stack

- **Site:** [Next.js](https://nextjs.org/) on [Vercel](https://vercel.com/).
- **Agent:** Python + [LangGraph-style](https://github.com/langchain-ai/langgraph) node orchestration. LLMs via [OpenRouter](https://openrouter.ai/).
- **Search augmentation:** [Exa](https://exa.ai/) for domain-filtered discovery.
- **Newsletter:** [Buttondown](https://buttondown.com/).
- **Docs:** [MkDocs Material](https://squidfunk.github.io/mkdocs-material/), deployed to GitHub Pages.
- **Diagrams:** [Mermaid](https://mermaid.js.org/).

## The project

SITREP ISR is an independent project by **[Daniel Rosehill](https://danielrosehill.com)**, based in Jerusalem.

## Licence

Docs content: **CC BY 4.0** — use it, remix it, credit when you do.
Agent code and site code live in their respective repos under the licences declared there.
