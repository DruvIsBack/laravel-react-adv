let data = {
    app_url: "http://127.0.0.1:8000",
    asset_url: "/",
    generate_url: (target_url,relative_path) => {
        return target_url+relative_path;
    },
    apis: {}
};

data.apis = {
    account: {
        register: {
            url: data.app_url+"/api/account/registration",
            type: "POST"
        },
        login: {
            url: data.app_url+"/api/account/login",
            type: "POST"
        },
        logout: {
            url: data.app_url+"/api/logout",
            type: "POST"
        },
        auth_check: {           //Get UserData if have auth
          url: data.app_url+"/api/auth-check",
          type: "POST"
        },
        recovery: {
            url: data.app_url+"/api/account/recovery",
            type: "POST"
        },
        isValid: "",
        getUserData: ""
    }
};

export default data;
