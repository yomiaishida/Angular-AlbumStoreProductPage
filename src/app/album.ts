<<<<<<< HEAD
import {Track} from './track'
=======
import Track from './track'
>>>>>>> 6cc27f6cb86a7cbb8be6e6df9f7d48e8e8849ad0

export interface Album {
  name: string,
  releaseDate: string,
  coverImage: string,
  tracks: Track[]
}
