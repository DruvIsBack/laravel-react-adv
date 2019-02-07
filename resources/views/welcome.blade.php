<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel</title>
    <link href="{{asset('css/plugins/plugins.css') }}" rel="stylesheet">
    <link href="{{asset('css/style.css') }}" rel="stylesheet">
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <style>
        @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800|Open+Sans:300,300i,400,400i,600,700,800");
        @import url("https://fonts.googleapis.com/css?family=Droid+Serif:400,400i");
        @font-face {
            font-family: 'themify';
            src: url( {{ asset('fonts/themify.eot') }});
            src: url( {{ asset('fonts/themify.eot') }}) format('embedded-opentype'),
            url({{ asset('fonts/themify.woof') }}) format('woff'),
            url({{ asset('fonts/themify.ttf') }}) format('truetype'),
            url({{ asset('fonts/themify.svg') }}) format('svg');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'FontAwesome';
            src: url({{ asset('bower_components/font-awesome/fonts/fontawesome-webfontd41d.eot') }});
            src: url({{ asset('bower_components/font-awesome/fonts/fontawesome-webfontd41d.eot') }}) format("embedded-opentype"),
                url({{ asset("public/bower_components/font-awesome/fonts/fontawesome-webfont3e6e.woff2")}}) format("woff2"),
                url({{ asset("public/bower_components/font-awesome/fonts/fontawesome-webfont3e6e.woff")}} ) format("woff"),
                url({{ asset("public/bower_components/font-awesome/fonts/fontawesome-webfont3e6e.ttf") }}) format("truetype"),
                url({{ asset("public/bower_components/font-awesome/fonts/fontawesome-webfont3e6e.svg")}}) format("svg");
            font-weight: normal;
            font-style: normal;
        }

        /*themify icons*/
        @font-face {
            font-family: 'themify';
            src: url({{ asset("public/bower_components/themify-icons/fonts/themify.eot")}});
            src: url({{ asset("public/bower_components/themify-icons/fonts/themifyd41d.eot?#iefix") }}) format("embedded-opentype"), url({{ asset("public/bower_components/themify-icons/fonts/themify.woff") }}) format("woff"), url({{ asset("public/bower_components/themify-icons/fonts/themify.ttf") }}) format("truetype"), url({{ asset("public/bower_components/themify-icons/fonts/themify.svg") }}) format("svg");
            font-weight: normal;
            font-style: normal; }

        /**et line icons**/
        @font-face {
            font-family: 'et-line';
            src: url({{ asset("public/fonts/et-line.eot") }});
            src: url({{ asset("public/fonts/et-lined41d.eot") }}) format("embedded-opentype"), url({{ asset("public/fonts/et-line.woff") }}) format("woff"), url({{ asset("public/fonts/et-line.ttf") }}) format("truetype"), url({{ asset("public/fonts/et-line.svg#et-line") }}) format("svg");
            font-weight: normal;
            font-style: normal; }


        .bg1 { background: url({{ asset("public/images/bg2.jpg") }}) no-repeat; }
    </style>
</head>
<body>
<div id="root"></div>


<script src="{{ asset('js/plugins/plugins.js') }}"></script>
<script src="{{ asset('js/custom.js') }}"></script>
<script src="{{asset('js/app.js')}}" ></script>
</body>
</html>
