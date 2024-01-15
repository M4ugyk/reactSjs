import React from "react";

const makanans = [
{ 
    nama: 'Soto',
    harga: 12000
},
{
    nama: 'Bakso',
    harga: 10000
},
{
    nama: 'Mie Ayam',
    harga: 15000
},
{
    nama: 'Nasi Goreng',
    harga: 15000
}
]


const total_bayar_filter = makanans.filter((makanan1) => makanan1.harga > 11000).reduce((total_harga, makanan1) => {
    return total_harga+makanan1.harga;
}, 0)

const total_bayar= makanans.reduce((total_harga, makan) => {
    return total_harga+makan.harga;
}, 0)

const Map = () => {
    return (
        <div>
            <h2>maping</h2>
            <ul>
                {makanans.map((makan, index) => ( 
                    <li>{index + 1} Makanan {makan.nama} = Harga {makan.harga}</li>
                ))}
            </ul>
   
            <h2>Map Filter Harga yang lebih dari 11.000 </h2>
            <ul>
                {makanans.filter((makanan1) => makanan1.harga > 11000)  
                    .map((makanan1, index) =>(
                 <li>{index + 1}. {makanan1.nama} = Harga {makanan1.harga}</li> 
                 ))}
                 </ul>

                 <h3>Total Bayar Filter: {total_bayar_filter}</h3>
                 <h3>Total Bayar : {total_bayar}</h3>
                 </div>
    )
}

export default Map;