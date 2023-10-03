import Link from "next/link";
import Image from "next/image";
import { RelatedArticle } from "@/components";
import newsContentItem1 from "../../../public/pages/news-content/item-1.jpg";
import newsContentItem2 from "../../../public/pages/news-content/item-2.jpg";
import newsContentItem3 from "../../../public/pages/news-content/item-3.jpg";
import newsContentItem4 from "../../../public/pages/news-content/item-4.jpg";

export default function News() {
	return (
		<>
			<div className="content-container news-container">
				<div className="news-content-container">
					<div className="date-time">10/7/2021</div>
					<div className="title">ẨM THỰC VIỆT NAM TỪNG BƯỚC CHINH PHỤC THẾ GIỚI</div>
					<div className="main-content-container">
						<div className="paragraph-container">
							<div className="sub-title">Món ăn Việt ngày càng được nhiều quốc gia trên thế giới biết đến. Điều đó càng được khẳng định, khi tháng 8/2012 vừa qua tại Faridabad, Ấn Độ, Tổ chức Kỷ lục châu Á đã chính thức công nhận và xác lập 12 món ăn Việt Nam đạt tiêu chí “Giá trị Ẩm thực châu Á”.</div>
						</div>
						<div className="paragraph-container">
							<div className="content">Món ăn Việt về khẩu vị nói chung không thiên lệch quá về một cực nào nên dễ hợp khẩu vị nhiều dân tộc. Món Việt cũng không nhiều dầu mỡ quá như món ăn Hoa, không dùng gia vị “mạnh” quá như món ăn Ấn Độ, không thiên về bơ, sữa như món ăn Âu… Món ăn miền Bắc thường là những món nấu như: phở, miến, bún thang, bún mọc… do nước dùng của các món nấu miền Bắc thường tinh tế, thuần nhất về mùi vị; nếu bò thì chỉ toàn là xương, thịt bò; nếu là gà thì cũng vậy.</div>
						</div>
						<div className="paragraph-container">
							<div className="group-image-container">
								<div className="image-container">
									<Image
										src={newsContentItem1}
										alt="item 1"
										fill={true}
										sizes=""
										className="image"
									/>
								</div>
								<div className="image-container">
									<Image
										src={newsContentItem2}
										alt="item 2"
										fill={true}
										sizes=""
										className="image"
									/>
								</div>
								<div className="image-container">
									<Image
										src={newsContentItem3}
										alt="item 3"
										fill={true}
										sizes=""
										className="image"
									/>
								</div>
							</div>
						</div>
						<div className="paragraph-container">
							<div className="content">Còn món ăn miền Trung, đặc biệt là món ăn Huế, có một vị trí quan trọng trong nền văn hóa ẩm thực của Việt Nam thiên về tính đa vị, phối hợp rất nhiều nguyên liệu lẫn gia vị. Món ăn miền Nam thì thường có ưu điểm nhiều rau như các món gỏi, cuốn; món nướng thường được phối nhiều gia vị khác nhau cho các nguyên liệu như thịt, hải sản, gia cầm… nên rất hấp dẫn người ăn do mùi thơm mỗi món rất khác nhau.</div>
						</div>
						<div className="paragraph-container">
							<div className="content">Hầu như tất cả những món ăn Việt đều có thể tìm thấy ở những quán cóc, xe đẩy trên hè phố hoặc những quán ăn lớn, nhỏ bên đường, đầu ngõ, hẻm, những nhà hàng khách sạn sang trọng bậc nhất… Thực khách thì đủ già trẻ, nam nữ, ông tây, bà đầm, những cô cậu thanh niên Hàn Quốc, Nhật Bản, cả các chính khách, minh tinh của thế giới… tất cả đều thích thú, trầm trồ bên tô phở, đĩa nem, bát bún…</div>
						</div>
						<div className="paragraph-container">
							<div className="image-container item-4">
								<Image
									src={newsContentItem4}
									alt="item 4"
									fill={true}
									sizes=""
									className="image"
								/>
							</div>
						</div>
						<div className="paragraph-container">
							<div className="content">Martin Yan (Yan Can Cook) là một đầu bếp lừng danh, cũng là nhân vật chính đầy hài hước và cuốn hút trong chương trình truyền hình Yan Can Cook từng chia sẻ, món ăn Việt Nam rất đặc biệt, rất tốt cho sức khỏe, lúc nào cũng tươi. Bạn ăn như thế nào thì con người bạn sẽ thể hiện ra như vậy. Bạn nhìn xem, người Việt Nam, đặc biệt là phụ nữ rất mảnh dẻ và trông lúc nào cũng tươi tắn, đầy sức sống… Chả giò, sau đó là phở – món ăn trứ danh của người Việt Nam ai cũng yêu thích trong đó có Yan Can Cook.</div>
						</div>
						<div className="paragraph-container">
							<div className="content">Đến Việt Nam du lịch, làm việc họ tìm và học nấu ăn để có thể tự tay chế biến. “Nếu hỏi tôi điều gì khiến tôi yêu thích nhất khi tới Việt Nam thì tôi sẽ trả lời ngay rằng đó chính là các món ăn. Ở bất cứ nơi nào trên thế giới cũng có heo, bò, gà, vịt, hải sản… nhưng món ăn của mỗi quốc gia, mỗi vùng miền đều có những đặc trưng riêng, khác nhau do cách sử dụng gia vị, khẩu vị cũng như cách nấu đã quyết định nên phong cách ẩm thực của nơi đó. Tôi phải học một số món ăn Việt Nam để khi không ở đây vẫn có thể tự làm để thưởng thức và tôi dự định sẽ đem một số món ăn Việt như phở, chả giò vào trong thực đơn của nhà hàng mình ở Anh”- Daniel Roux một chuyên gia ẩm thực của Anh chia sẻ.</div>
						</div>
						<div className="paragraph-container">
							<div className="image-container item-1">
								<Image
									src={newsContentItem1}
									alt="item 1"
									fill={true}
									sizes=""
									className="image"
								/>
							</div>
						</div>
						<div className="paragraph-container">
							<div className="content">Khẳng định những giá trị về văn hóa ẩm thực Việt Nam từ năm 2010, Tổ chức Kỷ lục Việt Nam đã triển khai Hành trình quảng bá ẩm thực và đặc sản Việt Nam, tìm kiếm kỷ lục ẩm thực và đề cử đến Tổ chức Kỷ lục ASEAN, Tổ chức kỷ lục châu Á và Tổ chức kỷ lục thế giới Guinness, góp phần làm cho ẩm thực Việt Nam được thế giới biết đến nhiều hơn nữa. Kết quả, tháng 8/2012 vừa qua tại Faridabad, Ấn Độ – Tổ chức kỷ lục châu Á đã chính thức công nhận và xác lập 12 món ăn Việt Nam do Tổ chức kỷ lục Việt Nam đề cử theo bộ tiêu chí xác lập “Giá trị ẩm thực châu Á” của Tổ chức kỷ lục châu Á qui định</div>
						</div>
					</div>
					<div className="author">Tác giả</div>
				</div>
				<div className="relate-post-wrap">
					<RelatedArticle />
				</div>
			</div>
		</>
	);
}
