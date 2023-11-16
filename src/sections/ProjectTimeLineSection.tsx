export default function ProjectTimeLineSection() {
    return (
        <>
            <div className="timeline-section">
                <div className="timeline-wrapper">
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
                    <div className="node">
                        <h3>Title</h3>
                        <p>Status / Time</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .timeline-wrapper {
                    margin-left: 1.5rem;
                    border-left: 3px solid #ddd;
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
                    border: 2px solid #ccc;
                    border-radius: 50%;
                    position: absolute;
                    top: 0.3rem;
                    left: -0.5rem;
                }
            `}</style>
        </>
    );
}
