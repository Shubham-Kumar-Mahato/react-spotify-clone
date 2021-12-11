export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item:null,
    // token: "BQCdnv11fC8JtaxcknGep1nHBmSkTyKi4WDsg7kaPp2lpU-bv7JO038N_p71sKmQofJDBNCZYCARZhcRnV-phXx50tgQhWigNEZeiPiqx59DYxzrvINeF-UywkyZzanMUv7xGpgubfe6L8sDgVPs7Ai90IAbjWRZ5Bq4",
};
const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
    };
    case "SET_TOKEN":
        return{
            ...state,
            token: action.token,
        };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
            case "SET_DISCOVER_WEEKLY":
                return{
                    ...state,
                    discover_weekly:action.discover_weekly,
                };
            default:
                return state;
    }
}
export default reducer;
