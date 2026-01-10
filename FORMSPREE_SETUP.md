# Formspree Setup Guide

Your contact form is now configured to use Formspree! Follow these steps to complete the setup:

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account (no credit card required)
3. Verify your email address

## Step 2: Create a New Form

1. After logging in, click "New Form" or "Get Started"
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Set the email where you want to receive submissions (e.g., brownskingirl19@gmail.com)
4. Copy your **Form ID** (it looks like: `xjknqpey` or `abc123de`)

## Step 3: Add Your Form ID to Environment Variables

1. In your project root directory, create a file named `.env.local`
2. Add the following line with your actual Formspree form ID:

```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

Replace `your_form_id_here` with the Form ID you copied from Formspree.

Example:
```
NEXT_PUBLIC_FORMSPREE_ID=xjknqpey
```

## Step 4: Restart Your Development Server

After creating/updating `.env.local`, restart your Next.js development server:

1. Stop the server (Ctrl+C in terminal)
2. Run `npm run dev` again

## Step 5: Test Your Form

1. Go to your contact page (`/contact`)
2. Fill out and submit the form
3. Check your email inbox for the submission
4. You should see the success message on the form

## Troubleshooting

### Form submissions not working?

- Make sure `.env.local` is in the root directory (same level as `package.json`)
- Make sure the variable is named exactly: `NEXT_PUBLIC_FORMSPREE_ID`
- Make sure you restarted the dev server after adding the environment variable
- Check the browser console for any error messages
- Verify your Formspree form ID is correct

### Getting "Invalid form ID" error?

- Double-check your Form ID in Formspree dashboard
- Make sure there are no extra spaces in the `.env.local` file
- Try creating a new form in Formspree

### Not receiving emails?

- Check your spam/junk folder
- Verify the email address in your Formspree form settings
- Check Formspree dashboard for submission logs

## Free Tier Limits

Formspree's free tier includes:
- 50 submissions per month
- Basic spam protection
- Email notifications

For more submissions or advanced features, upgrade to a paid plan.

## Security Note

The `.env.local` file is automatically ignored by Git (it's in `.gitignore`), so your Form ID won't be committed to your repository. This is secure!

---

Need help? Check the [Formspree documentation](https://help.formspree.io/hc/en-us) or visit [https://formspree.io/help](https://help.formspree.io/hc/en-us).
