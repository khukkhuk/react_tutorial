export default function Product(){
    // const products = ["Laptop","Phone","Modem","Computer"];
    const products = [
        {id:1,name:"Laptop",price:500},
        {id:2,name:"Phone",price:200},
        {id:3,name:"Modem",price:50},
        {id:4,name:"Computer",price:900},
    ];
    const productList = products.map((product)=>(
                            <h3 key={product.key}>{product.name} : {product.price}</h3>
                        )) 
    
    return(
        <div>
            {productList}
        </div>
    )
}