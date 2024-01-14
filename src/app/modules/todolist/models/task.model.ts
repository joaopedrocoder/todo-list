export interface Task {
  name: string
  descripion: string
  date?: Date
  labels?: string[]
  done: boolean
}