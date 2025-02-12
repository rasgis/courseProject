import { removeComment } from './session';
import { ROLE } from '../constants';

export const createSession = (role_id) => {
    const session = {
        logout() {
            Object.keys(session).key.forEach((key) => {
                delete session[key];
            });
        },
    };

    switch (role_id) {
        case ROLE.ADMIN:
            session.removeComment = removeComment;
            break;
        case ROLE.MODERATOR:
            session.removeComment = removeComment;
            break;
        case ROLE.READER:
            break;
        default:
    }

    return session;
};
