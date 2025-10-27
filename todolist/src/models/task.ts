export const TASKS_KEY = "tasks"

export enum TaskState {
  // eslint-disable-next-line no-unused-vars
  Creating = 'creating',
  // eslint-disable-next-line no-unused-vars
  Created = 'created'
}


export interface Task {
  id: string,
  title: string,
  concluded?: boolean,
  state?: TaskState
}