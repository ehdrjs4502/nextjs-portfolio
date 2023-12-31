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
            date: "2023. 03 ~ 06 (4개월)",
            name: "Save Song!",
            summaryList: [
                <span>
                    <strong>React.js, TypeScript. Node.js</strong>를 활용한 개인 프로젝트
                </span>,
                <span>
                    <strong>last.fm Open API</strong>를 통한 노래 검색 기능 구현
                </span>,
                <span>
                    다른 사용자와 노래 공유할 수 있도록 <strong>사용자 검색 기능 및 팔로우 기능 구현</strong>
                </span>,
                <span>
                    <strong>Youtube API</strong>를 통해 노래 재생 기능 구현
                </span>,
                <span>
                    <strong>Python Selenium</strong>을 활용하여 tj 노래방 인기차트 크롤링 및 데이터베이스에 저장 기능
                    구현
                </span>,
            ],
        },
        {
            date: "2022. 09 ~ 12 (4개월)",
            name: "연도별 자연재해 시각화 웹 사이트",
            summaryList: [
                <span>
                    <strong>React.js, Node.js</strong>를 활용한 개인 프로젝트
                </span>,
                <span>
                    <strong>Apex.js 라이브러리</strong>를 통한 자연재해 피해량 차트 구현
                </span>,
                <span>
                    행정지도 SVG 를 활용해 시도별 <strong>자연재해 피해량 시각화</strong> 구현
                </span>,
                <span>
                    <strong>Python Selenium</strong>을 활용하여 국민재난안전포털 데이터 크롤링 및 DB 저장 구현
                </span>,
            ],
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
                                        <li className="summary">{text}</li>
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
                    height: 100%;
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

                .summary {
                    line-height: 50px;
                }
            `}</style>
        </>
    );
}
