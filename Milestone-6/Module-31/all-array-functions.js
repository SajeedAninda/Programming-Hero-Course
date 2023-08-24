const laptops = [
    {
      id: 1,
      brand: "Apple",
      model: "MacBook Pro",
      price: 1499,
    },
    {
      id: 2,
      brand: "Dell",
      model: "Latitude 7420",
      price: 1299,
    },
    {
      id: 3,
      brand: "HP",
      model: "Spectre x360",
      price: 1199,
    },
    {
      id: 4,
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
      price: 1099,
    },
    {
      id: 5,
      brand: "Asus",
      model: "ZenBook Duo",
      price: 999,
    },
    {
      id: 6,
      brand: "Microsoft",
      model: "Surface Laptop Studio",
      price: 1999,
    },
    {
      id: 7,
      brand: "Razer",
      model: "Blade 15",
      price: 2499,
    },
    {
      id: 8,
      brand: "Acer",
      model: "Predator Triton 500 SE",
      price: 2999,
    },
    {
      id: 9,
      brand: "MSI",
      model: "GS66 Stealth",
      price: 2799,
    },
    {
      id: 10,
      brand: "Gigabyte",
      model: "Aero 16",
      price: 2599,
    },
  ];
  
//   let prices=laptops.map(p=>p.price);
// //   console.log(prices);
 
//   let finding=(brnd)=>{
//       return brnd.brand+":"+brnd.price;
//     }
//     let brands=laptops.map(finding);
//     console.log(brands);

// let filtered=laptops.filter(prc=>prc.price>2000);
// console.log(filtered.map(ids=>ids.brand+":"+ids.model));

let priceSum=laptops.reduce((acc,curr)=>acc+curr.price,0);
console.log(priceSum);