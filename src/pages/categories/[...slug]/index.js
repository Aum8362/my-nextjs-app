import { useRouter } from "next/router"

export default function Categories() {
    const router = useRouter();
    const{slug} = router.query;

    return (
    <div>
        <h1>Categories page</h1>
        <p>slug STRING : {slug}</p>
        <p>slug : [JSON,stringify(slug)]</p>
    </div>
    )
        
}