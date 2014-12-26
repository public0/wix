<!DOCTYPE html>
<html>
    <head>
    	{{ HTML::style('css/bootstrap.min.css') }}
    	{{ HTML::style('css/main.css') }}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wix</title>
    </head>
    <body>
        @section('header')
        @stop
        <div id="container">
            @yield('content')
        </div>
    {{ HTML::script('js/jquery-2.1.1.min.js') }}
    {{ HTML::script('js/bootstrap.min.js') }}
    {{-- HTML::script('js/jssor.js') --}}
    {{-- HTML::script('js/jssor.slider.mini.js') --}}
    {{-- HTML::script('js/pixelate.min.js') --}}

<!--    
    <script type="text/javascript" src="https://rawgit.com/GianlucaGuarini/vague.js/master/Vague.js"></script>
    <script type="text/javascript" src="http://close-pixelate.desandro.com/close-pixelate.js"></script>
-->
    {{ HTML::script('js/main.js') }}
    </body>
</html>