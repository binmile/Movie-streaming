
type ScreenContextType = {
    selected : string,
    setSelected : (movieId:string)=>void,
}

interface ScreenProviderType extends ProviderType {
    defaultSelected: string
}