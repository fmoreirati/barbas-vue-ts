import {
    auth,
    getLoginGoogle,
    getLogoff,
    postLoginEmail,
} from "@/core/infra/auth.repository";
import { Person } from "../domain/Person";
import router from "@/router";

export const authService = {
    loginEmail,
    loginGoogle,
    getAuthUser,
    logoff,
};

async function loginEmail(email: string, password: string) {
    return await postLoginEmail(email, password)
        .then(res => {
            const user = res.user;
            const person = <Person>{
                id: user.uid,
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
            };
        })
        .catch(error => {
            console.error(">>> error:", error);
            throw new Error("Email ou senha inválidos!");
        });
}

async function loginGoogle() {
    return await getLoginGoogle()
        .then(res => {
            const user = res;
            return <Person>{
                id: user.uid,
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
            };
        })
        .catch(error => {
            console.error(">>> error:", error);
            throw new Error("Email ou senha inválidos!");
        });
}

function getAuthUser() {
    const user = auth.currentUser;
    //console.log(">>> User: ", user);
    if (!user) return;
    return <Person>{
        id: user.uid,
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
    };
}

function logoff() {
    //console.log('>>> LogOff', auth.currentUser);
    return getLogoff();
}
