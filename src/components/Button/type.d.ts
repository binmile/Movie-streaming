type ButtonType = {
    text?: string,
    onClick: () =>void
    isFavorite?: boolean
    isIconButton?: boolean
}
type FavoriteButtonType = {
    isFavorite: boolean,
    onClick: () =>void
}