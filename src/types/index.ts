// Type definitions for the note-taking app

export interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    category?: string;
    tags?: string[];
    isFavorite?: boolean;
}

export interface Category {
    id: string;
    name: string;
    color?: string;
    createdAt: Date;
}

export interface AppSettings {
    theme: 'light' | 'dark' | 'system';
    fontSize: 'small' | 'medium' | 'large';
    autoSave: boolean;
    defaultCategory?: string;
}

export interface SearchFilters {
    category?: string;
    tags?: string[];
    dateRange?: {
        start: Date;
        end: Date;
    };
    favorites?: boolean;
}
