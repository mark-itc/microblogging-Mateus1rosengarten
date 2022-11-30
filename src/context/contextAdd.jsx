import { useState, createContext } from "react"


export const TweetsAddContext = createContext();
export const FunctionContext = createContext();

function AddContext({ children }) {
    const [item, setItem] = useState([]);
    const [post, setPost] = useState({ nameObj: ' ', dateObj: ' ', textpostObj: ' ' });
    const [load, setLoad] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
   

    const AddTweetContext = () => {

    

        const makingDate = () => {
            const datetoday = new Date();
            const dateIso = datetoday.toISOString();
            return dateIso

        }


        const savedLogin = localStorage.getItem('user_Saved')
        const newItem = { userName: savedLogin, date: makingDate(), content: post.textpostObj }
        item.unshift(newItem)

        const sendData = async () => {
            const settings = {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newItem)

            }


        if( post.textpostObj.length > 2 && savedLogin.length > 2){
            setItem([...item])}
           
        

            setTimeout(() => {
                setLoad(true)
                setButtonDisabled(true)

            });

            setTimeout(() => {
                setLoad(false)
                setButtonDisabled(false)


            }, 500);



            if (newItem.userName.length > 1 && newItem.userName.length <= 60 && newItem.content.length > 1 && newItem.content.length < 140) {

                const fetchResp = await fetch('https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet', settings)
            

                if (fetchResp.status === 200) {
                    const data = await fetchResp.json();
                    return data;
                }
            }



            else {
                alert('Server Error : Your username cant be less than 1 and more than 60 characteres,Your content cant be less than 1 and more than 140 characteres')
            }


        }

        sendData()
    }


    return (
        <FunctionContext.Provider value={{ AddTweetContext }}>
            <TweetsAddContext.Provider value={{ item, setItem, post, setPost, load, setLoad, buttonDisabled, setButtonDisabled}}>
                {children}
            </TweetsAddContext.Provider>
        </FunctionContext.Provider>
    )
}



export default AddContext