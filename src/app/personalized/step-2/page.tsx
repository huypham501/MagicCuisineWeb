import Link from "next/link";
import Image from "next/image";
import beef from "../../../../public/pages/personalized/step-2/Beef.svg";
import fish from "../../../../public/pages/personalized/step-2/Fish.svg";
import wheat from "../../../../public/pages/personalized/step-2/Wheat.svg";
import crab from "../../../../public/pages/personalized/step-2/Crab.svg";
import nuts from "../../../../public/pages/personalized/step-2/Nuts.svg";
import matsuke from "../../../../public/pages/personalized/step-2/Matsuke.svg";

export default function PersonalizedStep2() {
	return (
		<div className="content-container personalized-step-container">
			<div className="title">Bạn có dị ứng với loại thực phẩm nào không?</div>
			<div className="list-option-container step-2">
				<ul className="list-option">
					<Link href="/personalized/step-2">
						<li className="item item-1">
							<div className="image-wrap">
								<Image
									src={beef}
									alt="Beef.svg"
									fill={true}
									sizes=""
								/>
							</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-2">
							<div className="image-wrap">
								<Image
									src={fish}
									alt="Fish.svg"
									fill={true}
									sizes=""
								/>
							</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-3">
							<div className="image-wrap">
								<Image
									src={wheat}
									alt="Wheat.svg"
									fill={true}
									sizes=""
								/>
							</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-4">
							<div className="image-wrap">
								<Image
									src={crab}
									alt="Crab.svg"
									fill={true}
									sizes=""
								/>
							</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-5">
							<div className="image-wrap">
								<Image
									src={nuts}
									alt="Nuts.svg"
									fill={true}
									sizes=""
								/>
							</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-6">
							<div className="image-wrap">
								<Image
									src={matsuke}
									alt="Matsuke.svg"
									fill={true}
									sizes=""
								/>
							</div>
						</li>
					</Link>
				</ul>
			</div>
			<div className="button-container">
				<Link href="/personalized/step-1">
					<button className="button prev-button">QUAY LẠI</button>
				</Link>
				<Link href="/personalized/step-3">
					<button className="button next-button">TIẾP THEO</button>
				</Link>
			</div>
		</div>
	);
}
