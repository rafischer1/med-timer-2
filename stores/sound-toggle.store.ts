import { createEntityQuery, createEntityStore } from "@datorama/akita";

export interface SoundToggleState {
  active: boolean;
}

export function createInitialState(): SoundToggleState {
  return { active: true };
}
export const soundToggleStore = createEntityStore<SoundToggleState>(
  createInitialState(),
  { name: "SoundToggleStore", resettable: true }
);

export const toggleSoundState = (newState: boolean) =>
  soundToggleStore.update((_) => {
    return { active: newState };
  });

export const soundToggleQuery =
  createEntityQuery<SoundToggleState>(soundToggleStore);

export const soundActive$ = soundToggleQuery.select((state) => state.active);
