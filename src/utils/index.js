import toast from "react-hot-toast"


const getAllFavorites=()=>{
    const all =localStorage.getItem('favorites')
   
   if(all){
    const favorites =JSON.parse(all)
    console.log(favorites)
    return favorites
   }else{
    console.log([])
    return []
   }
}
const getAllWishlist =()=>{
    const all =localStorage.getItem('wishlist')
    if(all){
        const wishlist =JSON.parse(all)
        console.log(wishlist)
        return wishlist
       }else{
        console.log([])
        return []
       }
  
}




const addFavorites=device=> {
    const favorites =getAllFavorites()
    const isExist =favorites.find(item =>item.product_id ==device.product_id)
    if(isExist) return toast.error('Already added.Do not add again')
   
    favorites.push(device)
    localStorage.setItem('favorites',JSON.stringify(favorites))
    toast.success('successfully added')
}

const addWishlist =device=>{
    const wishlist =getAllWishlist()
    const isExistWish =wishlist.find(item =>item.product_id ==device.product_id)
    if(isExistWish) return toast.error('Already added.Do not add again')
    wishlist.push(device)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    toast.success('successfully added')
}





export {addFavorites ,getAllFavorites ,addWishlist,getAllWishlist}