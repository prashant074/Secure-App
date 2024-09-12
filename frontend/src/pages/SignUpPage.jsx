// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import { Loader, Lock, Mail, User } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useAuthStore } from "../store/authStore";

// const SignUpPage = () => {
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [recaptchaVerified, setRecaptchaVerified] = useState(false);
// 	const navigate = useNavigate();

// 	const { signup, error, isLoading } = useAuthStore();

// 	// Handle form submission
// 	const handleSignUp = async (e) => {
// 		e.preventDefault();

// 		// Ensure reCAPTCHA is verified
// 		if (!recaptchaVerified) {
// 			console.log("Please complete the reCAPTCHA verification.");
// 			return;
// 		}

// 		try {
// 			// In a real scenario, you'd pass the reCAPTCHA token to the backend
// 			await signup(email, password, name);
// 			navigate("/verify-email");
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	// Handle reCAPTCHA change
// 	const handleRecaptchaChange = (token) => {
// 		if (token) {
// 			setRecaptchaVerified(true);
// 		} else {
// 			setRecaptchaVerified(false);
// 		}
// 	};

// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ duration: 0.5 }}
// 			className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
// 		>
// 			<div className="p-8">
// 				<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
// 					Create Account
// 				</h2>

// 				<form onSubmit={handleSignUp}>
// 					<Input
// 						icon={User}
// 						type="text"
// 						placeholder="Full Name"
// 						value={name}
// 						onChange={(e) => setName(e.target.value)}
// 					/>
// 					<Input
// 						icon={Mail}
// 						type="email"
// 						placeholder="Email Address"
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 					/>
// 					<Input
// 						icon={Lock}
// 						type="password"
// 						placeholder="Password"
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 					/>
// 					{error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
// 					<PasswordStrengthMeter password={password} />

// 					{/* reCAPTCHA */}
// 					<div className="mt-4">
// 						<ReCAPTCHA
// 							sitekey="6LcxZD8qAAAAAJp_Y1mUBd9zMbtxBICAnItIqwLC" // Replace with your actual reCAPTCHA site key
// 							onChange={handleRecaptchaChange}
// 						/>
// 					</div>
// 					<motion.button
// 						className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
// 						whileHover={{ scale: 1.02 }}
// 						whileTap={{ scale: 0.98 }}
// 						type="submit"
// 						disabled={isLoading || !recaptchaVerified} // Disable until reCAPTCHA is completed
// 					>
// 						{isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "Sign Up"}
// 					</motion.button>
// 				</form>
// 			</div>
// 			<div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
// 				<p className="text-sm text-gray-400">
// 					Already have an account?{" "}
// 					<Link to={"/login"} className="text-green-400 hover:underline">
// 						Login
// 					</Link>
// 				</p>
// 			</div>
// 		</motion.div>
// 	);
// };

// export default SignUpPage;

import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import ReCAPTCHA from "react-google-recaptcha";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [recaptchaVerified, setRecaptchaVerified] = useState(false);
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	// Handle form submission
	const handleSignUp = async (e) => {
		e.preventDefault();

		// Ensure reCAPTCHA is verified
		if (!recaptchaVerified) {
			console.log("Please complete the reCAPTCHA verification.");
			return;
		}

		try {
			// In a real scenario, you'd pass the reCAPTCHA token to the backend
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};

	// Handle reCAPTCHA change
	const handleRecaptchaChange = (token) => {
		if (token) {
			setRecaptchaVerified(true);
		} else {
			setRecaptchaVerified(false);
		}
	};

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
					src="/path/to/your/image.jpg" // Replace with the path to your image
					alt="Sign Up"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Form Section */}
			<div className="w-1/2 p-8">
				<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text">
					Create Account
				</h2>

				<form onSubmit={handleSignUp}>
					<Input
						icon={User}
						type="text"
						placeholder="Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						icon={Mail}
						type="email"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						icon={Lock}
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
					<PasswordStrengthMeter password={password} />

					{/* reCAPTCHA */}
					<div className="mt-4">
						<ReCAPTCHA
							sitekey="6LcxZD8qAAAAAJp_Y1mUBd9zMbtxBICAnItIqwLC" // Replace with your actual reCAPTCHA site key
							onChange={handleRecaptchaChange}
						/>
					</div>
					<motion.button
						className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-lg shadow-lg hover:from-red-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type="submit"
						disabled={isLoading || !recaptchaVerified} // Disable until reCAPTCHA is completed
					>
						{isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "Sign Up"}
					</motion.button>
				</form>
				
				<div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
					<p className="text-sm text-gray-400">
						Already have an account?{" "}
						<Link to={"/login"} className="text-red-400 hover:underline">
							Login
						</Link>
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default SignUpPage;
