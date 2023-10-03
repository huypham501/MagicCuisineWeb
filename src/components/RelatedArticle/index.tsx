import Image from "next/image";
import relatePostItem1 from "../../../public/pages/page/relate-post/item-1.jpg";
import relatePostItem2 from "../../../public/pages/page/relate-post/item-2.jpg";
import relatePostItem3 from "../../../public/pages/page/relate-post/item-3.jpg";
import relatePostItem4 from "../../../public/pages/page/relate-post/item-4.jpg";

export default function RelatedArticle() {
    return (
        <div className="relate-article-container">
            <div className="title-container">BÀI VIẾT LIÊN QUAN</div>
            <div className="list-item-container">
                <ul className="list-item">
                    <li className="item">
                        <div className="image-container">
                            <Image
                                src={relatePostItem1}
                                alt="item 1"
                                fill={true}
                                sizes=""
                                className="image"
                            />
                        </div>
                        <div className="information-container">
                            <div className="title">LOREM IPSUM DOLOR SIT.</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga molestiae eligendi ea, odit nobis!</div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="image-container">
                            <Image
                                src={relatePostItem2}
                                alt="item 2"
                                fill={true}
                                sizes=""
                                className="image"
                            />
                        </div>
                        <div className="information-container">
                            <div className="title">LOREM IPSUM DOLOR SIT.</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga molestiae eligendi ea, odit nobis!</div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="image-container">
                            <Image
                                src={relatePostItem3}
                                alt="item 3"
                                fill={true}
                                sizes=""
                                className="image"
                            />
                        </div>
                        <div className="information-container">
                            <div className="title">LOREM IPSUM DOLOR SIT.</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga molestiae eligendi ea, odit nobis!</div>
                        </div>
                    </li>
                    <li className="item">
                        <div className="image-container">
                            <Image
                                src={relatePostItem4}
                                alt="item 4"
                                fill={true}
                                sizes=""
                                className="image"
                            />
                        </div>
                        <div className="information-container">
                            <div className="title">LOREM IPSUM DOLOR SIT.</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga molestiae eligendi ea, odit nobis!</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
