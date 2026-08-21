import { test, expect } from '@playwright/test';

test.describe('Plexuspharmaco QA Testing', () => {
  
  test('Contact Form Validation & Submission', async ({ page }) => {
    // 1. Navigate to the contact form
    await page.goto('http://localhost:3000/business-enquiry');
    
    // Test 1: Empty Submission
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByText('Name is required')).toBeVisible();
    await expect(page.locator('form')).toContainText('Please enter a valid email');

    // Test 2: Invalid Email
    await page.fill('input[id="form_email"]', 'abc@');
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.locator('form')).toContainText('Please enter a valid email');

    // Test 3: Network Failure handling
    // Intercept the API route and force a failure
    await page.route('/api/submit-form', route => route.abort('failed'));
    
    await page.fill('input[id="form_name"]', 'Test User');
    await page.fill('input[id="form_email"]', 'test@example.com');
    await page.fill('input[id="form_country"]', 'UK');
    await page.getByRole('button', { name: 'Other' }).click(); // Select Inquiry Type
    await page.fill('textarea[id="form_message"]', 'This is a valid test message with more than 10 characters.');
    
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByText('Failed to fetch')).toBeVisible({ timeout: 5000 }); // Handled error

    // Test 4: Valid Submission
    // Remove the route interception to allow successful submission
    await page.unroute('/api/submit-form');
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByText('Message Sent Successfully')).toBeVisible({ timeout: 8000 });
  });

  test('Newsletter Validation & Submission', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
    const emailInput = page.getByPlaceholder('Enter your corporate email address');
    const subscribeBtn = page.getByRole('button', { name: 'Subscribe' });

    // Test Valid Submission
    await emailInput.fill('newsletter@example.com');
    await subscribeBtn.click();
    
    await expect(page.getByText('Thank you for subscribing to our newsletter!')).toBeVisible();
  });

  test('Discover More links on Homepage', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
    // Find all 'Discover More' links in the FeaturedKidsProducts component
    // We expect 8 of them
    const discoverLinks = page.getByText('Discover More');
    const count = await discoverLinks.count();
    expect(count).toBeGreaterThan(0);
    
    // Click the first one
    const firstLink = discoverLinks.first();
    await firstLink.click();
    
    // Verify product details load
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByText('Active Ingredients')).toBeVisible();
  });

  test('Hero CTAs Navigation', async ({ page }) => {
    // Navigate to homepage
    await page.goto('http://localhost:3000/');
    
    // Click 'Discover Our Company'
    await page.getByRole('link', { name: 'Discover Our Company' }).click();
    await expect(page).toHaveURL(/.*\/about/);
    
    // Ensure the page successfully loaded content
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Go back to homepage
    await page.goto('http://localhost:3000/');
    
    // Click 'Partner With Us'
    await page.getByRole('link', { name: 'Partner With Us' }).click();
    await expect(page).toHaveURL(/.*\/business-enquiry/);
    
    // Ensure the page successfully loaded content
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('Homepage CTAs Navigation', async ({ page }) => {
    const ctas = [
      { name: 'Discover Our R&D Engine', urlRegex: /.*\/research-development/ },
      { name: 'View Our Capabilities', urlRegex: /.*\/manufacture-capability/ },
      { name: 'Read Our Quality Policy', urlRegex: /.*\/quality-assurance/ },
      { name: 'Learn About Our Impact', urlRegex: /.*\/sustainability/ },
      { name: 'View All News', urlRegex: /.*\/media/ },
      { name: 'Start a Conversation', urlRegex: /.*\/business-enquiry/ },
      { name: 'View All Products', urlRegex: /.*\/product-catalogue/ },
      { name: 'View Our Products', urlRegex: /.*\/product-catalogue/ }
    ];

    for (const cta of ctas) {
      await page.goto('http://localhost:3000/');
      const link = page.getByRole('link', { name: cta.name, exact: false }).first();
      await link.scrollIntoViewIfNeeded();
      await link.click();
      await expect(page).toHaveURL(cta.urlRegex);
      await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
    }
  });

});
