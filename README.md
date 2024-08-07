# 🚀 Quick Start

### Prerequisites:
- Ensure the following are installed on your system:  
  Node.js, PNPM, Deno (optional, for Supabase Functions), Rust, and Android SDK/NDK with JDK 17.

### Steps:
1. Run `pnpm run init`  
   This works on Linux and will generate Android project files. Note that iOS initialization is not included; you need to set it up manually.
2. Populate the `.env` file with your own values.
3. Connect your device via `adb` or launch an emulator.
4. Execute `pnpm tauri android dev`.

### 🏎️ One-Line Quick Start

```bash
git clone https://github.com/pleahmacaka/supavelte-csr && cd supavelte-csr && rm -rf .git && pnpm run init && pnpm tauri android dev
```

## 👨‍💻 Development

### 🌐 Web:

```bash
pnpm install
pnpm dev
```

## 💡 Getting Started

### 🖥️ Desktop:

```bash
pnpm tauri dev
```

### 📱 Android:

#### Prerequisites:
- Open the project once in Android Studio to synchronize Gradle and other dependencies, or run `./gradlew --refresh-dependencies`.
- Ensure Android SDK/NDK with JDK 17 is installed.

#### Commands:
- For development: `pnpm tauri android dev`
- For building: `pnpm tauri android build`

### ✨ To Regenerate Android Project

If you have modified `tauri.conf.json`, you need to regenerate the Android project. Use the following command to do so:

```bash
pnpm tauri android init
```

### 📝 Signing APK

For detailed instructions on APK signing, refer to the [official documentation](https://v2.tauri.app/distribute/apk-sign/).
