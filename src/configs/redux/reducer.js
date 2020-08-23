const initialState = {
  isLoading: false,
  isButtonLoading: false,
  isSideBarOpen: false,
  isMenuOpen: false,
  families: {},
  submissions: {},
  isImage: false,
  fileUrl: '',
  progress: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'CHANGE_BUTTON_LOADING':
      return {
        ...state,
        isButtonLoading: action.value,
      };
    case 'CHANGE_SIDEBAR':
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };
    case 'CHANGE_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case 'SET_FAMILIES':
      return {
        ...state,
        families: action.value,
      };
    case 'SET_SUBMISSIONS':
      return {
        ...state,
        submissions: action.value,
      };
    case 'SET_FILEURL':
      return {
        ...state,
        fileUrl: action.value,
      };
    case 'CHANGE_ISIMAGE':
      return {
        ...state,
        isImage: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
