type DrawerItemType = {
    logo : React.JSX,
    text : string,
    path : string,
    isLogo? : boolean
};

type DrawerContextType = {
    visible: boolean,
    setVisibility : (value: boolean) => void
}



