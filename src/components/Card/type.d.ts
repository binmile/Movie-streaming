type CardType = {
    movieId: string,
    movie:MovieType,
    setSelected: (movieId:string) => void,
    setFavoriteMovie: (movieId:string) => void
}