// App constants

export const APP_NAME = 'Notily';
export const APP_VERSION = '1.0.0';

// Storage keys
export const STORAGE_KEYS = {
    NOTES: '@notily_notes',
    CATEGORIES: '@notily_categories',
    SETTINGS: '@notily_settings',
    LAST_BACKUP: '@notily_last_backup',
} as const;

// Default values
export const DEFAULT_SETTINGS = {
    theme: 'system' as const,
    fontSize: 'medium' as const,
    autoSave: true,
};

// UI Constants
export const COLORS = {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    background: '#F2F2F7',
    surface: '#FFFFFF',
    text: '#000000',
    textSecondary: '#8E8E93',
} as const;

// Dimensions
export const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
} as const;

// Note limits
export const LIMITS = {
    MAX_TITLE_LENGTH: 100,
    MAX_CONTENT_LENGTH: 50000,
    MAX_TAGS_PER_NOTE: 10,
    MAX_TAG_LENGTH: 30,
} as const;
