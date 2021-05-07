import Notification from "./NotificationService";

const storedataInlocalStorage = (data) => {
    const token = data.token;
    const id = data.user_data._id;
    const email = data.user_data.email;
    const role = data.user_data.role;

    localStorage.setItem("token", token);
    localStorage.setItem("id", id);
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
    return;
}


const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
        return true;
    }
    else {
        return false;
    }
}


const isAdmin = () => {
    if (localStorage.getItem("role") === "admin") {
        return true;
    }
    else {
        return false;
    }
}


const logout = () => {
    localStorage.clear()
    Notification.show({ status: true, message: "Successfully logged out.." });
}


export { storedataInlocalStorage, isLoggedIn, isAdmin, logout }