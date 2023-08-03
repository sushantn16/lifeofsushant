const Share = () => {

    const handleShared = () => {
        console.log("Shared");
    }

    return (
        <button className="p-2 rounded bg-orange text-white" onClick={handleShared}>Share</button>
    )
}
export default Share;