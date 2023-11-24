export default function Chip(props){
    console.log(props)
    return(
        <div className=" inline border rounded p-2 m-2">{props.data}</div>
    )
}