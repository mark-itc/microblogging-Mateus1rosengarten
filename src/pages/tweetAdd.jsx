import { useContext, useEffect } from "react"
import TweetList from "../components/TweetList"
import MaximumCaractheres from "../components/MaximumCaractheres";
import { TweetsAddContext } from "../context/contextAdd";
import LoaderComponent from "../components/Loader";
import { FunctionContext } from "../context/contextAdd";


function TweetAdd() {



    const { setItem } = useContext(TweetsAddContext)
    const { post, setPost } = useContext(TweetsAddContext)
    const { load, setLoad } = useContext(TweetsAddContext)
    const { buttonDisabled, setButtonDisabled } = useContext(TweetsAddContext)
    const { AddTweetContext } = useContext(FunctionContext)
    const savedLogin = localStorage.getItem('user_Saved')



    const getData = async () => {

        const fetchResp = await fetch('https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet')
        const data = await fetchResp.json();


        setItem(data.tweets)
        return data.tweets;
    }




    useEffect(() => {
        const interval = setInterval(() => {

            setTimeout(() => {
                setLoad(true)
                setButtonDisabled(true)

            });

            setTimeout(() => {
                setLoad(false)
                setButtonDisabled(false)


            }, 1000);



            getData()
           



        }, 60000)
        return () => clearInterval(interval)




    }, []);

    const handleTextArea = (e) => {
        setPost({ textpostObj: e.target.value });
    }






    return (<>

        <div className="postBox">
            <textarea className="textareastyle" type="text" onChange={handleTextArea} placeholder={'What you have in mind...'} >
            </textarea>


            <button id="button" style={{ opacity: buttonDisabled && '0.5' }} disabled={post.textpostObj.length > 140  ||  buttonDisabled} onClick={AddTweetContext} className="buttontweet">Tweet</button>
            {post.textpostObj.length > 140 && (<MaximumCaractheres />)}


        </div>
        {load ? (<LoaderComponent />) : <> </>}
        <div className="listContainer">
            <TweetList />
        </div>
    </>
    )

}

export default TweetAdd