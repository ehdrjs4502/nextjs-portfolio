export default function IntroSection() {
    return (
        <>
            <div className="intro_section">
                <div className="title_box">
                    <h4>안녕하세요!</h4>
                    <h5>
                        <strong className="strong_blue">프론트엔드 개발자</strong> 김동건입니다.
                    </h5>
                </div>

                <div className="info_box">
                    <div className="img_box">증명사진</div>
                    <div>
                        <div>
                            <span>이름</span>
                            <span>김동건</span>
                        </div>
                        <div>
                            <span>Phone</span>
                            <span>010-9243-4502</span>
                        </div>
                        <div>
                            <span>Mail</span>
                            <span>ehdrjs4502@gmail.com</span>
                        </div>
                        <div>
                            <span>Github</span>
                            <span>https://github.com/ehdrjs4502</span>
                        </div>
                    </div>
                </div>

                <div className="about_box">
                    <h5>About Me</h5>
                </div>
            </div>
            <style jsx>
                {`
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

                    .intro_section {
                        display: flex;
                        flex-wrap: wrap;
                        align-content: center;
                        flex-direction: column;
                        height: 100vh;
                        margin: 0;
                    }

                    .img_box {
                        width: 190px;
                        height: 250px;
                        background-color: gray;
                    }

                    .info_box {
                        display: flex;
                        justify-content: space-between;
                    }

                    .about_box {
                        text-align: center;
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
