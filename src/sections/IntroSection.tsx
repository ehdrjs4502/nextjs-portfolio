export default function IntroSection() {
    return (
        <>
            <section className="intro_section">
                <div className="intro_box">
                    <div className="title_box">
                        <h4>안녕하세요!</h4>
                        <h5>
                            <strong className="strong_blue">프론트엔드 개발자</strong> 김동건입니다.
                        </h5>
                    </div>

                    <div className="info_box">
                        <div className="img_box">증명사진</div>
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

                    <div className="about_box">
                        <h5>About Me</h5>
                        <span>
                            <strong className="strong_blue">React.js</strong>, <strong>Next.js</strong>를 활용하여{" "}
                            <strong>프론트엔드 개발</strong>을 수행하는 개발자
                        </span>
                        <span>
                            팀과 개인을 가리지 않고, 여러 프로젝트 경험으로 <strong>실력</strong>과{" "}
                            <strong>실무 감각</strong>을 쌓아가는 개발자
                        </span>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    .intro_section {
                        width: 100%;
                        height: 100vh;
                        min-height: 800px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .intro_box {
                        width: 650px;
                    }

                    .title_box {
                        text-align: center;
                    }

                    .title_box h4 {
                        font-size: 38px;
                        margin: 0;
                        margin-top: 14px;
                    }

                    .title_box h5 {
                        font-size: 32px;
                        margin: 0;
                        margin-top: 14px;
                    }

                    .img_box {
                        width: 190px;
                        height: 250px;
                        background-color: gray;
                    }

                    .info_box {
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

                    .about_box {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        justify-content: space-around;
                        height: 200px;
                    }

                    .about_box h5 {
                        font-size: 32px;
                        margin: 0;
                        margin-top: 14px;
                    }

                    .strong_blue {
                        color: #5ba6ff;
                    }
                `}
            </style>
        </>
    );
}
