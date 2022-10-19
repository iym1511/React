const MemoComp = (props) => {
    const {dispatch} = props
    return (  
        <div>
            <input type="text" onChange={
                // setState(e.target.value) >> dispatch 에서 쓸수있도록
                (e)=>{dispatch({type:'changeInput', payload : e.target.value})
                }}/>
        </div>
    );
}

export default MemoComp;