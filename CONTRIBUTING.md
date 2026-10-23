# Contributing to rgdevment.com

The sites are in development and change often. Typos and broken links are
welcome as pull requests; for anything larger, open an issue first so we can
agree on the shape before you spend time on it.

The app documentation is not edited here: it comes from each app's GitHub
wiki, as the [README](README.md#where-the-content-lives) explains.

## The CLA

Merging code requires signing the [Contributor License Agreement](CLA.md).
You keep the copyright on your work. A bot asks for the signature on your
first pull request; you sign once.

## Before a pull request

```sh
npm ci
npm run check
```

## Commits

One line, in the conventional format: `type(scope): what changes`, for
example `fix(tisty): the download button points at the latest release`.

## Conduct and security

Everyone here follows the [Code of Conduct](CODE_OF_CONDUCT.md). Security
problems go privately, as [SECURITY.md](SECURITY.md) explains.
