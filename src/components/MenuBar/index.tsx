import Link from "next/link";
import Image from "next/image";
import logoBlack from "../../../public/logo_black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function MenuBar() {
	return (
		<div className="container-menu-bar">
			<Link
				href="/"
				className="logo-container">
				<Image
					className="logo"
					src={logoBlack}
					fill={true}
					sizes=""
					alt="logo"
				/>
			</Link>
			<div className="menu-bar">
				<ul className="menu">
					<li className="item home">
						<Link href="/">HOME</Link>
					</li>
					<li className="item recipes">
						<Link href="#">RECIPES</Link>
					</li>
					<li className="item articles">
						<Link href="#">ARTICLES</Link>
					</li>
					<li className="item myfeed">
						<Link href="profile">MY FEED</Link>
					</li>
					<li className="item aboutus">
						<Link href="#">ABOUT US</Link>
					</li>
					<li className="item login">
						<Link href="login">ĐĂNG NHẬP</Link>
					</li>
					<li className="item direct">
						<div className="direct-container">
							<div className="icon cart-icon">
								<FontAwesomeIcon
									icon={faShoppingCart}
									style={{
										fontSize: 16,
										color: "black",
									}}
								/>
							</div>
							<div className="icon search-icon">
								<FontAwesomeIcon
									icon={faSearch}
									style={{
										fontSize: 16,
										color: "black",
									}}
								/>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
