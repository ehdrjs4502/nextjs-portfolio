interface TitleProps {
    title: string;
    subTitle: string;
}

export default function Title({ title, subTitle }: TitleProps) {
    return (
        <>
            <div className="title-box">
                <h4>{title}</h4>
                <h5>{subTitle}</h5>
            </div>
            <style jsx>{`
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
