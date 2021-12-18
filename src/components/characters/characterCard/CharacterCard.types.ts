export interface CharacterCardProps {
  id: number
  className?: string
  name: string
  profileImage: string
  status: string
  species: string
  origin: string
  callbackValue: any
  onClick?: (callbackValue: any) => any
  location: string
}
