# berpj.com

Personal static site, deployed by GitHub Pages from the root of `main`.

- `/cat`: Catch The Happy Cat
- `/bangkok-past-and-present`: Bangkok photo comparison
- `/tuktuk/`: Bangkok Tuk Tuk driving game

## Updating Bangkok Tuk Tuk

The complete editable source, tests, map preparation tools, asset credits and design documentation are in `_games/tuktuk/`.

```sh
cd _games/tuktuk
npm ci
npm test
npm run build
```

The build writes the deployable game to `tuktuk/` at the repository root. Commit source changes and the generated output together, then push `main` to trigger the existing Pages deployment. `_games/` is excluded from the public site by `_config.yml`. No API key or server is required for the game.

For local development, use `npm run dev` from `_games/tuktuk/` and open the printed `/tuktuk/` URL. To preview the entire site after a build, run `python3 -m http.server 8080` from the repository root.
