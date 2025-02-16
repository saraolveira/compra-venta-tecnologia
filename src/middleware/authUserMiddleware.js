import { generateErrorUtils } from '../utils/helpersUtils.js';
import {
	checkExtractTokenUtils,
	verifyTokenPayloadUtils,
} from '../utils/tokenUtils.js';
import { SECRET } from '../../env.js';

export const authUserMiddleware = async (req, res, next) => {
	try {
		const { authorization } = req.headers;
		if (!authorization) {
			throw generateErrorUtils(
				401,
				'TOKEN_MISSING',
				'Falta el token en los headers'
			);
		}

		const token = checkExtractTokenUtils(authorization);
		const payload = verifyTokenPayloadUtils(token, SECRET);
		req.user = payload;
		next();
	} catch (error) {
		next(error);
	}
};
