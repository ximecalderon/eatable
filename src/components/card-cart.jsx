import styled from "@emotion/styled";

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem;
  gap: 1.25rem;
`


function CartCard() {
  return(
    <CardContainer >
      <img style={{width:"62px",borderRadius:"50%", height:"62px"}} src="https://img.freepik.com/free-photo/top-view-green-cream-soups_23-2148519096.jpg" alt="" />
      <div>
        <p>Veggie Tomato Mix</p>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>$75.45</p>
          <div style={{display:"flex"}} >
            <button>-</button><p>5</p><button>+</button>
          </div>
        </div>
      </div>
    </CardContainer>
    )
}

export default CartCard;
