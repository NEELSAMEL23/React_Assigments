type ChildProps = {
    onClick: () => void;
    clicks: number;
};

function Child({ onClick, clicks }: ChildProps) {
    console.log("🟩 Child rendered");
    return (
        <div>
            <button onClick={onClick}>Child Button Clicked {clicks} times</button>
        </div>
    );
}

export default Child;
