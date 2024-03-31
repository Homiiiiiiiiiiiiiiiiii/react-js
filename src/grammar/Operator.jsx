function Operator() {
    return(
        <div>
            <h2>연산자</h2>
            <h3>논리 연산자</h3>
            {/* && : 두 조건이 참일 경우 true 반환 */}
            <p>{true && true}</p>   {/*true*/}
            <p>{true && false}</p>  {/*false*/}
            {/* || : 두 조건 중 하나라도 참일 경우 true 반환 */}
            <p>{true || false}</p>  {/*true*/}
            <p>{false || false}</p> {/*false*/}
            {/* ! : 논리값을 부정 */}
            <p>{!true}</p>          {/*false*/}
        </div>
    )
}

export default Operator;