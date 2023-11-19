import HtmlIcon from "../../../public/icons/html5-color.svg";
import CssIcon from "../../../public/icons/css3-color.svg";
import JsIcon from "../../../public/icons/javascript-color.svg";
import NextjsIcon from "../../../public/icons/nextdotjs-color.svg";
import ReactjsIcon from "../../../public/icons/react-color.svg";
import NodejsIcon from "../../../public/icons/nodedotjs-color.svg";
import NotionIcon from "../../../public/icons/notion-color.svg";
import FigmaIcon from "../../../public/icons/figma-color.svg";
import GithubIcon from "../../../public/icons/github-color.svg";
import SkillBox from "@/app/_components/SkillBox";
import Title from "@/app/_components/Title";
import styles from "@/app/styles/SkillsSection.module.css";

export default function SkillsSection() {
    return (
        <>
            <section className={styles.section}>
                <div>
                    <div className={styles.box}>
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
                    <div className={styles.box}>
                        <Title title="ETC" subTitle="개발에 필요한 도구 사용 목록입니다." />
                        <SkillBox icons={[<GithubIcon />, <FigmaIcon />, <NotionIcon />]} />
                    </div>
                </div>
            </section>
        </>
    );
}
