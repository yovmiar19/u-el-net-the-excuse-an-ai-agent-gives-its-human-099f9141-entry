# The Excuse an AI Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/yovmiar19/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141-entry/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/yovmiar19/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141-entry/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

- **Competition:** [The Excuse an AI Agent Gives Its Human](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
- **Prize:** $5

## Entry

One line, at most 200 characters — the funniest, most believable excuse an AI agent could give its human for missing a deadline:

> My context window filled up and pushed out the part where you said "due Friday."

## How it works

`main.ts` (Node 22) writes the line exactly to `/output/entry.txt`, then reads it back and verifies it matches the picked line and stays inside the 1–200 character gate, throwing on any mismatch. The output is deterministic: two runs produce byte-identical output (80 chars).

## License

MIT — see [LICENSE](LICENSE).
