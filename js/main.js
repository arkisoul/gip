AOS.init({
    offset: 400,
    duration: 800,
    easing: 'ease-in-sine',
    once: true,
});

$('body').on('click', '#contact-form-anchor', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).animate({
            top: '50%'
        }, 200);
        $('.fixed-contact-form').fadeOut(400);
    } else {
        $(this).addClass('active');
        $(this).animate({
            top: $('.fixed-contact-form').offset().top
        }, 200);
        $('.fixed-contact-form').fadeIn(400);
    }
});

$('body').on('click', '.close-btn', function(e) {
    e.preventDefault();
    var _this = $('#contact-form-anchor');
    if ($(_this).hasClass('active')) {
        $(_this).removeClass('active');
        $(_this).animate({
            top: '50%'
        }, 200);
        $('.fixed-contact-form').fadeOut(400);
    } else {
        $(_this).addClass('active');
        $(_this).animate({
            top: $('.fixed-contact-form').offset().top
        }, 200);
        $('.fixed-contact-form').fadeIn(400);
    }
});

$('body').on('click', '.show-enquiry-form', function(e) {
    e.preventDefault();
    var _this = $('#contact-form-anchor');
    $('form#reused_form').show();
    $('#success_message').hide();
    $('#error_message').hide();
    if ($(_this).hasClass('active')) {
        $(_this).removeClass('active');
        $(_this).animate({
            top: '50%'
        }, 200);
        $('.fixed-contact-form').fadeOut(400);
    } else {
        $(_this).addClass('active');
        $(_this).animate({
            top: $('.fixed-contact-form').offset().top
        }, 200);
        $('.fixed-contact-form').fadeIn(400);
    }
});

$(function() {
    $('#register-countdown').countdown('2018/05/30').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
            + '<div class="register-countdown-item">'
            +    '<h1 class="m-0">%D</h1>'
            +   '<p class="text-uppercase m-0">Day</p>'
            + '</div>'
            + '<div class="register-countdown-item">'
            +   '<h1 class="m-0">%H</h1>'
            +    '<p class="text-uppercase m-0">hours</p>'
            + '</div>'
            + '<div class="register-countdown-item">'
            +    '<h1 class="m-0">%M</h1>'
            +    '<p class="text-uppercase m-0">min</p>'
            + '</div>'
            + '<div class="register-countdown-item red">'
            +   '<h1 class="m-0">%S</h1>'
            +   '<p class="text-uppercase m-0">sec</p>'
            + '</div>'
        ));
    });
});

$('#courseContent').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(courseData[recipient].title);
  modal.find('.modal-body').html(courseData[recipient].content);
});

