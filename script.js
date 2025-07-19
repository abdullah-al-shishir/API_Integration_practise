

// const posts=[
//     {
//         title:`Title 2`,
//         body: `Body 2`
//     },
//     {
//         title:`Title 2`,
//         body: `Body 2`
//     },
//     {
//         title:`Title 2`,
//         body: `Body 2`
//     },
//     {
//         title:`Title 2`,
//         body: `Body 2`
//     },
//     {
//         title:`Title 2`,
//         body: `Body 2`
//     },
//     {
//         title:`Title 2`,
//         body: `Body 2`
//     },
//     {
//         title:`Title 2`,
//         body: `Body 2`
//     },
// ]


const fetchData=async(url)=>{
    try{
        const res= await axios(url) ;
        return res.data;
    }catch(error){
        throw Error(`Error`);
    }
    
    
}


const postsElement=document.querySelector(".posts");

const loadAllData=async()=>{
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((posty)=>{
        const postElement=document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML=`<h4 class="post-title">${posty.title}</h4>
            <p class="post-body">${posty.body}</p>`;
        postsElement.appendChild(postElement);    
        
    })
}
loadAllData();







