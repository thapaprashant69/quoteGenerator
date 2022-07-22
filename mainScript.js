    const heading = document.querySelector("#quote");
    const author = document.querySelector("#author");

    const fetchData = async()=>{
        try{
        const res = await fetch("http://localhost:8000/quotes");
        const data = await res.json();
        heading.innerText = data.text;
        author.innerText = data.author;
        }catch(err){
            console.log(err);
        }
    }

    fetchData();


    //Traditional function definition commented here which works then same with try-catch
    // async function fetchData(){
    //     const res = await fetch("http://localhost:5000/quotes");
    //     const data = await res.json();
    //     heading.innerText = data.text;
    //     author.innerText=data.author;
    // }


    //Traditional method of fetching data handled with Promises
    // fetch("http://localhost:5000/quotes").then((res)=>{
    //     res.json().then((data)=>{
    //         heading.innerText=data.text;
    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    // }).catch((err)=>{
    //     console.log(err);
    // });