var courseData = {
    '@aws': {
        'title': 'AWS DATA CENTRE Management Projects',
        'content': '<h1 class="h5 mt-0">AWS DATA CENTRE Management Projects</h1><h1 class="h5 mt-0">Key Benefits of The Training -</h1><ul class="training-benefits"><li>Design AWS Acrhitecture for deploy client project</li><li>Identify running AWS services and features</li><li>Deploy Live web application  on EC2</li><li>Connectivity b/w domain and Route53</li><li>Implement Load balancer and Auto Scaling</li><li>applying security policy on AWS infrastructure</li><li>Install CPANEL on EC2 Server</li><li>Deploy Firewall security</li><li>Troubleshoot on Live AWS infrastructure</li><li>Regular issue trace and solution</li><li>Project work report</li>'
    },
    '@cpanel': {
        'title': 'C-PANEL/Control Panel Management Projects',
        'content': '<h1 class="h5 mt-0">C-PANEL/Control Panel Management Projects</h1><h1 class="h5 mt-0">Key Benefits of The Training -</h1><ul class="training-benefits"><li>Installation CPANEL/Other Panel</li><li>Configuring CPANEL and CENTOS Panel</li><li>Host Website and web application</li><li>Domain connectivity: Live website</li><li>Creation Email account and SMTP connection</li><li>Database connectivity and deploy</li><li>Firewall security implementation</li><li>Apache web server modules and customised</li><li>Logs and trace regular issue</li><li>Troubleshoot or fix client issue</li></ul>'
    },
    '@cloud': {
        'title': 'Cloud Server Management Projects',
        'content': '<h1 class="h5 mt-0">Cloud Server Management Projects</h1><h1 class="h5 mt-0">Key Benefits of The Training -</h1><ul class="training-benefits"><li>Cloud Infrastructure</li><li>Work report related to resources</li><li>Deploy Cloud Technology</li><li>Design Cloud Architecture in data Centr</li><li>Hypervisor installation</li><li>Create Templates of cloud</li><li>Management of running cloud project</li><li>Public cloud panel</li><li>Troubleshoot and solution of regular issue</li><li>Deploy project on OpenStack based</li></ul>'
    },
    '@devops': {
        'title': 'DevOps Deployment and management',
        'content': '<h1 class="h5 mt-0">DevOps Deployment and management</h1><h1 class="h5 mt-0">Key Benefits of The Training -</h1><ul class="training-benefits"><li>Use Git to store the application code.</li><li>Setup Dev/test environment.</li><li>Build High availability3-tier architecture</li><li>Provisioning using Ansible.</li><li>Implement Continuous Integration using Jenkins.</li><li>Setup Server/Application Monitoring using Nagios.</li><li>Auto Scale.</li><li>Automate repetitive Admin task with Shell</li></ul>'
    },
    '@virtual': {
        'title': 'Virtualization Server Management Projects',
        'content': '<h1 class="h5 mt-0">Virtualization Server Management Projects</h1><h1 class="h5 mt-0">Key Benefits of The Training -</h1><ul class="training-benefits"><li>Installation Virtulization Software - Hyper-V, Prxomos</li><li>Create Virtual Machine Based onLinux and Windows</li><li>Storage connectivity</li><li>DNS Roles</li><li>Firewall based on virtual machine</li><li>Snapshot</li><li>Resize machine - upgrade and downgrade</li><li>Network connectivity issue</li><li>Troubleshoot and security concern</li><li>termination, resume and suspension</li><li>Regular issue on Live Virtual machine</li></ul>'
    },
    '@linux': {
        'title': 'Linux/windows Server Management Projects',
        'content': '<h1 class="h5 mt-0">Linux/windows Server Management Projects</h1><h1 class="h5 mt-0">Key Benefits of The Training -</h1><ul class="training-benefits"><li>Installation Linux and Windows</li><li>Install Control panel: WHM, Website panel, ZPANEL</li><li>configure Control panel</li><li>Configure Shell based server</li><li>Installation of softwares</li><li>Deploy website and web application</li><li>Domain connectivity: Live website</li><li>Creation Email account and SMTP connection</li><li>Database connectivity and deploy</li><li>Firewall security implementation</li><li>Apache web server modules and customised</li><li>Logs and trace regular issue</li><li>Troubleshoot or fix client issue</li></ul>'
    },
    '@email': {
        'title': 'Email Server management Projects',
        'content': '<h1 class="h5 mt-0">Email Server management Projects</h1><h1 class="h5 mt-0">Key Benefits of The Training -</h1><ul class="training-benefits"><li>Install OS</li><li>Install ZPANEL with fresh and through SNAPSHOT</li><li>Configure POSTFIX mail server</li><li>deploy mailing account</li><li>DNS implementation</li><li>Securing mail server: SPF, DKIM, MX</li><li>Firewall implement</li><li>IP rotation, blacklisting, RNDS</li><li>Bulk Mailing Software deploy</li><li>Configure Outlook, SMTP client based software</li><li>SMTP setting and Email Camp. design</li><li>Mailing open rate and setting</li><li>Fix regular issue and Troubleshoot.</li></ul>'
    },
    '@docker': {
        'title': 'Docker Container Deployment projects',
        'content': '<h1 class="h5 mt-0">Docker Container Deployment projects</h1><h1 class="h5 mt-0">Key Benefits of The Training -</h1><ul class="training-benefits"><li>Docker Installation</li><li>Docker - HU</li><li>Docker - Images</li><li>Containers Creation and working</li><li>Docker configuring</li><li>Docker based web application Live</li><li>Public Depositories</li><li>Docker Networking</li><li>Docker project deployment and troubleshoot</li><li>Fix regular issue of clien</li></ul>'
    }
}

$('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    autoplay:true,
    margin: 5,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        580:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:6
        }
    }
})
