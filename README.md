## Development

### for Web

```bash
pnpm install
pnpm dev
```

### for Desktop

```bash
pnpm tauri dev
```

### for Android

Before the running in the android, you need to check some prerequisites:

- Open the project in the Android Studio once over (for sync gradle, etc.)
- Android SDK / NDK w. JDK 17 (recommended)

```bash
pnpm tauri android dev # for development
pnpm tauri android build # for build, but if you need apk file, use the android studio
```

#### Re-generate Android Project

If you changed something in `tauri.conf.json` (like identifier) and require to re-generate the android project, you can
run this command:

```bash
pnpm tauri android init
```

### Publish

*WIP*
