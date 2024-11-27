

import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cardSlice=createSlice({
    name:"mycard",
    initialState:{
        card:[]
    },
    reducers:{
        addToCard:(state,actions)=>{
            const mydata=state.card.filter((key)=>key.id==actions.payload.id)
            if(mydata.length>=1){
                message.error("Product Already Added!!!")
            }
            else{
                state.card.push(actions.payload)
                message.success("Product Successfuly Added!!!");
            }
        },
        qntyIncrement:(state, actions)=>{
            for (var i=0; i<state.card.length; i++)
            {
                if (state.card[i].id==actions.payload.id)
                {
                    state.card[i].qnty++;
                }
            }
        },
        qntyDecrement:(state,actions)=>{
            for(var i=0;i<state.card.length;i++){
                if(state.card[i].id==actions.payload.id)
                    if(state.card[i].qnty<=1){
                        message.error("Quantity not less than one")
                    }
                    else{
                        state.card[i].qnty--
                    }
            }
        },
        datadlt:(state,actions)=>{
            state.card=state.card.filter(key=>key.id!=actions.payload)
        }
    }

    
})
export const{addToCard,qntyIncrement,qntyDecrement,datadlt}=cardSlice.actions;
export default cardSlice.reducer;