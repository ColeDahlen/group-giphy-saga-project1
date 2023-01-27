

function ListItem({ gif }) {
    console.log(gif)
    return(
        <>
        <h1> you got a gif </h1>
        <img src={gif.images.original.url} />
        </>
    )
}

export default ListItem;