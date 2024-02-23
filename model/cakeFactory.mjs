import baker from "./staff.mjs"

export const oven = {
    makeCupcake(toppings){
        baker.bake("cupbake", toppings);
    },
    makeMuffin(mSize){
        baker.bake("muffin", size)
    }
}