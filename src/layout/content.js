import Breadcrumb from "./breadcrumb"
export default function Content(props) {

    return (
        <>
            <Breadcrumb title={props.blog.title} />
            <div className="bg-white rounded p-10">
                <div className="flex justify-between pb-4">
                    <p className="inline">{props.blog.date}</p>
                    <p className="inline">{props.blog.location}</p>
                </div>
                <p className="text-3xl font-semibold pb-4">{props.blog.title}</p>
                <p className="pb-4">{props.blog.quote}</p>
                <div className="content">
                    <div className="image-container w-full pb-8">
                    <img src={props.blog.image} alt={props.blog.alt} />
                    </div>
                    <div className="text-justify">
                    <p>{props.blog.content}</p>
                    </div>
                    
                </div>
            </div>
        </>

    )
}