import { COLORS, SPACING } from '../constants';

export const lightTheme = {
    colors: {
        ...COLORS,
        background: '#F2F2F7',
        surface: '#FFFFFF',
        text: '#000000',
        textSecondary: '#8E8E93',
        border: '#C6C6C8',
        card: '#FFFFFF',
        notification: COLORS.primary,
    },
    spacing: SPACING,
    borderRadius: {
        small: 4,
        medium: 8,
        large: 12,
        extraLarge: 16,
    },
    typography: {
        h1: {
            fontSize: 32,
            fontWeight: 'bold' as const,
            lineHeight: 40,
        },
        h2: {
            fontSize: 24,
            fontWeight: 'bold' as const,
            lineHeight: 32,
        },
        h3: {
            fontSize: 20,
            fontWeight: '600' as const,
            lineHeight: 28,
        },
        body: {
            fontSize: 16,
            fontWeight: 'normal' as const,
            lineHeight: 24,
        },
        caption: {
            fontSize: 14,
            fontWeight: 'normal' as const,
            lineHeight: 20,
        },
        small: {
            fontSize: 12,
            fontWeight: 'normal' as const,
            lineHeight: 16,
        },
    },
    shadows: {
        small: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
        },
        medium: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 4,
        },
        large: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.2,
            shadowRadius: 12,
            elevation: 8,
        },
    },
};

export const darkTheme = {
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
        background: '#000000',
        surface: '#1C1C1E',
        text: '#FFFFFF',
        textSecondary: '#8E8E93',
        border: '#38383A',
        card: '#2C2C2E',
    },
};

export type Theme = typeof lightTheme;
