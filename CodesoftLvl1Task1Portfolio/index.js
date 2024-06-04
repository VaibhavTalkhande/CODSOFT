
        // JavaScript to add smooth scrolling for navigation
        document.querySelectorAll('.navbar span a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
         document.addEventListener("DOMContentLoaded", function() {
            const openDialogButtons = document.querySelectorAll('.open-dialog');
            const closeDialogButtons = document.querySelectorAll('.close-dialog');
        
            openDialogButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const dialogId = this.getAttribute('data-dialog');
                    const dialog = document.getElementById(dialogId);
                    if (dialog) {
                        dialog.showModal();
                    }
                });
            });
        
            closeDialogButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const dialog = this.closest('dialog');
                    if (dialog) {
                        dialog.close();
                    }
                });
            });
        }); 
       document.getElementById('contact-form').addEventListener('submit', function(event) {
         event.preventDefault();
            
         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                 .then(function() {
                     alert('Message sent successfully!');
                     document.getElementById('contact-form').reset();
                 }, function(error) {
                     alert('Failed to send message. Please try again later.');
                     console.log('FAILED...', error);
                 });
         });

        