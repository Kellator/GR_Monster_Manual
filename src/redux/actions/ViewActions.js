// to display different views of app including Advanced Search, Monster Creation, and Homeview
// Needs Search Display and Monster Card views included
export const HOMEVIEW = 'HOMEVIEW';
export const showHomeView = () => ({
    type: HOMEVIEW
});

export const SEARCHVIEW = 'SEARCHVIEW';
export const showSearchView = () => ({
    type: SEARCHVIEW
});

export const CREATEVIEW = 'CREATEVIEW';
export const showCreateView = () => ({
    type: CREATEVIEW
});

export const NEWCARDVIEW = 'NEWCARDVIEW';
export const showNewCardView = () => ({
    type: NEWCARDVIEW
});

// export const SHOWHOMEVIEW = 'SHOWHOMEVIEW';
// export const showHomeView = () => ({
//     type: SHOWHOMEVIEW
// });