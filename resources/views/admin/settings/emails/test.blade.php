@extends('admin.layouts.master')

@section('main_content')
    <div class="container-fluid">
        <div class="row">

            @include('admin.layouts.partials.subnav-settings')

            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

                {!! Form::open(['action' => 'EmailController@sendTestEmail']) !!}

                    <h1 class="page-header">Send Test Email</h1>

                    <div class="panel-body">
                        <div>
                        {!! Form::label('recipient', 'To: ') !!}
                        <br>
                        {!! Form::text('recipient', '', ['required' => 'required']) !!}
                        </div>
                        <div>
                        {!! Form::label('subject', 'Subject: ') !!}
                        <br>
                        {!! Form::text('subject', '', ['required' => 'required']) !!}
                        </div>
                        <div>
                            {!! Form::label('body', 'Email Body: ') !!}
                        <br>
                        {!! Form::textarea('body', '', ['required' => 'required']) !!}
                        </div>
                        <div>
                            {!! Form::submit('Send Test Email',     ['class' => 'btn btn-default']) !!}
                        </div>

                {!! Form::close() !!}

            </div>
        </div>
    </div>
@stop
