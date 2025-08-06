import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Note, Category } from '../types';

// State interface
interface NotesState {
    notes: Note[];
    categories: Category[];
    loading: boolean;
    error: string | null;
}

// Action types
type NotesAction =
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_ERROR'; payload: string | null }
    | { type: 'SET_NOTES'; payload: Note[] }
    | { type: 'ADD_NOTE'; payload: Note }
    | { type: 'UPDATE_NOTE'; payload: Note }
    | { type: 'DELETE_NOTE'; payload: string }
    | { type: 'SET_CATEGORIES'; payload: Category[] }
    | { type: 'ADD_CATEGORY'; payload: Category }
    | { type: 'DELETE_CATEGORY'; payload: string };

// Initial state
const initialState: NotesState = {
    notes: [],
    categories: [],
    loading: false,
    error: null,
};

// Reducer
const notesReducer = (state: NotesState, action: NotesAction): NotesState => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'SET_NOTES':
            return { ...state, notes: action.payload };
        case 'ADD_NOTE':
            return { ...state, notes: [action.payload, ...state.notes] };
        case 'UPDATE_NOTE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload.id ? action.payload : note
                ),
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
            };
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload };
        case 'ADD_CATEGORY':
            return { ...state, categories: [...state.categories, action.payload] };
        case 'DELETE_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter(cat => cat.id !== action.payload),
            };
        default:
            return state;
    }
};

// Context
const NotesContext = createContext<{
    state: NotesState;
    dispatch: React.Dispatch<NotesAction>;
} | null>(null);

// Provider component
interface NotesProviderProps {
    children: ReactNode;
}

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(notesReducer, initialState);

    return (
        <NotesContext.Provider value={{ state, dispatch }}>
            {children}
        </NotesContext.Provider>
    );
};

// Custom hook
export const useNotes = () => {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error('useNotes must be used within a NotesProvider');
    }
    return context;
};
