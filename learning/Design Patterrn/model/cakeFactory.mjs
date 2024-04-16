import baker from "./staff.mjs"

export const oven = {
    makeCupcake(toppings){
        baker.bake("cupbake", toppings);
    },
    makeMuffin(mSize){
        baker.bake("muffin", size);
    }
}

// # 遠端來源載入的模組
import {cakeFactory} from "https://example/com/modules/cakeFactory.mjs/";
//急切載入的靜態匯入

cakeFactory.oven.makeCupcake( "sprinkles" );
cakeFactory.oven.makeMuffin( "large" );

//靜態匯入
import {cakeFactory} from "/modules/cakeFactory.mjs"
//急切載入的靜態匯入

cakeFactory.oven.makeCupcake( "sprinkles" );
cakeFactory.oven.makeMuffin( "large" );

