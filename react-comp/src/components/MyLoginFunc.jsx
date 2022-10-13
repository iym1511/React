import {PropTypes} from "react"


// 함수형 컴포넌트
const MyLoginFunc = (props) => {
    const {login, name} = props;
    return(
        <div>
            {
                login ? (
                    <div>
                    <h1>로그인에 성공하였습니다.</h1>
                    <p>{name}입니다</p>
                    </div>
                ) : (
                    <h1>로그인이 필요합니다.</h1>
                )
            }
        </div>
    );
}
export default MyLoginFunc;

// Props의 자료형 설정
// import {PropTypes} from "prop-types";
// 위 내용을 가져와서 설정할 수 있다
/* MyLoginFunc.protoTypes = {
    login : PropTypes.bool,
} */
// props의 값이 들어오지 않았을때 대체할 값
MyLoginFunc.defaultProps = {
    name : "기본이름",
}