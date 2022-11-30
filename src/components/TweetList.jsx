import { useContext } from 'react'
import { TweetsAddContext } from "../context/contextAdd"
import './TweetList.css'




function TweetList() {




        const { item } = useContext(TweetsAddContext)

        return (
                <>

                        {item.map((i) => (
                                <div className="postContainer">
                                        <span className="namestyle">{i.userName}</span>
                                        <span className="datestyle">{i.date}</span>
                                        <p className="textpoststyle">{i.content}</p>
                                </div>
                        ))}

                </>
        )


}

export default TweetList