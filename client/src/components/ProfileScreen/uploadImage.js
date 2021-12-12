import { IMGUR_API_UPLOAD } from "../../consts";

export const uploadImage = (user, setUser, field) => (event) => {
    console.log("uploading");
    const data = new FormData();
    data.append('image', event.target.files[0]);

    fetch(`${IMGUR_API_UPLOAD}`,
    {
        "method": "POST",
        "headers": {
            
            "Authorization": "Client-ID 726a5f8440a17e1"
        },
        body: data,
    }).then((res) => res.json())
    .then((res) => {
        user[field] = res.data.link;
    setUser(user)
    console.log(user) })
    
}