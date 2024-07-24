# 🚀 Quick Start

1. 👨‍💻`pnpm run init`
    - Will be generating android project files. (iOS is not included, init your self)
2. 🛠 ️Fill out `.env` file with your own values
3. 🔗 Connect your device using `adb` or run an emulator
4. 📲 `pnpm tauri android dev`

### 🏎️ One-Line Quick Start

```bash
git clone https://github.com/pleahmacaka/supavelte-csr && cd supavelte-csr && rm -rf .git && pnpm run init && pnpm tauri android dev
```

## 👨‍💻 Development

### Web:

```bash
pnpm install
pnpm dev
```

## 💡 Getting Started

### 🖥️ Desktop:

`pnpm tauri dev`

### 📱 Android:

Prerequisites:

- Open once in Android Studio (syncs gradle, etc.) ⚙️ or run './gradlew --refresh-dependencies'.
- Install Android SDK / NDK w. JDK 17 (recommended) ✔️

Commands: 'pnpm tauri android dev' 🚀, 'pnpm tauri android build' 📦

#### ✨ To Re-gen Android Project ✨

After altering 'tauri.conf.json':
Command: `pnpm tauri android init` 🔄

### 📝 Signing APK

📚 Checkout [official documentation](https://v2.tauri.app/distribute/apk-sign/).
