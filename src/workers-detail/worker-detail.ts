import { AddressDto, ContactDto, NameDto, ServiceDto } from '..'

export interface WorkerDetailDto {
  address: AddressDto
  contact: ContactDto
  id: string
  isFavorite: boolean
  isTop10: boolean
  name: NameDto
  pictureUrl: string
  service: Omit<ServiceDto, 'profile' | 'reviews'>
  rating: number
  ratingCount: number
}
