function phonePrices(phone) {
    let cheapest = phone[0];
    for (let i = 0; i < phone.length; i++) {
        if (phone[i].Price < cheapest.Price) {
            cheapest = phone[i];
        }
    }
    return cheapest.Name + " is the cheapest phone worth " + cheapest.Price + " taka"
}

function bestCamera(phone) {
    let bestCam = phone[0];
    for (let i = 0; i < phone.length; i++) {
        if (phone[i].Camera > bestCam.Camera) {
            bestCam = phone[i];
        }
    }
    return bestCam.Name + " is the Best camera phone with " + bestCam.Camera + " MP camera";
}

let phonesDetails = [
    { Name: "Samsung", Camera: 200, Storage: "1028gb", Price: 78000, Color: "Silver" },
    { Name: "Iphone", Camera: 12, Storage: "128gb", Price: 93000, Color: "Silver" },
    { Name: "Xiaomi", Camera: 108, Storage: "512gb", Price: 65000, Color: "Silver" },
    { Name: "Oppo", Camera: 150, Storage: "256gb", Price: 40000, Color: "Silver" },
    { Name: "Vivo", Camera: 150, Storage: "256gb", Price: 35000, Color: "Silver" },
    { Name: "Huawei", Camera: 64, Storage: "128gb", Price: 68000, Color: "Silver" }
]
let cheapestPrice = phonePrices(phonesDetails);
let bestCameraPhone = bestCamera(phonesDetails);
console.log(cheapestPrice);
console.log(bestCameraPhone);



