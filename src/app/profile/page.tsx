import Link from "next/link";
import Image from "next/image";
import userAvatar from "../../../public/pages/profile/user_avatar.jpg";
import conllectionItem1 from "../../../public/pages/profile/collection_item/item-1.jpg";
import conllectionItem2 from "../../../public/pages/profile/collection_item/item-2.jpg";
import conllectionItem3 from "../../../public/pages/profile/collection_item/item-3.jpg";
import conllectionItem4 from "../../../public/pages/profile/collection_item/item-4.jpg";
import conllectionItem5 from "../../../public/pages/profile/collection_item/item-5.jpg";
import conllectionItem6 from "../../../public/pages/profile/collection_item/item-6.jpg";
import conllectionItem7 from "../../../public/pages/profile/collection_item/item-7.jpg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faSnapchat, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
	return (
		<div className="profile-container">
			<div className="user-container">
				<div className="avatar-container image-container">
					<Image
						src={userAvatar}
						alt="user_avatar.jpg"
						fill={true}
						sizes=""
						className="user-avatar"
					/>
				</div>
				<div className="description-container">
					<div className="name">Skyler Meo</div>
					<div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates unde earum amet facere quis natus mollitia ipsum. Eos dolorem maiores voluptatibus rem voluptatum, tenetur provident cumque nam totam tempore numquam eius, ducimus laboriosam aperiam accusantium dolores. Quia sequi error autem minus ea unde optio quasi, aliquid similique molestias provident dolore.</div>
					<div className="social-media-icon">
						<div className="icon facebook">
							<a href="#">
								<FontAwesomeIcon
									icon={faFacebook}
									style={{
										fontSize: 32,
										color: "#AAC29F",
									}}
								/>
							</a>
						</div>
						<div className="icon instagram">
							<a href="#">
								<FontAwesomeIcon
									icon={faInstagram}
									style={{
										fontSize: 32,
										color: "#AAC29F",
									}}
								/>
							</a>
						</div>
						<div className="icon snapchat">
							<a href="#">
								<FontAwesomeIcon
									icon={faSnapchat}
									style={{
										fontSize: 32,
										color: "#AAC29F",
									}}
								/>
							</a>
						</div>
						<div className="icon pinterest">
							<a href="#">
								<FontAwesomeIcon
									icon={faPinterest}
									style={{
										fontSize: 32,
										color: "#AAC29F",
									}}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="user-space-container">
				<div className="options-user-space">
					<div className="option saved-recipes">
						<a href="#">SAVED RECIPES</a>
					</div>
					<div className="option preferences">
						<a href="#">PREFERENCES</a>
					</div>
					<div className="option setting">
						<a href="#">SETTING</a>
					</div>
				</div>
			</div>
			<div className="all-recipes-container">
				<div className="title">All Recipes</div>
				<div className="empty-description">
					<a href="#">Click here to add some recipes</a>
				</div>
			</div>
			<div className="collection-container">
				<div className="head-collection">
					<div className="title">Collection</div>
					<div className="sorter">
						<div className="content">Last created</div>
						<div className="chervon">
							<FontAwesomeIcon
								icon={faChevronDown}
								style={{
									fontSize: 16,
									color: "black",
								}}
								className="chevron-icon"
							/>
						</div>
					</div>
				</div>
				<div className="content-collection">
					<ul className="list-item">
						<li className="item">
							<div className="image-container">
								<Image
									src={conllectionItem1}
									alt="item-1.jpg"
									fill={true}
									sizes=""
								/>
							</div>
							<div className="description-container">
								<div className="name">Breakfast</div>
								<div className="description">0 recipes</div>
							</div>
						</li>
						<li className="item">
							<div className="image-container">
								<Image
									src={conllectionItem2}
									alt="item-2.jpg"
									fill={true}
									sizes=""
								/>
							</div>
							<div className="description-container">
								<div className="name">Brunch</div>
								<div className="description">0 recipes</div>
							</div>
						</li>
						<li className="item">
							<div className="image-container">
								<Image
									src={conllectionItem3}
									alt="item-3.jpg"
									fill={true}
									sizes=""
								/>
							</div>
							<div className="description-container">
								<div className="name">Dinner</div>
								<div className="description">0 recipes</div>
							</div>
						</li>
						<li className="item">
							<div className="image-container">
								<Image
									src={conllectionItem4}
									alt="item-4.jpg"
									fill={true}
									sizes=""
								/>
							</div>
							<div className="description-container">
								<div className="name">Italian Food</div>
								<div className="description">0 recipes</div>
							</div>
						</li>
						<li className="item">
							<div className="image-container">
								<Image
									src={conllectionItem5}
									alt="item-5.jpg"
									fill={true}
									sizes=""
								/>
							</div>
							<div className="description-container">
								<div className="name">Sweet</div>
								<div className="description">0 recipes</div>
							</div>
						</li>
						<li className="item">
							<div className="image-container">
								<Image
									src={conllectionItem6}
									alt="item-6.jpg"
									fill={true}
									sizes=""
								/>
							</div>
							<div className="description-container">
								<div className="name">Brunch</div>
								<div className="description">0 recipes</div>
							</div>
						</li>
						<li className="item">
							<div className="image-container">
								<Image
									src={conllectionItem7}
									alt="item-7.jpg"
									fill={true}
									sizes=""
								/>
							</div>
							<div className="description-container">
								<div className="name">Dinner</div>
								<div className="description">0 recipes</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
