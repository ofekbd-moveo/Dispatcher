export const loadLocalStorageState = () => {
  try {
    const serializedState = localStorage.getItem("recentSearches");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return undefined;
  }
};

export const setLocalStorageState = (state: string[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("recentSearches", serializedState);
  } catch (error) {
    console.log(error);
  }
};
