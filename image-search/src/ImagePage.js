import { useLocation } from 'react-router-dom'
import { useNavigate }  from 'react-router-dom'
import './ImagePage.css';
function ImagePage()  {
    const location = useLocation()
    const navigate = useNavigate();
    console.log(location.state.data)
    return (
    <div className='ImagePage'>
         <h1 className ='Author'>
         Posted by: {location.state.data.user}
        </h1>
        
        <img src={location.state.data.previewURL} alt="Photo Missing" width={location.state.data.previewWidth} height={location.state.data.previewHeight} width="400" height="400"/> 

        <div>
            <h5>
            Image tags: {location.state.data.tags}
            </h5>
        </div>

        <div>
            <h5>
            Likes: {location.state.data.likes}
            </h5>
            <img class="animated-gif" src="https://media.tenor.com/T4RTt4YaKkMAAAAC/like.gif" width="40" height="40"></img>
        </div>

        <div>
            <h5>
            Comments: {location.state.data.comments}
            </h5>
            <img class="animated-gif" src="https://cdn.dribbble.com/users/320087/screenshots/1391703/024_cloud.gif" width="40" height="40"></img>
        </div>

        <div> 
            <h5>
            Views: {location.state.data.views}
            </h5>
            <img class="animated-gif" src="https://cdn.dribbble.com/users/846207/screenshots/4757969/media/9dc94a48b17a5071043fb157780b28a6.gif" width="40" height="40"></img>
    
        </div>

    <button onClick = {() => {navigate(-1)}}>
        Go Back to Search!
    </button>
    </div>
    )

}

export default ImagePage;