// Utility functions

import { LIMITS } from '../constants';

// Date utilities
export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

export const formatDateTime = (date: Date): string => {
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

// String utilities
export const truncateText = (text: string, maxLength: number = 100): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

export const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Validation utilities
export const validateNoteTitle = (title: string): boolean => {
    return title.trim().length > 0 && title.length <= LIMITS.MAX_TITLE_LENGTH;
};

export const validateNoteContent = (content: string): boolean => {
    return content.length <= LIMITS.MAX_CONTENT_LENGTH;
};

export const validateTag = (tag: string): boolean => {
    return tag.trim().length > 0 && tag.length <= LIMITS.MAX_TAG_LENGTH;
};

// Search utilities
export const highlightSearchTerm = (text: string, searchTerm: string): string => {
    if (!searchTerm.trim()) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
};

// Array utilities
export const removeDuplicates = <T>(array: T[]): T[] => {
    return [...new Set(array)];
};
