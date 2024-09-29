// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useAuthStore } from "../store/authStore";
// import toast from "react-hot-toast";

// const EmailVerificationPage = () => {
// 	const [code, setCode] = useState(["", "", "", "", "", ""]);
// 	const inputRefs = useRef([]);
// 	const navigate = useNavigate();

// 	const { error, isLoading, verifyEmail } = useAuthStore();

// 	const handleChange = (index, value) => {
// 		const newCode = [...code];

// 		// Handle pasted content
// 		if (value.length > 1) {
// 			const pastedCode = value.slice(0, 6).split("");
// 			for (let i = 0; i < 6; i++) {
// 				newCode[i] = pastedCode[i] || "";
// 			}
// 			setCode(newCode);

// 			// Focus on the last non-empty input or the first empty one
// 			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
// 			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
// 			inputRefs.current[focusIndex].focus();
// 		} else {
// 			newCode[index] = value;
// 			setCode(newCode);

// 			// Move focus to the next input field if value is entered
// 			if (value && index < 5) {
// 				inputRefs.current[index + 1].focus();
// 			}
// 		}
// 	};

// 	const handleKeyDown = (index, e) => {
// 		if (e.key === "Backspace" && !code[index] && index > 0) {
// 			inputRefs.current[index - 1].focus();
// 		}
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const verificationCode = code.join("");
// 		try {
// 			await verifyEmail(verificationCode);
// 			navigate("/");
// 			toast.success("Email verified successfully");
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	// Auto submit when all fields are filled
// 	useEffect(() => {
// 		if (code.every((digit) => digit !== "")) {
// 			handleSubmit(new Event("submit"));
// 		}
// 	}, [code]);

// 	return (
// 		<div className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
// 			<motion.div
// 				initial={{ opacity: 0, y: -50 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 0.5 }}
// 				className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md'
// 			>
// 				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-400 to-emerald-500 text-transparent bg-clip-text'>
// 					Verify Your Email
// 				</h2>
// 				<p className='text-center text-gray-300 mb-6'>Enter the 6-digit code sent to your email address.</p>

// 				<form onSubmit={handleSubmit} className='space-y-6'>
// 					<div className='flex justify-between'>
// 						{code.map((digit, index) => (
// 							<input
// 								key={index}
// 								ref={(el) => (inputRefs.current[index] = el)}
// 								type='text'
// 								maxLength='6'
// 								value={digit}
// 								onChange={(e) => handleChange(index, e.target.value)}
// 								onKeyDown={(e) => handleKeyDown(index, e)}
// 								className='w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none'
// 							/>
// 						))}
// 					</div>
// 					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
// 					<motion.button
// 						whileHover={{ scale: 1.05 }}
// 						whileTap={{ scale: 0.95 }}
// 						type='submit'
// 						disabled={isLoading || code.some((digit) => !digit)}
// 						className='w-full bg-gradient-to-r from-red-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50'
// 					>
// 						{isLoading ? "Verifying..." : "Verify Email"}
// 					</motion.button>
// 				</form>
// 			</motion.div>
// 		</div>
// 	);
// };
// export default EmailVerificationPage;

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const EmailVerificationPage = () => {
	const [code, setCode] = useState(["", "", "", "", "", ""]);
	const inputRefs = useRef([]);
	const navigate = useNavigate();

	const { error, isLoading, verifyEmail } = useAuthStore();

	const handleChange = (index, value) => {
		const newCode = [...code];

		// Handle pasted content
		if (value.length > 1) {
			const pastedCode = value.slice(0, 6).split("");
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || "";
			}
			setCode(newCode);

			// Focus on the last non-empty input or the first empty one
			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
			inputRefs.current[focusIndex].focus();
		} else {
			newCode[index] = value;
			setCode(newCode);

			// Move focus to the next input field if value is entered
			if (value && index < 5) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const verificationCode = code.join("");
		try {
			await verifyEmail(verificationCode);
			navigate("/");
			toast.success("Email verified successfully");
		} catch (error) {
			console.log(error);
		}
	};

	// Auto submit when all fields are filled
	useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit(new Event("submit"));
		}
	}, [code]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex max-w-4xl w-full mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
		>
			{/* Image Section */}
			<div className="w-1/2 bg-gray-900 bg-opacity-70">
				<img
					src="data:image/jpeg;base64,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" // Replace with the path to your image
					alt="Verify Email"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Form Section */}
			<div className="w-1/2 p-8">
				<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-400 to-rose-500 text-transparent bg-clip-text">
					Verify Your Email
				</h2>
				<p className="text-center text-gray-300 mb-6">Enter the 6-digit code sent to your email address.</p>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="flex justify-between">
						{code.map((digit, index) => (
							<input
								key={index}
								ref={(el) => (inputRefs.current[index] = el)}
								type="text"
								maxLength="6"
								value={digit}
								onChange={(e) => handleChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
							/>
						))}
					</div>
					{error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type="submit"
						disabled={isLoading || code.some((digit) => !digit)}
						className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-red-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50"
					>
						{isLoading ? "Verifying..." : "Verify Email"}
					</motion.button>
				</form>
			</div>
		</motion.div>
	);
};

export default EmailVerificationPage;
