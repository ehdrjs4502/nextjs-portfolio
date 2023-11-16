import Title from "@/components/Title";

export default function ProjectTimeLineSection() {
    return (
        <>
            <div className="timeline-section">
                <div>
                    <Title
                        title="프로젝트 타임라인"
                        subTitle="가치 있는 개발자로 성장하기 위해 연도별로 진행한 프로젝트 목록입니다."
                    />
                    <div className="timeline-box">
                        <div className="node">
                            <div>2023. 03 ~ 06 (4개월)</div>
                            <h3>Title</h3>
                            <p>Status / Time</p>
                        </div>
                        <div className="node">
                            <h3>Title</h3>
                            <p>Status / Time</p>
                        </div>
                        <div className="node">
                            <h3>Title</h3>
                            <p>Status / Time</p>
                        </div>
                        <div className="node">
                            <h3>Title</h3>
                            <p>Status / Time</p>
                        </div>
                        <div className="node">
                            <h3>Title</h3>
                            <p>Status / Time</p>
                        </div>
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
                    border-left: 3px solid rgb(255, 175, 175);
                }
                .node {
                    padding-left: 0.5rem;
                    padding-bottom: 1.5rem;
                    position: relative;
                }
                .node h3,
                .node p {
                    margin: 0;
                }
                .node::before {
                    content: "";
                    width: 0.5rem;
                    height: 0.5rem;
                    background: #fff;
                    border: 2px solid rgb(255, 175, 175);
                    border-radius: 50%;
                    position: absolute;
                    top: 0.3rem;
                    left: -0.5rem;
                }
            `}</style>
        </>
    );
}
