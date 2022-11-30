    import { useState,useEffect} from "react"
import TweetList from "./tweetList"
import MaximumCaractheres from "./maximumCaractheres";



function TweetAdd () {
    const [item ,setItem] = useState ([]);
    const [post,setPost] = useState({nameObj:' ',dateObj:' ',textpostObj:' '});


    const handleAddPost = () => {

       const savedLogin = localStorage.getItem('user_Saved')
       
        
        const newItem = { userName : savedLogin, date : makingDate() ,content: post.textpostObj}
        item.unshift(newItem)
       
        setItem([...item])

        const sendData = async () => {
            const settings = {
            method: 'POST',
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(newItem) 
           
        } 
        try {
         const fetchResp = await fetch('https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet',settings)  
         const data = await fetchResp.json();
         return data; }

         catch(err){
            alert('An Error happened:the tweet was not added')
           

         }
        }   
         sendData()
         
    }

    const getData = async () => {
        try{
        const fetchResp = await fetch('https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet')
        const data = await fetchResp.json();
        setItem(data.tweets)
        return data.tweets; }

        catch(err){
            alert('An Error happened:the tweet was not added')
            

        }
        
     }

     useEffect(() => {
        getData()

     },[])

   


    

   

 
    const handleTextArea = (e) => {
        setPost({textpostObj : e.target.value});
    }

    const makingDate = () => {
        const datetoday = new Date ();
        const dateIso = datetoday.toISOString()
        return dateIso
    }




    return( <> 
        <div className="postBox">
            <textarea className="textareastyle" type="text" onChange={handleTextArea} placeholder='What you have in mind...' >
            </textarea>
             
            
          <button  disabled={post.textpostObj.length > 140 } onClick={handleAddPost} className="buttontweet">Tweet</button>
           {post.textpostObj.length > 140 && ( <MaximumCaractheres /> )}

        </div>
        <div className="listContainer">
          
        {item.map((i,index) => ( <TweetList 
             key = {index}
             name={i.userName} 
             date={i.date} 
             textpost={i.content} />
        ))}
            

        </div>

       
        </>
    )

}

export default TweetAdd