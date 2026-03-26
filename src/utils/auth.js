import bcrypt from "bcryptjs";

/**
 * Mengamankan password menggunakan Bcrypt secara Asynchronous.
 * @param {string} password - Password polos dari user.
 * @returns {Promise<string>} - Password yang sudah di-hash.
 */
export async function hashPassword(password) {
    const saltRounds = 12;

    // Kita gunakan 'await' karena ini proses berat
    return bcrypt.hash(password, saltRounds);
}

/**
 * Verifikasi password saat login.
 */
export async function verifyPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}