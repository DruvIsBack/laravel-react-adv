export default {
    getData: (key) => {
        localStorage.getItem(key);
    },
    setData: (key, data)=> {
        localStorage.setItem(key, data);
    }
};
