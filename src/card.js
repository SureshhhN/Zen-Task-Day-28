
function Card(a){
    return( <div className='col-lg-4'>
    <div className="card" style={{width: "15rem"}}>
    <img src={`https://picsum.photos/200/150?random=${Math.floor(Math.random() *50)}`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{a.name.title}</h5>
    <p className="card-text">Shopping cart software is a piece of e-commerce software on a web server that allows visitors to have an Internet site to select items for eventual purchase.</p>
    
    <h6>${a.name.price}</h6>
    <button disabled={ a.cartitems.some(obj=>obj.id===a.name.id)} className="btn btn-primary" onClick={()=>a.addtocart(a.name.id)}>Add to cart +</button>
  </div>
</div>
</div>
)
}

export default Card