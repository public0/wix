@extends('layouts.master')
@section('header')
@stop
@section('content')
<!-- <div id="nav">
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
 --><div class="background_screen">
    <canvas id="canvas"></canvas>
    <div id="revealPic" class="revealPic background_screen" style="background-image:url('{{URL::asset('images/slider/img4.png')}}');"></div>
</div>
<div id="show" class="background_img" style="position:fixed;top:0px;left:0px;"></div>
@stop