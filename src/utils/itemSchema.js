import {z} from 'zod';

export const ItemSchema = z.object({
    name: z.string().min(1, "Nama makanan tidak boleh kosong.").max(100, "Nama makanan terlalu panjang."),
    price: z.number().min(0, "Harga makanan tidak boleh negatif."),
    image: z.string().url("Gambar makanan harus berupa URL yang valid."),
    category: z.enum(["Main", "Pasta", "Drink", "Snack"], "Kategori makanan tidak valid."),
})
