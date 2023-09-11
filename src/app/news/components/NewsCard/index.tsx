export type NewsCardProps = {
    title: string;
    description: string;
    imageUrl: string;
};

const NewsCard = (props: NewsCardProps) => {
    return (
        <div className="flex flex-row justify-between my-2 mx-2">
            <div className="w-3/4">
                <h1 style={{
                    fontWeight: 700,
                    fontSize: "14px"
                }}>{props.title}</h1>
                <p style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                }}>{props.description}</p>
            </div>
            <div className="w-1/4 flex justify-center items-center ">
                <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: "4px",
                    background: `url(${props.imageUrl})`,
                    backgroundSize: "cover",
                }}>
                </div>
            </div>
        </div>
    )

};

export default NewsCard;


