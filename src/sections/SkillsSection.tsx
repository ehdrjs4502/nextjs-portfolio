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
import Title from "@/components/Title";

export default function SkillsSection() {
    return (
        <>
            <section className="skills-section">
                <div>
                    <div className="skills-box">
                        <Title title="Skills" subTitle="사용 가능한 기술 목록입니다." />
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
                    <div className="skills-box">
                        <Title title="ETC" subTitle="개발에 필요한 도구 사용 목록입니다." />
                        <SkillBox icons={[<GithubIcon />, <FigmaIcon />, <NotionIcon />]} />
                    </div>
                </div>
            </section>

            <style jsx>{`
                .skills-section {
                    width: 100%;
                    height: 100vh;
                    min-height: 800px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .skills-box {
                    width: 600px;
                    margin-bottom: 50px;
                }

                @media screen and (max-width: 760px) {
                    .skills-box {
                        width: 350px;
                        margin-bottom: 30px;
                    }
                }

                .title-box {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-top: 32px;
                    margin-bottom: 32px;
                }

                .title-box h4 {
                    font-size: 34px;
                    margin: 0;
                    margin-top: 14px;
                }

                .title-box h5 {
                    color: #b3b3b3;
                }
            `}</style>
        </>
    );
}
