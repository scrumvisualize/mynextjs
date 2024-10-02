import User from '../../models/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import sequelize from '../../utility/sequelize';



export async function GET(req) {
  return NextResponse.json({ message: 'GET request received' });
};


export async function POST(req) {

  const { email, password } = await req.json();

  console.log('Wohoo.. ! Hitting the post login service ::: ');

  try {

    await sequelize.authenticate();
    
    const foundUser = await User.findOne({ where: { email } });

    if (!foundUser) {
      return NextResponse.json({ message: 'Invalid user email provided !' }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    
    if (!passwordMatch) {
      return NextResponse.json({ message: 'Incorrect password provided !' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });

  } catch (error) {

    console.error('Unable to connect to the database:', error);

    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};