import Link from "next/link";
import Image from "next/image";
import item1 from "../../../../public/pages/personalized/step-3/item-1.jpg";
import item2 from "../../../../public/pages/personalized/step-3/item-2.jpg";
import item3 from "../../../../public/pages/personalized/step-3/item-3.jpg";
import item4 from "../../../../public/pages/personalized/step-3/item-4.jpg";
import item5 from "../../../../public/pages/personalized/step-3/item-5.jpg";
import item6 from "../../../../public/pages/personalized/step-3/item-6.jpg";

export default function PersonalizedStep3() {
	return (
		<div className="content-container personalized-step-container">
			<div className="title">Bạn có đang theo chế độ ăn uống nào không?</div>
			<div className="list-option-container step-3">
				<ul className="list-option">
					<Link href="/personalized/step-4">
						<li className="item item-1">
							<Image
								src={item1}
								alt="item-1.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">PALEO</div>
						</li>
					</Link>
					<Link href="/personalized/step-4">
						<li className="item item-2">
							<Image
								src={item2}
								alt="item-2.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">PESCETARIAN</div>
						</li>
					</Link>
					<Link href="/personalized/step-4">
						<li className="item item-3">
							<Image
								src={item3}
								alt="item-3.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">PLANT BASED</div>
						</li>
					</Link>
					<Link href="/personalized/step-4">
						<li className="item item-4">
							<Image
								src={item4}
								alt="item-4.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">KETOGENIC</div>
						</li>
					</Link>
					<Link href="/personalized/step-4">
						<li className="item item-5">
							<Image
								src={item5}
								alt="item-5.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">VEGETARIAN</div>
						</li>
					</Link>
					<Link href="/personalized/step-4">
						<li className="item item-6">
							<Image
								src={item6}
								alt="item-6.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">EAT CLEAN</div>
						</li>
					</Link>
				</ul>
			</div>
			<div className="button-container">
				<Link href="/personalized/step-2">
					<button className="button prev-button">QUAY LẠI</button>
				</Link>
				<Link href="/personalized/step-4">
					<button className="button next-button">TIẾP THEO</button>
				</Link>
			</div>
		</div>
	);
}
