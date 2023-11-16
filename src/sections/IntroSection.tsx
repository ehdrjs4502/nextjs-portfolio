export default function IntroSection() {
    return (
        <>
            <section className="intro-section">
                <div className="intro-box">
                    <div className="title-box">
                        <h4>안녕하세요!</h4>
                        <h5>
                            <strong className="strong-blue">프론트엔드 개발자</strong> 김동건입니다.
                        </h5>
                    </div>

                    <div className="info-box">
                        <div className="img-box">증명사진</div>
                        <div className="info">
                            <div>
                                <span>Name</span>
                                <strong>김동건</strong>
                            </div>
                            <div>
                                <span>Phone</span>
                                <strong>010-9243-4502</strong>
                            </div>
                            <div>
                                <span>Mail</span>
                                <strong>ehdrjs4502@gmail.com</strong>
                            </div>
                            <div>
                                <span>Github</span>
                                <strong>github.com/ehdrjs4502</strong>
                            </div>
                        </div>
                    </div>

                    <div className="about-box">
                        <h5>About Me</h5>
                        <span>
                            <strong className="strong-blue">React.js</strong>,{" "}
                            <strong style={{ color: "#3C3C3C" }}>Next.js</strong>를 활용하여{" "}
                            <strong>프론트엔드 개발</strong>을 수행하는 개발자
                        </span>
                        <span>
                            팀과 개인을 가리지 않고, 여러 프로젝트 경험으로{" "}
                            <strong style={{ color: "#5EA8FF" }}>실력</strong>과{" "}
                            <strong style={{ color: "#FF4F4F" }}>실무 감각</strong>을 쌓아가는 개발자
                        </span>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    .intro-section {
                        width: 100%;
                        height: 100vh;
                        min-height: 800px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .intro-box {
                        width: 650px;
                    }

                    .title-box {
                        text-align: center;
                    }

                    .title-box h4 {
                        font-size: 38px;
                        margin: 0;
                        margin-top: 14px;
                    }

                    .title-box h5 {
                        font-size: 32px;
                        margin: 0;
                        margin-top: 14px;
                    }

                    .img-box {
                        width: 190px;
                        height: 250px;
                        background-color: gray;
                    }

                    .info-box {
                        margin-top: 50px;
                        margin-bottom: 20px;
                        display: flex;
                        justify-content: space-evenly;
                    }

                    .info {
                        display: grid;
                        grid-gap: 1.5rem;
                        grid-template-rows: repeat(4, 1fr);
                        height: 100%;
                    }

                    .info div {
                        padding: 10px;
                        border: 1px solid #b5b5b5;
                        border-radius: 14px;
                    }

                    .info div span {
                        display: inline-block;
                        width: 70px;
                    }

                    .about-box {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        justify-content: space-around;
                        height: 200px;
                    }

                    .about-box h5 {
                        font-size: 32px;
                        margin: 0;
                        margin-top: 14px;
                    }

                    .strong-blue {
                        color: #5ba6ff;
                    }
                `}
            </style>
        </>
    );
}
