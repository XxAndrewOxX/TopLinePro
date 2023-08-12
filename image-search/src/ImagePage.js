import { useLocation } from 'react-router-dom'
import { useNavigate }  from "react-router-dom"
function ImagePage()  {
    const location = useLocation()
    const navigate = useNavigate();
    console.log(location.state.data)
    return (
    <div>
         <h1>
         Posted by: {location.state.data.user}
        </h1>
        <div>
    
        <img src={location.state.data.previewURL} alt="Photo Missing" width={location.state.data.previewWidth} height={location.state.data.previewHeight}/> 
        <h4>
        Image tags: {location.state.data.tags}
        </h4>

        <h5>
        Likes: {location.state.data.likes}

        </h5>
        <h5>
        Comments: {location.state.data.comments}
        </h5>
        <h5>
        Views: {location.state.data.views}
        </h5>
        </div>

    <button onClick = {() => {navigate(-1)}}>
        Go Back to Search!
    </button>
    </div>
    )

}

export default ImagePage;