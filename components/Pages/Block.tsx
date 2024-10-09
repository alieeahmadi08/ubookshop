

export const Block = props => {


    if(!props.state.cart)
    {
        props.state.cart = []
    }

    return <c-c style={{
        width: 150, flex: 1, minWidth: 150,
        position: "relative" , backgroundColor:"white" , borderRadius:5,
        margin:"7px" , boxShadow:"0px 0px 9px 2px rgba(0,0,0,0.43)"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{ width: 150, height: 200, objectFit: "fill", minWidth: 150 ,
                borderTopLeftRadius:5 , borderTopRightRadius:5
            }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()
               
            }} />



            <f-cc style={{direction:"ltr" , padding:"5px 0" , width:"100%" , height:40}}>
                <f-11>{props.book.title}</f-11>
            </f-cc>

            <hr style={{width:"80%" , opacity:0.2 , }}/>
            
            <f-csb style={{width:"100%" , padding:"5px 5px"}}>
                
                <img src={props.state.cart.includes(props.book.title)?
                "https://cdn.ituring.ir/research/70/tik.webp":
                "https://cdn.ituring.ir/research/70/sabad1.webp"}
                style={{height:30 , width:30 , objectFit:"contain" , margin:"0 7px"}}/>

                <c-x style={{direction:"ltr" , margin:"0 10px"}}>
                    <f-12><del>{(props.book.price as number).toLocaleString("fa-IR")}تومان</del></f-12>
                    <f-16>{(props.book.price*0.8 as number).toLocaleString("fa-IR")}تومان</f-16>
                </c-x>

            </f-csb>


    </c-c>
}

