import {
    auth,
    postLoginEmail,
    getloginGoogle,
    getLogoff,
} from "@/core/infra/auth.repository";
import { Person } from "../domain/Person";

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
            return <Person>{
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
    return await getloginGoogle().then(res => {
        const user = res;
        return <Person>{
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
        };
    });
}

function getAuthUser() {
    const user = auth.currentUser;
    return <Person>{
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
    };
}

function logoff() {
    return getLogoff();
}
