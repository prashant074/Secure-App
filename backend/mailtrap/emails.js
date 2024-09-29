// import {
// 	PASSWORD_RESET_REQUEST_TEMPLATE,
// 	PASSWORD_RESET_SUCCESS_TEMPLATE,
// 	VERIFICATION_EMAIL_TEMPLATE,
// } from "./emailTemplates.js";
// import { mailtrapClient, sender } from "./mailtrap.config.js";

// export const sendVerificationEmail = async (email, verificationToken) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Verify your email",
// 			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
// 			category: "Email Verification",
// 		});

// 		console.log("Email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending verification email`, error);

// 		throw new Error(`Error sending verification email: ${error}`);
// 	}
// };

// export const sendWelcomeEmail = async (email, name) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,  // Changed from recipients to recipient
// 			template_uuid: "cc1bdce6-9e96-44b7-a357-20d4c8eed734",
// 			template_variables: {
// 				"company_info_name": "Secure App",
// 				"user_name": Prashant  // You may want to include the user's name in the email template
// 			}
// 		});

// 		console.log("Welcome email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending welcome email`, error);

// 		throw new Error(`Error sending welcome email: ${error}`);
// 	}
// };

// export const sendPasswordResetEmail = async (email, resetURL) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Reset your password",
// 			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
// 			category: "Password Reset",
// 		});
// 	} catch (error) {
// 		console.error(`Error sending password reset email`, error);

// 		throw new Error(`Error sending password reset email: ${error}`);
// 	}
// };

// export const sendResetSuccessEmail = async (email) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Password Reset Successful",
// 			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
// 			category: "Password Reset",
// 		});

// 		console.log("Password reset email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending password reset success email`, error);

// 		throw new Error(`Error sending password reset success email: ${error}`);
// 	}
// };

import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification email`, error);
		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, name) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			template_uuid: "cc1bdce6-9e96-44b7-a357-20d4c8eed734",
			template_variables: {
				"company_info_name": "Secure App",
				"user_name": name  // Use the 'name' parameter here
			}
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);
		throw new Error(`Error sending welcome email: ${error}`);
	}
};

export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset email`, error);
		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		});

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);
		throw new Error(`Error sending password reset success email: ${error}`);
	}
};
