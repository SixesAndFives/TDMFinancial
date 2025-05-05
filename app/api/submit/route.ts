import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    // Use SUPABASE_URL and SUPABASE_ANON_KEY for server-side
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Environment variables:', {
        url: !!supabaseUrl,
        key: !!supabaseKey
      });
      throw new Error('Missing Supabase environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false }
    });

    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Clean and prepare data
    const cleanData = {
      name: data.name.trim(),
      company: data.company.trim(),
      email: data.email.trim().toLowerCase(),
      ticker: data.ticker ? data.ticker.trim().toUpperCase() : null,
      message: data.message.trim()
    };

    console.log('Attempting to insert data:', cleanData);

    const { error } = await supabase
      .from('tdm_submissions')
      .insert([cleanData]);

    if (error) {
      console.error('Supabase error details:', error);
      throw error;
    }
    
    return NextResponse.json({ 
      success: true,
      message: 'Submission received successfully' 
    });
  } catch (error: any) {
    console.error('Full submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to save submission',
        details: error.message,
        code: error.code,
        hint: error.hint || undefined
      },
      { status: 500 }
    );
  }
}
