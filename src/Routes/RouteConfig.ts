import { RoutesType } from "./type";
import { HomeScreen, FavoriteScreen,TrendingScreen } from "../Screens";

export const RoutesConfig : RoutesType = {
    Home:{
        path: "/",
        Component: HomeScreen
    },
    Favorite : {
        path: "favorite",
        Component: FavoriteScreen
    },
    Trending : {
        path: "trending",
        Component: TrendingScreen
    }
} 
