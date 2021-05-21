import { createEntityQuery, createEntityStore } from "@datorama/akita";
import { Observable } from "rxjs/dist/types";

export interface TimerStyleState {
  default: boolean;
}

export function createInitialState(): TimerStyleState {
  return { default: true };
}
export const timerStyleStore = createEntityStore<TimerStyleState>(
  createInitialState(),
  { name: "TimerStyleStore", resettable: true }
);

export const timerStyleUpdate = (newState: boolean) =>
  timerStyleStore.update((_) => {
    return { default: newState };
  });

export const timerStyleQuery =
  createEntityQuery<TimerStyleState>(timerStyleStore);

export const defaultTimer$: Observable<boolean> = timerStyleQuery.select(
  (state) => state.default
);
