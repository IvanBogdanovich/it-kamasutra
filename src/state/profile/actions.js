// api
import { profileAPI } from './api';

// types
import types from './types';

export function addMessage(message) {
    return {
        type: types.ADD_MESSAGE_PROFILE,
        message: message
    }
}

export function setProfileUser(profile) {
    return {
        type: types.SET_PROFILE_USER,
        profile
    }
}

export function setStatus (status) {
    return {
        type: types.SET_STATUS,
        status
    }
}

export function setPhoto (photos) {
    return {
        type: types.SET_PHOTO,
        photos
    }
}

export function getProfileThunk (userId) {
    return async dispatch => {
        try {
            const response = await profileAPI.getProfile(userId);
            dispatch(setProfileUser(response));
        }
        catch(e) {
            throw new Error(e);
        }
    }
}

export function getUserStatusThunk(userId) {
    return async dispatch => {
        try {
            const response = await profileAPI.getUserStatus(userId);
            dispatch(setStatus(response));
        }
        catch(e) {
            throw new Error(e);
        }
    }
}

export function updateStatusThunk(status) {
    return async dispatch => {
        try {
            const response = await profileAPI.updateStatus(status);
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            }
        }
        catch(e) {
            throw new Error(e);
        }
    }
}

export function sendPhotoThunk(photo) {
    return async dispatch => {
        try {
            const response = await profileAPI.sendPhoto(photo);
            if (response.resultCode === 0) {
                dispatch(setPhoto(response.data.photos));
            }
        }
        catch(e) {
            throw new Error(e);
        }
    }
}
