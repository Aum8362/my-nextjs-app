import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { IoArrowBackCircle } from "react-icons/io5";


export default function ProductDetail({product}){

    console.log('product',product)
    return ( <>
        <Head>
            <title>Product Detail Page</title>
        </Head>
        <div 
            style={{ background: "linear-gradient(90deg, rgb(186 136 253) 0%, rgba(148, 187, 233, 1) 100%);" }}
            className="min-h-screen justify-items-center p-5 bg-white">

            <Link href="/products" className="flex justify-self-start mb-10">
                <IoArrowBackCircle className="text-6xl"/>
            </Link>

            <div className="w-full md:w-1/2">
                <p className="text-4xl text-center font-black">{product.title}</p><br/>
                <Image 
                    src={product.image}
                    alt={product.title}
                    className = "w-[180px] h-[220px] mix-blend-multiply justify-self-center"
                    width={200}
                    height={240}
                />
                <div>
                    <br/>
                    <p>
                        <b>Cetegory : </b>{product.title}
                    </p>
                    <p>
                        <b>Description : </b>{product.description}
                    </p>
                    <p>
                        <b>Price : </b>{product.price}
                    </p>
                    <p>
                        <b>Rating : </b>{product.rating.rate}
                    </p>
                    <p>
                        <b>Count : </b>{product.rating.count}
                    </p>
                </div>

            </div>
        </div>
    </>)
}

export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    const product = await resp.json()

    return {
        props: { product }
    }
}