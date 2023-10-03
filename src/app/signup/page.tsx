import Link from "next/link";
import Image from "next/image";
import moveLogin from "../../../public/pages/login_signup/login_signup.jpg";
import facebookIcon from "../../../public/pages/login_signup/facebook_icon.svg";
import instagramIcon from "../../../public/pages/login_signup/instagram icon.svg";
import pinterestIcon from "../../../public/pages/login_signup/pinterest icon.svg";

export default function Signup() {
	return (
		<div className="content-container signup-container">
			<div className="signup">
				<div className="signup-container">
					<div className="title-section">
						<div className="title">ĐĂNG KÝ</div>
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
						<input
							type="password"
							className="input retype-password"
							placeholder="XÁC NHẬN MẬT KHẨU"
						/>
					</div>
					<div className="signup-button-section">
						<Link href="/personalized/step-1">
							<button className="signup-button">ĐĂNG KÝ</button>
						</Link>
					</div>
					<div className="social-media-icon-container">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="icon-container">
							<Image
								src={facebookIcon}
								alt="facebook_icon.svg"
								fill={true}
								sizes=""
								className="icon-image facebook-icon"
							/>
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="icon-container">
							<Image
								src={instagramIcon}
								alt="instagram icon.svg"
								fill={true}
								sizes=""
								className="icon-image instagram-icon"
							/>
						</a>
						<a
							href="https://www.pinterest.com/"
							target="_ 	blank"
							rel="noopener noreferrer"
							className="icon-container">
							<Image
								src={pinterestIcon}
								alt="pinterest icon.svg"
								fill={true}
								sizes=""
								className="icon-image pinterest-icon"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="image">
				<div className="move-login-image-container image-container">
					<Image
						src={moveLogin}
						alt="login_signup.jpg"
						fill={true}
						sizes=""
						className="move-login-image"
					/>
				</div>
				<Link
					href="/login"
					className="move-login-button-container">
					<button
						className="move-login-button"
						type="button">
						ĐĂNG NHẬP
					</button>
				</Link>
			</div>
		</div>
	);
}
