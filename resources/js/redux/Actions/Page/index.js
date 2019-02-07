import Slugs from '../../Constraints/Page';

export default (newData = Slugs.updatePage.init) => {
    return (
        {
            type: Slugs.updatePage.slug,
            payload: newData
        }
    );
};
