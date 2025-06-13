import *  as Yup from 'yup';
const userRegistration = Yup.object().shape({
    firstName: Yup.string().required("FirstName is required").trim().min(2),
    lasttName: Yup.string().required("FirstName is required").trim().min(2),
    email: Yup.string().email("Email address must be provided ").trim().required("Email is required"),
    password: Yup.string().required("Password must be provided").min(6, "Password must be at least 6 characters long.")
});

const userLogin = Yup.object().shape({
    email: Yup.string().email("Email address must be provided ").trim().required("Email is required"),
    password: Yup.string().required("Password must be provided").min(6, "Password must be at least 6 characters long.")
});

const updateMyRegistrationAccount = Yup.object().shape({
    firstName: Yup.string().required("FirstName is required").trim().min(2),
    lasttName: Yup.string().required("FirstName is required").trim().min(2),
    email: Yup.string().email("Email address must be provided ").trim().required("Email is required"),
    password: Yup.string().required("Password must be provided").min(6, "Password must be at least 6 characters long.")
});

const profileRegistration = Yup.object().shape({
    name: Yup.string().required("FirstName is required").trim().min(2),
    email: Yup.string().email("Email address must be provided ").trim().required("Email is required"),
    password: Yup.string().required("Password must be provided").min(6, "Password must be at least 6 characters long."),
    profilePicture: Yup.string().required("Profile picture is required").trim().nullable(),
    bio: Yup.string().required("Biography is required").trim().nullable(),
    location: Yup.string().required("Location is required").trim().nullable(),
    website: Yup.string().optional().trim().nullable(),
    socialLinks: Yup.object().shape({
        linkedin: Yup.string().url('Must be a valid URL.').nullable(),
        github: Yup.string().url('Must be a valid URL.').nullable(),
        twitter: Yup.string().url('Must be a valid URL.').nullable(),
        facebook: Yup.string().url('Must be a valid URL.').nullable(),
        instagram: Yup.string().url('Must be a valid URL.').nullable(),
        gitlab: Yup.string().url('Must be a valid URL.').nullable(),
    }).nullable(),
});

const updateMyProfileAccountRegistration = Yup.object().shape({
    name: Yup.string().required("FirstName is required").trim().min(2),
    email: Yup.string().email("Email address must be provided ").trim().required("Email is required"),
    password: Yup.string().required("Password must be provided").min(6, "Password must be at least 6 characters long."),
    profilePicture: Yup.string().required("Profile picture is required").trim().nullable(),
    bio: Yup.string().required("Biography is required").trim().nullable(),
    location: Yup.string().required("Location is required").trim().nullable(),
    website: Yup.string().optional().trim().nullable(),
    socialLinks: Yup.object().shape({
        linkedin: Yup.string().url('Must be a valid URL.').nullable(),
        github: Yup.string().url('Must be a valid URL.').nullable(),
        twitter: Yup.string().url('Must be a valid URL.').nullable(),
        facebook: Yup.string().url('Must be a valid URL.').nullable(),
        instagram: Yup.string().url('Must be a valid URL.').nullable(),
        gitlab: Yup.string().url('Must be a valid URL.').nullable(),
    }).nullable(),
});

const sendMessageValidation = Yup.object().shape({
    name: Yup.string().required("Name is required").trim().min(2),
    email: Yup.string().email("Email address must be provided ").trim().required("Email is required"),
    title: Yup.string().required("Title is required").trim().min(2),
    message: Yup.string().required("Message must be provided").max(400, "Password must not be more than 400 characters long.")
});

const editAndUpdateMessageValidation = Yup.object().shape({
    name: Yup.string().required("Name is required").trim().min(2),
    email: Yup.string().email("Email address must be provided ").trim().required("Email is required"),
    title: Yup.string().required("Title is required").trim().min(2),
    message: Yup.string().required("Message must be provided").max(400, "Password must not be more than 400 characters long.")
});


export {
    userRegistration,
    userLogin,
    updateMyRegistrationAccount,
    profileRegistration,
    updateMyProfileAccountRegistration,
    sendMessageValidation,
    editAndUpdateMessageValidation
}