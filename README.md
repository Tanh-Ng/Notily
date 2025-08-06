# Notily - Note Taking App(Work in Progress)

A modern, feature-rich note-taking application built with React Native and Expo.

##  Features

- Create, edit, and delete notes
- Rich text formatting
- Categories and tags for organization
- Search functionality
- Offline support
- Dark/Light theme
- Cross-platform (iOS, Android, Web)

##  Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Build Tool**: EAS (Expo Application Services)
- **State Management**: React Context + useReducer
- **Storage**: Expo SQLite + AsyncStorage
- **Navigation**: React Navigation v6
- **UI Library**: React Native Paper (or custom components)

##  Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components
│   ├── notes/          # Note-specific components
│   ├── forms/          # Form components
│   └── ui/             # Basic UI elements
├── screens/            # Screen components
│   ├── notes/          # Note-related screens
│   ├── settings/       # Settings screens
│   └── search/         # Search screens
├── navigation/         # Navigation configuration
├── hooks/              # Custom React hooks
├── services/           # API calls, data services
├── storage/            # Local storage utilities
├── utils/              # Helper functions
├── constants/          # App constants
├── types/              # TypeScript type definitions
├── contexts/           # React contexts for state
└── styles/             # Theme and styling
```

##  Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- EAS CLI

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for development:
   ```bash
   eas build --profile development
   ```

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

##  Build & Deploy

### Development Build
```bash
eas build --profile development
```

### Preview Build
```bash
eas build --profile preview
```

### Production Build
```bash
eas build --profile production
```

### Submit to App Stores
```bash
eas submit --platform ios
eas submit --platform android
```

##  Design Principles

- **User-First**: Intuitive and clean interface
- **Performance**: Fast and responsive
- **Accessibility**: Support for screen readers and accessibility features
- **Offline-First**: Works without internet connection
- **Cross-Platform**: Consistent experience across all platforms

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
