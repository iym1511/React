const LoginFormComp = (props) => {
    const {setLogin, setName} = props
    return (           // form으로 감싸놔서 div로 안 감싸도됨
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                setLogin(true)
            }}>
                <input type="text" onChange={(e)=>{ setName(e.target.value)}}/>
                <input type="submit"  value="로그인"/>
            </form>
    );
}

export default LoginFormComp;