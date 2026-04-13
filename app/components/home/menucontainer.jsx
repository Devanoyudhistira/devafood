import Foodcard from "./foodcard"

export default function Menucontainer({food}){
    return(
        <div className="w-full px-6 mt-4 grid grid-cols-2 gap-y-6 gap-x-2 pb-10" >
        {food.map(
          e => <Foodcard nama={e.name} id={e.id} image={e.gambar.trimEnd()} harga={e.harga} desc={e.description} key={e.id}  />
        )}
      </div>
    )
}