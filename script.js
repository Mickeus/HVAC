{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /* styles.css */\
\
/* Reset Styles */\
* \{\
    margin: 0;\
    padding: 0;\
    box-sizing: border-box;\
\}\
\
/* Body and Container */\
body \{\
    font-family: 'Helvetica Neue', Arial, sans-serif;\
    line-height: 1.6;\
    color: #333;\
\}\
\
.container \{\
    width: 90%;\
    max-width: 1200px;\
    margin: auto;\
    overflow: hidden;\
\}\
\
/* Logo */\
.logo \{\
    width: 150px;\
    margin-top: 20px;\
\}\
\
/* Navigation Styles */\
nav \{\
    background: #35424a;\
    color: #ffffff;\
    position: relative;\
\}\
\
.nav-menu \{\
    list-style: none;\
    text-align: right;\
\}\
\
.nav-menu li \{\
    display: inline-block;\
    margin: 0 15px;\
\}\
\
.nav-menu li a \{\
    color: #ffffff;\
    text-decoration: none;\
    padding: 15px 0;\
    display: inline-block;\
\}\
\
.hamburger \{\
    display: none;\
    font-size: 2em;\
    cursor: pointer;\
    padding: 15px;\
    color: #ffffff;\
\}\
\
#menu-toggle \{\
    display: none;\
\}\
\
/* Header Styles */\
header \{\
    background-image: url('images/header-bg.jpg');\
    background-size: cover;\
    background-position: center;\
    color: #ffffff;\
    position: relative;\
\}\
\
.header-content \{\
    position: absolute;\
    top: 50%;\
    left: 50%;\
    transform: translate(-50%, -50%);\
    text-align: center;\
\}\
\
header h1 \{\
    font-size: 3em;\
    margin-bottom: 20px;\
\}\
\
header p \{\
    font-size: 1.2em;\
    margin-bottom: 30px;\
\}\
\
.btn \{\
    background: #e8491d;\
    color: #ffffff;\
    padding: 15px 30px;\
    text-decoration: none;\
    border-radius: 5px;\
    margin: 5px;\
\}\
\
.btn.whatsapp \{\
    background: #25D366;\
\}\
\
/* Section Styles */\
section \{\
    padding: 60px 0;\
\}\
\
section h2 \{\
    text-align: center;\
    margin-bottom: 40px;\
    font-size: 2.5em;\
\}\
\
.services \{\
    display: flex;\
    flex-wrap: wrap;\
    justify-content: space-around;\
\}\
\
.service \{\
    flex: 1 1 45%;\
    background: #f4f4f4;\
    margin: 10px;\
    padding: 30px;\
    border-radius: 5px;\
\}\
\
.service h3 \{\
    margin-bottom: 15px;\
\}\
\
.service p \{\
    font-size: 1.1em;\
\}\
\
/* Areas Serviced */\
.areas-list \{\
    list-style: none;\
    text-align: center;\
\}\
\
.areas-list li \{\
    display: inline-block;\
    margin: 5px 15px;\
    font-size: 1.1em;\
\}\
\
/* Testimonials */\
.testimonial \{\
    background: #f4f4f4;\
    padding: 20px;\
    margin: 10px auto;\
    border-radius: 5px;\
    max-width: 600px;\
\}\
\
.testimonial p \{\
    font-size: 1.2em;\
    font-style: italic;\
    text-align: center;\
\}\
\
/* Contact Form */\
form \{\
    max-width: 600px;\
    margin: auto;\
\}\
\
form label \{\
    display: block;\
    margin-top: 15px;\
\}\
\
form input, form textarea \{\
    width: 100%;\
    padding: 10px;\
    margin-top: 5px;\
    border: 1px solid #ccc;\
    border-radius: 4px;\
\}\
\
form button \{\
    display: block;\
    width: 100%;\
    background: #e8491d;\
    color: #fff;\
    border: none;\
    padding: 15px;\
    font-size: 1em;\
    margin-top: 20px;\
    cursor: pointer;\
    border-radius: 5px;\
\}\
\
form button:hover \{\
    background: #cf3e0d;\
\}\
\
/* Google Map */\
#googleMap \{\
    width: 100%;\
    height: 400px;\
\}\
\
/* Back-to-Top Button */\
#back-to-top \{\
    display: none;\
    position: fixed;\
    bottom: 30px;\
    right: 30px;\
    z-index: 99;\
    border: none;\
    outline: none;\
    background-color: #e8491d;\
    color: white;\
    cursor: pointer;\
    padding: 15px;\
    border-radius: 50%;\
    font-size: 18px;\
\}\
\
#back-to-top:hover \{\
    background-color: #555;\
\}\
\
/* Footer Styles */\
footer \{\
    background: #35424a;\
    color: #ffffff;\
    text-align: center;\
    padding: 20px 0;\
\}\
\
footer p \{\
    margin: 5px 0;\
\}\
\
footer a \{\
    color: #ffffff;\
    text-decoration: none;\
\}\
\
footer a:hover \{\
    text-decoration: underline;\
\}\
\
/* Responsive Styles */\
@media (max-width: 768px) \{\
    .services \{\
        flex-direction: column;\
    \}\
\
    .nav-menu \{\
        display: none;\
        flex-direction: column;\
        text-align: left;\
        background: #35424a;\
        position: absolute;\
        top: 60px;\
        left: 0;\
        width: 100%;\
    \}\
\
    .nav-menu li \{\
        margin: 0;\
    \}\
\
    #menu-toggle:checked + .hamburger + .nav-menu \{\
        display: flex;\
    \}\
\
    .hamburger \{\
        display: block;\
    \}\
\}\
}