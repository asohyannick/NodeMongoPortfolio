import express from 'express';
import { authToken } from '../../middleware/auth/auth.middle';
import { validate } from '../../middleware/globalValidator/globalValidator.middle';
import { createDetailValidation, updateMessageValidation } from '../../util/validators';
import { createDetail } from '../../service/implementators/aboutMe/createDetails/createDetail.impl';
import { fetchMessages } from '../../service/implementators/aboutMe/fetchDetails/fetchDetails.impl';
import { fetchMessage } from '../../service/implementators/aboutMe/fetchDetail/fetchDetail.impl';
import { updateMessage } from '../../service/implementators/aboutMe/editDetail/updateMessage.impl';
import { deleteMessage } from '../../service/implementators/aboutMe/deleteDetail/deleteMessage.impl';
const router = express.Router();
router.post('/create-message', authToken, validate(createDetailValidation), createDetail);
router.get('/fetch-messages', authToken, fetchMessages);
router.get('/fetch-message/:id', authToken, fetchMessage);
router.put('/update-message/:id', authToken, validate(updateMessageValidation), updateMessage);
router.delete('/delete-message/:id', authToken, deleteMessage);
export default router;
//# sourceMappingURL=aboutMe.controller.js.map