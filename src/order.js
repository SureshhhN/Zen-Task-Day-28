function Order(props) {
    return (
      <ul class="order-group order-group-horizontal-xxl">
        <li class="order-group-item" style={{display:"flex",justifyContent:"space-around"}}>
          {props.itemname.title} ${props.itemname.price}
          <p> <span onClick={()=>props.del(props.itemname.id)} >x</span></p>
        </li>
        
      </ul>
    );
  }
  
  export default Order;

