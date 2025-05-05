import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `submission-${timestamp}.json`;
    const filepath = join(process.cwd(), 'public', 'submissions', filename);
    
    try {
      await writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8');
      console.log('Submission saved:', filepath);
      
      return NextResponse.json({ 
        success: true, 
        filename,
        message: 'Submission received successfully' 
      });
    } catch (writeError: any) {
      console.error('File write error:', writeError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to save submission',
          details: writeError.message 
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Request processing error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process submission',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
