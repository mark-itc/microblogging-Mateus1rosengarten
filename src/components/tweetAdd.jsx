import { useState,useEffect } from "react"
import TweetList from "./tweetList"
import MaximumCaractheres from "./MaximumCaractheres";


function TweetAdd () {
    const [item ,setItem] = useState ([]);
    const [post,setPost] = useState({nameObj:' ',dateObj:' ',textpostObj:' '});

    const handleAddPost = () => {
        
        const newItem = { postusername : "Mateus" , postdate : makingDate() ,posttext: post.textpostObj}
        item.unshift(newItem)
       
        setItem([...item])
        
    }

    useEffect(() => {
        const savedData = localStorage.getItem('MY_TWEETS')
        console.log('saved',savedData)
        localStorage.setItem('OLD_TWEETS',JSON.stringify(savedData))
        savedData != null && setItem(JSON.parse([savedData]))

    },[])

    useEffect(() => {
        localStorage.setItem('MY_TWEETS',JSON.stringify(item))
        console.log('renderizou',item)

    },[item])
 
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
            <button disabled={post.textpostObj.length > 140} onClick={handleAddPost} className="buttonstyle">Tweet</button>
            {post.textpostObj.length > 140 && (<MaximumCaractheres />)}

        </div>
        <div className="listContainer">
          
        {item.map((i,index) => ( <TweetList 
             key = {index}
             name={i.postusername} 
             date={i.postdate} 
             textpost={i.posttext} />
        ))}
            

        </div>

       
        </>
    )

}

export default TweetAdd