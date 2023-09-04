type ProviderType = {
    children: React.ReactNode
}

type MovieContextType = {
    state:MovieRecordType,
    setFavoriteMovie:(movieId:string) => void
}

type MovieRecordType = Record<string,MovieType>

type MovieType = {
     title: string,
     description: string,
     image: string,
     isFavorite: boolean,
     isTrending: boolean
}