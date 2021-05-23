import { createEntityQuery, createEntityStore } from "@datorama/akita";
import { Observable } from "rxjs/dist/types";

export interface ThemeToggleState {
  light: boolean;
}

export function createInitialState(): ThemeToggleState {
  return { light: true };
}
export const themeToggleStore = createEntityStore<ThemeToggleState>(
  createInitialState(),
  { name: "ThemeToggleStore", resettable: true }
);

export const toggleThemeState = () =>
  themeToggleStore.update((old) => {
    return { light: !old };
  });

export const themeToggleQuery =
  createEntityQuery<ThemeToggleState>(themeToggleStore);

export const lightTheme$: Observable<boolean> = themeToggleQuery.select(
  (state) => state.light
);
