const Like = () => {

    const handleLike = () => {
        console.log("Liked");
    }

    return (
        <button className="p-2 mx-5 rounded bg-orange text-white" onClick={handleLike}>Like</button>
    )
}
export default Like;