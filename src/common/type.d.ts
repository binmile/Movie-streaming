type MovieType = {
     title: string,
     description: string,
     image: string,
     isFavorite: boolean,
     isTrending: boolean
}
type MovieRecordType = Record<string,MovieType>

type ProviderType = {
    children: React.ReactNode
}


type MovieContextType = {
    state:MovieRecordType,
    setFavoriteMovie:(movieId:string) => void
}
