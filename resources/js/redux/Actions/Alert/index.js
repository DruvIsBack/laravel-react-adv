import AlertConstraints from '../../Constraints/Alert';

export default (newData = AlertConstraints.init) => {
    return (
        {
            type: AlertConstraints.slug,
            payload: newData
        }
    );
};
