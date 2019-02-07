export default {
    updateUser: {
        slug: "user/Update",
        init: ()=>{
            return {
                id: '',
                name: '',
                role: '',
                email: '',
                avatar: '',
                authorized: false
            };
        }
    }
};
