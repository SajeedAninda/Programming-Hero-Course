function wood(chair, table, bed) {
    let woodForChair = chair * 3;
    console.log("Total wood required to build " + chair + " Chairs will be " + woodForChair + " CFT");

    let woodForTable = table * 10;
    console.log("Total wood required to build " + table + " Tables will be " + woodForTable + " CFT");

    let woodForBed = bed * 50;
    console.log("Total wood required to build " + bed + " Beds will be " + woodForBed + " CFT");

    let totalWood = woodForChair + woodForBed + woodForTable;
    console.log("The total wood required will be " + totalWood + " CFT");
}
wood(6, 1, 1);