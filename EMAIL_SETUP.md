# Email Setup Guide for FreemanForex Trading

## 🚀 Quick Setup Options

### Option 1: Resend (Recommended - Free Tier)
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add to your `.env` file:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```

### Option 2: Gmail (Current - Troubleshooting)
If you want to stick with Gmail, try these steps:

1. **Enable 2-Step Verification**:
   - Go to [myaccount.google.com](https://myaccount.google.com)
   - Security → 2-Step Verification → Turn it ON

2. **Generate App Password**:
   - Go to [myaccount.google.com](https://myaccount.google.com)
   - Security → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "FreemanForex"
   - Copy the 16-character password (no spaces)

3. **Update .env file**:
   ```
   EMAIL_USER=freemanforex01@gmail.com
   EMAIL_PASS=your16characterapppassword
   ```

### Option 3: Other Email Services

#### SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Add to `.env`:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxx
   ```

#### Mailgun
1. Sign up at [mailgun.com](https://mailgun.com)
2. Get API key
3. Add to `.env`:
   ```
   MAILGUN_API_KEY=key-xxxxxxxxxxxx
   MAILGUN_DOMAIN=yourdomain.com
   ```

## 🔧 Current Configuration

The system is set up to:
1. Try Resend first (if API key is provided)
2. Fall back to Gmail SMTP (if Resend fails or not configured)
3. Log all attempts and errors

## 📧 Testing

After setup, test the contact form at `http://localhost:5000/contact`

## 🛠️ Troubleshooting

### Gmail Issues:
- Make sure 2-Step Verification is enabled
- App password should be exactly 16 characters
- Remove any spaces from the password
- Check if "Less secure app access" is disabled (it should be)

### Resend Issues:
- Verify API key is correct
- Check if you've verified your domain (optional)
- Free tier allows 100 emails/day

### General Issues:
- Restart the server after changing `.env`
- Check console logs for detailed error messages
- Ensure all environment variables are set correctly 