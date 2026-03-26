import {z} from "zod";

export const SignUpSchema = z.object({
    fullName: z.string().min(3, "Nama terlalu pendek").max(50, "Nama terlalu panjang"),
    email: z.string().email("Format email tidak valid").trim(),
    staffId: z.string().min(4, "ID Karyawan minimal 4 karakter")
        .regex(/^[a-zA-Z0-9]+$/, "ID Karyawan hanya boleh huruf dan angka"),
    password: z.string().min(8, "Password minimal 8 karakter")
        .regex(/[A-Z]/, "Password harus ada huruf kapital")
        .regex(/[0-9]/, "Password harus ada angka")
        .regex(/[@$!%*?&]/, "Password harus ada karakter spesial"),
    confirmPassword: z.string().min(8, "Konfirmasi password minimal 8 karakter")
        .regex(/[A-Z]/, "Konfirmasi password harus ada huruf kapital")
        .regex(/[0-9]/, "Konfirmasi password harus ada angka")
        .regex(/[@$!%*?&]/, "Konfirmasi password harus ada karakter spesial"),
});
