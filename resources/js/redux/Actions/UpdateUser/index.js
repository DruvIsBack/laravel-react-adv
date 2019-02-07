import Slugs from '../../Constraints/User';

export default (newData = Slugs.updateUser.init) => {
    return (
        {
            type: Slugs.updateUser.slug,
            payload: newData
        }
    );
};
