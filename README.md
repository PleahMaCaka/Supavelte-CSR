# Quick Start

```
pnpm run init
pnpm tauri android dev
```


## Development

### for Web

```bash
pnpm install
pnpm dev
```

## Getting Started

### for Desktop

```bash
pnpm tauri dev
```

### for Android

Before the running in the android, you need to check some prerequisites:

- Open the project in the Android Studio once (for sync gradle, generate local.properties, etc.)
    - Or you can run `./gradlew --refresh-dependencies`
- Android SDK / NDK w. JDK 17 (recommended)

```bash
pnpm tauri android dev # for development
pnpm tauri android build # for build, when you need aab/apk
```

#### Re-generate Android Project

If you changed something in `tauri.conf.json` (like identifier) and require to re-generate the android project, you can
run this command:

```bash
pnpm tauri android init
```

### Signing App

Before the running in the android, you need to check some prerequisites:

- Open the project in the Android Studio once over (for sync gradle, etc.)
- Android SDK / NDK w. JDK 17 (recommended)

> [!IMPORTANT]  
> This repository's `src-tauri/gen/android` is not a generated as it is.
> Some build.gradle.kts is modified for the signing app.

If you want to build the app for product:

1. Generate JKS file to follow [this guide](https://developer.android.com/studio/publish/app-signing#sign-apk)
2. Open `src-tauri/gen/android/[your-app]/local.properties` (it generated when open the project in Android Studio)
3. Add the following lines:

```properties
storePassword=<password here>
keyPassword=<password here>
keyAlias=upload
storeFile=<Provide the relative path from .../gen/android/app>
```

[You can reference this guide (Useful but not serve at official docs now)](https://github.com/tauri-apps/tauri-docs/blob/8cdc0505ffb9e78be768a0216bd91980306206a5/docs/guides/distribution/sign-android.md)
