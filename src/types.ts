export interface Link {
  name: string
  href: string
  icon?: string
  current: boolean
}

export interface Stat {
  score?: number
  distinguishing_feature?: string
}
