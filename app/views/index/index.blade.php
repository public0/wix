@extends('layouts.master')
@section('header')
@stop
@section('content')
<div id="nav">
    <nav>
        <ul>
            <li><a href="">What we do</a></li>
            <li><a href="">Exteriors</a></li>
            <li><a href="">Interiors</a></li>
            <li><a href="">Product Design</a></li>
            <li><a href="">Animation</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
</div>
<div id="slider1_container" style="position: absolute; left: 0px; top: 0px; width: 1200px; height: 600px;">
	<div u="loading" style="position: absolute; top: 0px; left: 0px;">
        <div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;
            background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;">
        </div>
        <div style="position: absolute; display: block; background: url(../img/loading.gif) no-repeat center center;
            top: 0px; left: 0px;width: 100%;height:100%;">
        </div>
    </div>

	<div u="slides" id="slides" style="position: absolute; left: 0px; top: 0px; width: 1200px; height: 600px; overflow: hidden;">

		<div>{{ HTML::image('images/slider/img1.png', '') }}</div>	
		<div>{{ HTML::image('images/slider/img2.png', '') }}</div>	
		<div>{{ HTML::image('images/slider/img3.png', '') }}</div>	
	</div>
</div>
@stop