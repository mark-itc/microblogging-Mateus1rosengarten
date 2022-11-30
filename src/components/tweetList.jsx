function TweetList ({name,date,textpost}) {

    return(
       <div className="postContainer">
           
               <span className="namestyle">{name}</span>
               <span className="datestyle">{date}</span>
               <p className="textpoststyle">{textpost}</p>
          
               
       </div>
    )
   
   
   }
   
   export default TweetList