type ChildProps = {
    onClick: () => void;
    clicks: number;
};

const Child: React.FC<ChildProps> = ({ onClick, clicks }) => {
    console.log("🟩 Child rendered");
    return (
        <div>
            <button onClick={onClick}>
                Child Button Clicked {clicks} times
            </button>
        </div>
    );
};


export default Child;
