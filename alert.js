const externalLink = document.querySelector('.external-link');
  if (externalLink) {
      externalLink.addEventListener('click', function (e) {
          e.preventDefault();
          const url = this.href;

          const userResponse = confirm("You are being redirected to an external website. Do you want to continue?");

          if (userResponse) {
              window.open(url, '_blank');
          }
      });
  }