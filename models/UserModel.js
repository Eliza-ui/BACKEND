import pool from './db.js';
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Get a user by ID
export const getUser = async (id) => {
    if (isNaN(parseInt(id))) {
        throw new Error('Invalid id');
    }

    const [user] = await pool.query("SELECT * FROM tbluser WHERE id = ?", [id]);
    return user;
}

// Create a new user
export const createUser = async (email, password) => {
    if (email === '') {
        throw new Error('Invalid email');
    }

    if (!validator.isEmail(email)) {
        throw new Error('Invalid email format');
    }

    const [existingUser] = await pool.query(
        "SELECT * FROM tbluser WHERE email = ?",
        [email]
    );

    if (existingUser.length === 1) {
        throw new Error('An account is already created with that email');
    }

    if (password === '') {
        throw new Error('Invalid password');
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error('Password too weak.');
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const [newUser] = await pool.query(
        "INSERT INTO tbluser(email, password) VALUES(?, ?)",
        [email, hashedPassword]
    );

    return newUser.insertId;
}

// Login a user and generate a token
export const login = async (email, password) => {
    if (email === '' || password === '') {
        throw new Error('Email and password are required');
    }

    const [user] = await pool.query("SELECT * FROM tbluser WHERE email = ?", [email]);
    if (user.length === 0) {
        throw new Error(`An account with email: ${email} does not exist`);
    }

    if (!bcrypt.compareSync(password, user[0].password)) {
        throw new Error('Incorrect password');
    }

    // generate JWT token
    const token = jwt.sign({ id: user[0].id }, process.env.SECRET, { expiresIn: '1d' });

    return token;
}
