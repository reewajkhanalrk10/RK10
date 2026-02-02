/**
 * EmailJS Contact Form Handler
 * Handles form submission using EmailJS (client-side email)
 */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with public key
    if (typeof emailjs !== 'undefined' && typeof siteConfig !== 'undefined') {
        emailjs.init(siteConfig.emailjs.publicKey);
    }

    const form = document.querySelector('.php-email-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const loading = form.querySelector('.loading');
        const errorMsg = form.querySelector('.error-message');
        const sentMsg = form.querySelector('.sent-message');
        const submitBtn = form.querySelector('button[type="submit"]');

        // Reset states
        loading.style.display = 'block';
        errorMsg.style.display = 'none';
        sentMsg.style.display = 'none';
        submitBtn.disabled = true;

        // Check if EmailJS is properly configured
        if (typeof emailjs === 'undefined') {
            loading.style.display = 'none';
            errorMsg.textContent = 'Email service not loaded. Please try again later.';
            errorMsg.style.display = 'block';
            submitBtn.disabled = false;
            return;
        }

        if (typeof siteConfig === 'undefined' ||
            siteConfig.emailjs.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
            loading.style.display = 'none';
            errorMsg.textContent = 'Email service not configured. Please contact via email directly.';
            errorMsg.style.display = 'block';
            submitBtn.disabled = false;
            return;
        }

        // Prepare template parameters
        const templateParams = {
            from_name: form.querySelector('#name').value,
            from_email: form.querySelector('#email').value,
            subject: form.querySelector('#subject').value,
            message: form.querySelector('textarea[name="message"]').value,
            to_name: siteConfig.owner.name,
            to_email: siteConfig.owner.email,
            email: 'reeisworking247@gmail.com'  // Matches {{email}} in your template
        };

        // Send email via EmailJS
        emailjs.send(
            siteConfig.emailjs.serviceId,
            siteConfig.emailjs.templateId,
            templateParams
        )
            .then(function (response) {
                loading.style.display = 'none';
                sentMsg.style.display = 'block';
                form.reset();
                submitBtn.disabled = false;

                // Hide success message after 5 seconds
                setTimeout(() => {
                    sentMsg.style.display = 'none';
                }, 5000);
            })
            .catch(function (error) {
                loading.style.display = 'none';
                // Show detailed error for debugging
                let errorText = 'Failed to send message. ';
                if (error.text) {
                    errorText += 'Error: ' + error.text;
                } else if (error.message) {
                    errorText += 'Error: ' + error.message;
                } else {
                    errorText += 'Please check your EmailJS configuration.';
                }
                errorMsg.textContent = errorText;
                errorMsg.style.display = 'block';
                submitBtn.disabled = false;
                console.error('EmailJS Error:', error);
            });
    });
});
