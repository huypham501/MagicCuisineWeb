import Link from "next/link";
import Image from "next/image";
import item1 from "../../../../public/pages/personalized/step-1/item-1.jpg";
import item2 from "../../../../public/pages/personalized/step-1/item-2.jpg";
import item3 from "../../../../public/pages/personalized/step-1/item-3.jpg";
import item4 from "../../../../public/pages/personalized/step-1/item-4.jpg";
import item5 from "../../../../public/pages/personalized/step-1/item-5.jpg";
import item6 from "../../../../public/pages/personalized/step-1/item-6.jpg";

export default function PersonalizedStep1() {
	return (
		<div className="content-container personalized-step-container">
			<div className="title">Bạn yêu thích nền ẩm thực của nước nào?</div>
			<div className="list-option-container step-1">
				<ul className="list-option">
					<Link href="/personalized/step-2">
						<li className="item item-1">
							<Image
								src={item1}
								alt="item-1.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">VIỆT NAM</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-2">
							<Image
								src={item2}
								alt="item-2.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">HÀN QUỐC</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-3">
							<Image
								src={item3}
								alt="item-3.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">PHÁP</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-4">
							<Image
								src={item4}
								alt="item-4.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">TRUNG QUỐC</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-5">
							<Image
								src={item5}
								alt="item-5.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">MỸ</div>
						</li>
					</Link>
					<Link href="/personalized/step-2">
						<li className="item item-6">
							<Image
								src={item6}
								alt="item-6.jpg"
								fill={true}
								sizes=""
							/>
							<div className="option">NHẬT BẢN</div>
						</li>
					</Link>
				</ul>
			</div>
			<div className="button-container">
				<Link href="/personalized/step-2">
					<button className="button next-button">TIẾP THEO</button>
				</Link>
			</div>
		</div>
	);
}
