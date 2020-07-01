function isNotArchived(archivedIds) {
    return function (story) {
    return archivedIds.indexOf(story.objectID) === -1;
    };
    }
    function getReadableStories({ storyState, archiveState }) {
    return storyState.stories.filter(isNotArchived(archiveState));
    }
    const getFetchError = ({ storyState }) =>
        storyState.error;
    export {
    getReadableStories,
    getFetchError

    };
    