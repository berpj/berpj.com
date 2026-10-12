# berpj.com

Personal static site, deployed by GitHub Pages from the root of `main`.

- `/cat`: Catch The Happy Cat
- `/bangkok-past-and-present`: Bangkok photo comparison
- `/longtail/`: Longtail After Dark, Chao Phraya boat game

## Updating Longtail After Dark

Source, tests, geographic data preparation and asset credits are in `_games/longtail/`.

```sh
cd _games/longtail
npm ci
npm test
npm run build
```

The build writes to `longtail/` at the repository root. Commit source and generated output together and push `main` for GitHub Pages. Scores are stored locally in the browser. No paid services, backend or API keys are needed.

To preview the complete site, run `python3 -m http.server 8080` from the repository root. `_games/` is excluded from the published site by `_config.yml`.
