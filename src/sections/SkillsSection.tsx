import HtmlIcon from "../../public/icons/html5-color.svg";
import CssIcon from "../../public/icons/css3-color.svg";
import JsIcon from "../../public/icons/javascript-color.svg";
import NextjsIcon from "../../public/icons/nextdotjs-color.svg";
import ReactjsIcon from "../../public/icons/react-color.svg";
import NodejsIcon from "../../public/icons/nodedotjs-color.svg";
import NotionIcon from "../../public/icons/notion-color.svg";
import FigmaIcon from "../../public/icons/figma-color.svg";
import GithubIcon from "../../public/icons/github-color.svg";
import SkillBox from "@/components/SkillBox";

export default function SkillsSection() {
    return (
        <>
            <section className="skills_section">
                <div>
                    <div className="skills_box">
                        <div className="title_box">
                            <h4>Skills</h4>
                            <h5>사용 가능한 기술 목록입니다.</h5>
                        </div>
                        <SkillBox
                            icons={[
                                <JsIcon />,
                                <ReactjsIcon />,
                                <NextjsIcon />,
                                <HtmlIcon />,
                                <CssIcon />,
                                <NodejsIcon />,
                            ]}
                        />
                    </div>
                    <div className="skills_box">
                        <div className="title_box">
                            <h4>ETC</h4>
                            <h5>개발에 필요한 도구 사용 목록입니다.</h5>
                        </div>
                        <SkillBox icons={[<GithubIcon />, <FigmaIcon />, <NotionIcon />]} />
                    </div>
                </div>
            </section>

            <style jsx>{`
                .skills_section {
                    width: 100%;
                    height: 100vh;
                    min-height: 800px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .skills_box {
                    width: 600px;
                    margin-bottom: 50px;
                }

                @media screen and (max-width: 760px) {
                    .skills_box {
                        width: 350px;
                        margin-bottom: 30px;
                    }
                }

                .title_box {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-top: 32px;
                    margin-bottom: 32px;
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
