import *  as Yup from 'yup';
import { CategoryStatus, LEVELStatus } from '../service/interfac/skill/skill.interface';
import { ProjectStatus } from '../service/interfac/project/project.inteface';
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

const createDetailValidation = Yup.object().shape({
    name: Yup.string().required("Name must be provided").min(1).max(100),
    bio: Yup.string().required("Bio must be provided").min(1).max(500),
    yearsOfExperience: Yup.number().required("Years of experience must be provided").min(0),
    technologies: Yup.array().of(Yup.string()).required("Technologies must be provided").min(1),
    education: Yup.string().required("Education must be provided").min(1).max(200),
    phoneNumber: Yup.number().required("Phone number must be provided").positive().integer(),
    country: Yup.string().required("Country must be provided").min(1).max(100)
});

const updateMessageValidation = Yup.object().shape({
    name: Yup.string().required("Name must be provided").min(1).max(100),
    bio: Yup.string().required("Bio must be provided").min(1).max(500),
    yearsOfExperience: Yup.number().required("Years of experience must be provided").min(0),
    technologies: Yup.array().of(Yup.string()).required("Technologies must be provided").min(1),
    education: Yup.string().required("Education must be provided").min(1).max(200),
    phoneNumber: Yup.number().required("Phone number must be provided").positive().integer(),
    country: Yup.string().required("Country must be provided").min(1).max(100)
});

const sendTestimonialMessageValidationToUs = Yup.object().shape({
    author: Yup.string().required("Author is required").trim().min(2),
    message: Yup.string().required("Message must be provided ").trim().required("Message is required"),
    authorPosition: Yup.string().required("Author position is required").trim().min(2),
    authorCompany: Yup.string().required("Author's company name must be provided").max(400, "Author position must not be more than 400 characters long."),
    authorCountry: Yup.string().required("Author country's name must be provided").max(400, "Author country must not be more than 400 characters long.")

});

const updateTestimonialValidation = Yup.object().shape({
    author: Yup.string().required("Author is required").trim().min(2),
    message: Yup.string().required("Message must be provided ").trim().required("Message is required"),
    authorPosition: Yup.string().required("Author position is required").trim().min(2),
    authorCompany: Yup.string().required("Author's company name must be provided").max(400, "Author position must not be more than 400 characters long."),
    authorCountry: Yup.string().required("Author country's name must be provided").max(400, "Author country must not be more than 400 characters long.")

});

const validateSkillSet = Yup.object().shape({
    name: Yup.array().of(Yup.string()).required("Name must br provided").min(1),
    level: Yup.string()
        .required("One value must be provided")
        .oneOf(Object.values(LEVELStatus)), // Validates against the enum values
    yearsOfExperience: Yup.number().required("Years of experience must be provided").min(0).integer(),
    category: Yup.mixed()
        .required("One value must be provided")
        .oneOf(Object.values(CategoryStatus)), // Validates against the enum values
});

const validateUpdatedSkillSet = Yup.object().shape({
    name: Yup.array().of(Yup.string()).required("Name must br provided").min(1),
    yearsOfExperience: Yup.number().required("Years of experience must be provided").min(0).integer(),
})

const ProjectSchema = Yup.object().shape({
    title: Yup.string().required("Title must be provided").min(1).max(200),
    description: Yup.string().required("Description must be provided").min(1).max(1000),
    technologies: Yup.array().of(Yup.string()).required("Technologies must be provided").min(1),
    url: Yup.string().url().required("URL must be provided"),
    repositoryUrl: Yup.string().url().required("Repository URL must be provided"),
    image: Yup.string().url().required(" Image URL must be provided"),
    status: Yup.mixed()
        .required("One value at least must be provided")
        .oneOf(Object.values(ProjectStatus)), // Validates against the enum values
    startDate: Yup.date().required("Start date must be provided"),
    endDate: Yup.date().required("End date must be provided").min(Yup.ref('startDate')),
});

const updateProjectSchema = Yup.object().shape({
    title: Yup.string().required("Title is required").min(1).max(200),
    description: Yup.string().required("Description is required").min(1).max(1000),
    technologies: Yup.array().of(Yup.string()).required("Technologies must be provided").min(1),
    url: Yup.string().url().required("URL must be provided"),
    repositoryUrl: Yup.string().url("URL must be provided").required(),
    image: Yup.string().url().required("Image URL must be provided"),
});

export {
    userRegistration,
    userLogin,
    updateMyRegistrationAccount,
    profileRegistration,
    updateMyProfileAccountRegistration,
    sendMessageValidation,
    editAndUpdateMessageValidation,
    createDetailValidation,
    updateMessageValidation,
    sendTestimonialMessageValidationToUs,
    updateTestimonialValidation,
    validateSkillSet,
    validateUpdatedSkillSet,
    ProjectSchema,
    updateProjectSchema
}