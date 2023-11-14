export default function SkillBox({ icons }: any) {
    return (
        <div className="skill_box">
            {icons.map((icon: any, index: number) => (
                <div key={index} className="icon_container">
                    {icon}
                </div>
            ))}
            <style jsx>{`
                .skill_box {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    justify-items: center;
                    gap: 50px 1px;
                }

                .icon_container {
                    width: 60px;
                    height: 60px;
                }
            `}</style>
        </div>
    );
}
