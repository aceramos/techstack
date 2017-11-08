export const selectLibrary = (LibraryId) => {
    return {
        type: 'SELECT_LIBRARY',
        payload: LibraryId
    }
}