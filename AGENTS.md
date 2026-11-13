# Translation contributor instructions

- Maintain English source messages in `en-US/` only. Other locales are managed by the maintainer's
  translation service; do not move, rewrite or generate their files during bot rewrite work.
- Command-specific files belong under the command's internal category, even when its public slash
  command is independent. Keep `bot.json`, `commands.json`, `flags.json`, `help.json` and `ping.json`
  under `en-US/core/`. Bot references use `core/bot:`, `core/commands:`, `core/flags:`, `core/help:` and
  `core/ping:` respectively. Public `/ping` does not imply a root `ping.json` catalogue.
- Reserve root language files for broadly reusable messages that are not specific to a command or
  system. Shared errors belong in `errors.json`, including `COMMAND_UNAVAILABLE`,
  `INTERACTION_UNAVAILABLE` and `TEST_SERVER_ONLY`; do not recreate a `runtime.json` error catalogue.
- Keep Discord registration definitions under `discord-commands/`; message file moves do not imply
  moving registration definitions or changing public slash routes.
- Update bot references together with namespace moves. Preserve wording, interpolation placeholders
  and nested key structure unless a content change is explicitly requested. Validate JSON and check
  English fallback behavior with the companion bot revision.
- Create contextual branches such as `fix/command-translation-namespaces` from `filo/ts-rewrite-v2`
  for this rewrite. Target that integration branch, never `main`, and link the companion bot PR and
  general tracking issue `filobot/filo#1045`. Assign PRs to `ilxlodev` with relevant labels.
- Preserve signed commits. Do not merge or deploy without an explicit maintainer instruction.
  Bot code and matching English catalogues must be deployed together; changing this repository does
  not itself authorize a rollout.
