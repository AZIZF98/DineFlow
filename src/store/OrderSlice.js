import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            id: "ORD-001",
            table: "Meja 1",
            items: [
                {itemId: 1, qty: 2},
                {itemId: 3, qty: 2},
            ],
            total: 146000,
            status: 0,
            time: "Baru saja",
// time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) // TODO: Gunakan waktu real jika backend siap
        },
        {
            id: "ORD-002",
            table: "Meja 12",
            items: [
                {itemId: 2, qty: 1} // ID 2: Creamy Carbonara
            ],
            total: 52000,
            status: 1,
            time: "12 menit lalu",
            // time: new Date(Date.now() - 12 * 60000).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        }
    ],
    hasNewOrder: false,
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        receiveNewOrder: (state, action) => {
            state.list.unshift(action.payload);
            state.hasNewOrder = true;
        },
        updateOrderStatus: (state, action) => {
            const {id, status} = action.payload;
            const order = state.list.find(order => order.id === id);
            if (order) {
                order.status = status;
            }
        },
        clearNotification: (state) => {
            state.hasNewOrder = false;
        }
    }
})

export const {receiveNewOrder, updateOrderStatus, clearNotification} = orderSlice.actions;
export default orderSlice.reducer;
