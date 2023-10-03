import Link from "next/link";
import Image from "next/image";
import moveSignup from "../../../public/pages/login_signup/login_signup.jpg";

export default function Login() {

	return (
		<div className="content-container login-container">
			<div className="image">
				<div className="move-signup-image-container image-container">
					<Image
						src={moveSignup}
						alt="login_signup.jpg"
						fill={true}
						sizes=""
						className="move-signup-image"
					/>
				</div>
				<Link
					href="/signup"
					className="move-signup-button-container">
					<button
						className="move-signup-button"
						type="button">
						ĐĂNG KÝ
					</button>
				</Link>
			</div>
			<div className="login">
				<div className="login-container">
					<div className="title-section">
						<div className="title">ĐĂNG NHẬP</div>
						<div className="description">Chào mừng bạn đến với Magic Cuisine!</div>
					</div>
					<div className="authentication-section">
						<input
							type="text"
							className="input username"
							placeholder="EMAIL"
						/>
						<input
							type="password"
							className="input password"
							placeholder="MẬT KHẨU"
						/>
					</div>
					<div className="verify-section">
						<div className="save-login-section">
							<input
								type="checkbox"
								id="save-login"
								className="checkbox save-login"
								name="save-login"
							/>
							<label htmlFor="save-login">Ghi nhớ phiên đăng nhập</label>
						</div>
						<div className="forget-password-section">
							<a
								href="#"
								className="forget-password">
								Quên mật khẩu?
							</a>
						</div>
					</div>
					<div className="login-button-section">
						<Link href="/personalized/step-1">
							<button className="login-button">ĐĂNG NHẬP</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
