import Title from "@/components/Title";

export default function ProjectTimeLineSection() {
    const projectList = [
        {
            date: "2023. 06 ~ 08 (3개월)",
            name: "assemblog",
            summaryList: [
                <span>
                    <strong>Next.js</strong>를 활용하여 개발한 2인 공동 블로그 개발 프로젝트
                </span>,
                <span>
                    <strong>SEO</strong> 최적화를 위해 <strong>SSG</strong> 활용
                </span>,
                <span>
                    <strong>TypeScript</strong>를 사용하여 컴파일 에러 방지
                </span>,
                <span>
                    <strong>마크다운 형식</strong>의 글 작성 구현
                </span>,
                <span>
                    <strong>ISR</strong>을 통해 블로그 게시글 업데이트
                </span>,
                <span>
                    <strong>Next/Image</strong>를 활용하여 이미지 사이즈 최적화
                </span>,
            ],
        },
        {
            date: "2023. 09 ~ 12 (4개월)",
            name: "프로젝트2",
            summaryList: ["로그인 구현", "로그아웃 구현"],
        },
    ];
    return (
        <>
            <div className="timeline-section">
                <div>
                    <Title
                        title="프로젝트 타임라인"
                        subTitle="가치 있는 개발자로 성장하기 위해 연도별로 진행한 프로젝트 목록입니다."
                    />
                    <div className="timeline-box">
                        {projectList.map((project) => (
                            <div className="node">
                                <div className="date">
                                    <span>{project.date}</span>
                                </div>
                                <h2>{project.name}</h2>
                                <ul>
                                    {project.summaryList.map((text) => (
                                        <li>{text}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .timeline-section {
                    width: 100%;
                    height: 100vh;
                    min-height: 800px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .timeline-box {
                    margin-left: 1.5rem;
                    border-left: 3px solid #5ba6ff;
                }

                .node {
                    padding-left: 1.5rem;
                    padding-bottom: 1.5rem;
                    position: relative;
                }

                .node h2 {
                    color: #5ba6ff;
                }
                .node h2,
                .node p {
                    margin: 0;
                }

                .node::before {
                    content: "";
                    width: 0.5rem;
                    height: 0.5rem;
                    background: #5ba6ff;
                    border: 2px solid #5ba6ff;
                    border-radius: 50%;
                    position: absolute;
                    top: 0.9em;
                    left: -0.5rem;
                }

                .date {
                    display: inline-block;
                    padding: 10px;
                    border-radius: 12px;
                    background: #d7ecff;
                    margin-bottom: 12px;
                }

                .date span {
                    color: #5ba6ff;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}
