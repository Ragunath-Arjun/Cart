export default function Cart({ cartList,removeCart }) {
  return (
    <ol class="list-group list-group-numbered">
      {cartList.map((item) => {
        return (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold bold">{item.name}</div>
              {item.price}
            </div>
            <button className="btn btn-danger btn-small" onClick={()=>{
              removeCart(item)
            }}>X</button>
          </li>
        );
      })}
    </ol>
  );
}
