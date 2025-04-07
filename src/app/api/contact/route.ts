import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.json();
    console.log("Received form data:", formData);
    
    // Get the referer from request headers and extract the pathname
    const referer = request.headers.get('referer') || '';
    const sourcePath = referer ? new URL(referer).pathname : '';
    
    // Save to Google Sheets using the Apps Script method
    let sheetsResult = false;
    try {
      sheetsResult = await addToGoogleSheetViaAppScript(formData, sourcePath);
    } catch (sheetsError) {
      console.error("Error with Google Sheets:", sheetsError);
    }
    
    return NextResponse.json({
      success: true,
      message: 'Form data received',
      savedToSheets: sheetsResult
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process form data' },
      { status: 500 }
    );
  }
}

// Only keep the working Apps Script function
async function addToGoogleSheetViaAppScript(formData: any, sourcePath: string) {
  try {
    // Your Apps Script Web App URL
    const response = await fetch("https://script.google.com/macros/s/AKfycbx7a6JTOmXFJQHRwaRNd-CzSs53ilDkeHTDCZZ5YJSDy4AE4jVtI5LT6VU7hEZEB8l_-Q/exec", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: formData.name || '',
        email: formData.email || '',
        phone: formData.phone || '',
        countryCode: formData.countryCode || '',
        state: formData.state || '',
        source: `${sourcePath ? ' - ' + sourcePath : ''}`, // Add source with pathname
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to add data: ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('Data added to Google Sheets via Apps Script:', result);
    return true;
  } catch (error) {
    console.error('Error adding data to Google Sheets via Apps Script:', error);
    return false;
  }
}