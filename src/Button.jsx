function Button(){
    let count=0;
    const handleClick=(name)=>{
        if(count<10){
            count++;
            console.log("Button clicked",count);
        }
        else{
            console.log(`Button clicked 10 times ${name}, no more clicks allowed`);
        }
};
    return (
        <button onClick={() => handleClick("jude")} className="button">
            Click Me
        </button>
    );
}

export default Button;