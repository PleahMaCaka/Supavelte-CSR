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

Before the running in the android you need to check some prerequisites:

- Open the project in the Android Studio once over
- Android SDK / NDK

### Publish

*WIP*

```bash
pnpm tauri android dev # for development
pnpm tauri android build # for build, but if you need apk file, use the android studio
```

#### Re-generate Android Project

If you changed something in `tauri.conf.json` and require to re-generate the android project, you can run this command:

```bash
pnpm tauri android init
```

## Throbleshooting

###            

```
WARN Issues with peer dependencies found
.
├─┬ @typescript-eslint/eslint-plugin 7.7.1
│ ├── ✕ unmet peer eslint@^8.56.0: found 9.1.1
│ └─┬ @typescript-eslint/type-utils 7.7.1
│   ├── ✕ unmet peer eslint@^8.56.0: found 9.1.1
│   └─┬ @typescript-eslint/utils 7.7.1
│     └── ✕ unmet peer eslint@^8.56.0: found 9.1.1
└─┬ @typescript-eslint/parser 7.7.1
  └── ✕ unmet peer eslint@^8.56.0: found 9.1.1
```

If you're annoyed with this warning, you can enable auto install peer dependencies by running this command:

```bash
pnpm config set auto-install-peers true
```
