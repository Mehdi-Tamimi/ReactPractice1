import '../components/CSS/Picture.css'


const Picture = ({picture}) => {

    return(
        <div className="picture">
           <img className="picturestyle" src={picture}/>
        </div>
    )
    
}
export default Picture;