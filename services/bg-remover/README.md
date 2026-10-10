# Background Remover service (rembg)

> Status 2026-10-10: **legacy-optional dev service, not prod path.** Prod `/transparent-image` Auto mode is client-side WASM (`web/src/lib/process/ai.ts` → `@imgly/background-removal` 1.7.0). This FastAPI service is still runnable via `bun run dev` (`web/scripts/start-ai.mjs`) and kept as algorithm reference.

Flask-free FastAPI wrapper around `rembg` (default model `silueta` via `REMBG_MODEL`, u2net also supported) that produces true RGBA PNGs
with real per-pixel alpha.

## Install

- Python 3.10+ (tested with 3.14)
- The first run downloads the model (~170 MB for `u2net`; `silueta` is the current default) into `~/.u2net`.

```powershell
cd services\bg-remover
python -m pip install -r requirements.txt
```

## Run

```powershell
python app.py          # listens on http://127.0.0.1:8765
```

Or with uvicorn:

```powershell
uvicorn app:app --host 127.0.0.1 --port 8765
```

## API

`POST /transparent-image` (multipart/form-data)

| Field | Type | Default | Notes |
| --- | --- | --- | --- |
| image | file | — | jpg/png/webp/bmp, ≤ 25 MB, ≤ 20 MP (see `app/config.py`), max 8192px per side |
| mode | string | auto | `auto` / `color` / `manual` |
| alphaMatting | string | true | `true`/`false` |
| alphaMattingForegroundThreshold | int | 240 | 1–255 |
| alphaMattingBackgroundThreshold | int | 10 | 1–255 |
| alphaMattingErodeSize | int | 10 | 0–100 |
| trimTransparent | string | false | crop fully transparent borders |
| outputFormat | string | png | png only (transparency) |

Returns `image/png` (RGBA) on success; `{ "success": false, "error": ... }`
JSON with a 4xx/5xx status on failure.

`GET /health` → service status.

## Config

Environment variables:

- `MAX_IMAGE_SIZE_MB` (default 25)
- `MAX_IMAGE_PIXELS` (default 20000000)
- `MAX_IMAGE_WIDTH` / `MAX_IMAGE_HEIGHT` (default 8192)
- `REMBG_MODEL` (default `silueta`)
- `MAX_CONCURRENT_JOBS` (default 4), `RATE_LIMIT_REQUESTS`/`RATE_LIMIT_WINDOW_SECONDS` (30/60)

## Privacy

The service runs on your own machine. Images are accepted in memory, processed
locally, and never stored on disk or sent anywhere.