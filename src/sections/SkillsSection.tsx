import HtmlSvg from "../../public/icons/html5-color.svg";
import CssSvg from "../../public/icons/css3-color.svg";
import JsSvg from "../../public/icons/javascript-color.svg";
import NextjsSvg from "../../public/icons/nextdotjs-color.svg";
import ReactjsSvg from "../../public/icons/react-color.svg";
import NodejsSvg from "../../public/icons/nodedotjs-color.svg";

export default function SkillsSection() {
    return (
        <>
            <section className="skills_section">
                <div className="skills_box">
                    <div className="title_box">
                        <h4>Skills</h4>
                        <h5>사용 가능한 기술 목록입니다.</h5>
                        <HtmlSvg width="90" height="90" />
                    </div>
                </div>
            </section>

            <style jsx>{`
                .skills_section {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                }

                .skills_box {
                    width: 650px;
                }

                .title_box {
                    text-align: center;
                }

                .title_box h4 {
                    font-size: 34px;
                    margin: 0;
                    margin-top: 14px;
                }

                .title_box h5 {
                    color: #b3b3b3;
                }
            `}</style>
        </>
    );
}
