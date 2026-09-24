# interview-ui

Internal UI component library used by the interview client. Published to npm
as `@aleksandr.ilinykh.weasl/interview-ui`.

## Scripts

```bash
npm install
npm test
npm run build
```

## Releases

Versions follow semantic versioning. The version in `package.json` is the
source of truth. Bump it in the pull request together with a `CHANGELOG.md`
entry.

- **Prerelease.** Every push to a branch other than `main` publishes
  `<version>-<branch>.<run>` under the npm tag `next`. The exact version is
  printed in the workflow summary. Install it in a client with
  `npm install @aleksandr.ilinykh.weasl/interview-ui@<that version>`.
- **Release.** Every push to `main` publishes the version from `package.json`
  under the `latest` tag, tags the commit `v<version>` and creates a GitHub
  release. If that version is already on npm the workflow does nothing, so
  merging without a version bump is safe.

Both workflows need the repository secret `NPM_TOKEN` with publish rights for
the package.
