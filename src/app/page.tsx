import Link from "next/link";
import Image from "next/image";
import { RelatedArticle } from "@/components";
import news from "../../public/pages/page/news.jpg";

export default function Home() {
	return (
		<main>
			<div className="content-container">
				<div className="news-container">
					<div className="image-container">
						<Image
							src={news}
							alt="news"
							fill={true}
							sizes=""
							className="image"
						/>
					</div>
					<div className="news-information">
						<div className="title">TIN TỨC</div>
						<div className="heading">ẨM THỰC VIỆT NAM TỪNG BƯỚC CHINH PHỤC THẾ GIỚI</div>
						<div className="description">&emsp;&emsp;Món ăn Việt ngày càng được nhiều quốc gia trên thế giới biết đến. Điều đó càng được khẳng định, khi tháng 8/2012 vừa qua tại Faridabad, Ấn Độ, Tổ chức Kỷ lục châu Á đã chính thức công nhận và xác lập 12 món ăn Việt Nam đạt tiêu chí “Giá trị Ẩm thực châu Á”.</div>
						<Link
							href="/news"
							className="wrap-more-button">
							<button className="button more-button"> XEM THÊM</button>
						</Link>
					</div>
				</div>
				<div className="relate-post-wrap">
					<RelatedArticle />
				</div>
			</div>
		</main>
	);
}
