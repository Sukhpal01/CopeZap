import { create } from 'zustand';

interface AppState {
     fullScreen: boolean;
     theme: string;
     toggleFullScreen: () => void;
     setTheme: (theme: string) => void;
}

const useStore = create<AppState>((set) => ({
     fullScreen: false,
     toggleFullScreen: () => set((state) => ({ fullScreen: !state.fullScreen })),
     theme: "vs-dark",
     setTheme: (theme: string) => set(() => ({ theme: theme })),
}));

export default useStore;