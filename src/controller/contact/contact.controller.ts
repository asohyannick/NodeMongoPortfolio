import express from 'express';
import { createMessage } from '../../service/implementators/contact/sendMessage/sendMessage.impl';
import { validate } from '../../middleware/globalValidator/globalValidator.middle';
import { editAndUpdateMessageValidation, sendMessageValidation } from '../../util/validators';
import { authToken } from '../../middleware/auth/auth.middle';
import { fetchMessages } from '../../service/implementators/contact/fetchMessages/fetchMessages.impl';
import { fetchMessage } from '../../service/implementators/contact/fetchMessage/fetchMessage.impl';
import { updateMessage } from '../../service/implementators/contact/editMessage/updateMessage.impl';
import { deleteMessage } from '../../service/implementators/contact/deleteMessage/removeMessage.impl';

const router = express.Router();
router.post('/send-message', authToken, validate(sendMessageValidation), createMessage);
router.get('/fetch-messages', authToken, fetchMessages);
router.get('/fetch-message/:id', authToken, fetchMessage);
router.put('/update-message/:id', authToken, validate(editAndUpdateMessageValidation), updateMessage);
router.delete('/delete-message/:id', authToken, deleteMessage);
export default router;