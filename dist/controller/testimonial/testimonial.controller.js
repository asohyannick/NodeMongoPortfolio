import express from 'express';
import { authToken } from '../../middleware/auth/auth.middle';
import { sendTestimonialToUs } from '../../service/implementators/testimonials/sendTestimonial/sendTestimonial.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.middle';
import { sendTestimonialMessageValidationToUs, updateTestimonialValidation } from '../../util/validators';
import { retrieveTestimonials } from '../../service/implementators/testimonials/fetchTestimonials/fetchTestimonials.impl';
import { retrieveTestimonial } from '../../service/implementators/testimonials/fetchTestimonial/retrieveTestimonial.impl';
import { updateTestimonial } from '../../service/implementators/testimonials/updateTestimonial/updateTestimonial.impl';
import { removeTestimonial } from '../../service/implementators/testimonials/deleteTestimonial/removeTestimonial.impl';
const router = express.Router();
router.post('/create-testimonial', authToken, validate(sendTestimonialMessageValidationToUs), sendTestimonialToUs);
router.get('/fetch-testimonials', authToken, retrieveTestimonials);
router.get('/fetch-testimonial/:id', authToken, retrieveTestimonial);
router.put('/update-testimonial/:id', authToken, validate(updateTestimonialValidation), updateTestimonial);
router.delete('/delete-testimonial/:id', authToken, removeTestimonial);
export default router;
//# sourceMappingURL=testimonial.controller.js.map