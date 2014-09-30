{{-- Status --}}

@extends('layouts.master')

@section('main_content')
  <article class="page">
    <h1 class="__title heading -beta text-primary-color">Application Status</h1>

    <div class="segment">
      <div class="wrapper">
        <h2 class="heading -gamma">Status: <em> {{ $status }} </em></h2>
        @if(! empty($help_text))
          <p>{{ $help_text }}</p>
        @endif
      </div>
    </div>

    <section class="segment segment--checklist">
      <div class="wrapper">
        <h1 class="heading -delta">What's up</h1>

        <ul class="media-list media-list--status">
          <li class="{{ isset($prof_complete) ? 'complete' : '-incomplete' }}">
            <span class="icon" data-icon="&#x2713"></span>Basic Information
            {{ isset($profile) ? link_to_route('profile.edit', 'edit', Auth::user()->id) : link_to_route('profile.create', 'start') }}
          </li>
          <li class="{{ isset($app_complete) ? 'complete' : '-incomplete' }}">
            <span class="icon" data-icon="&#x2713"></span>Application
            @if (isset($application) && !($application->complete))
              {{ link_to_route('application.edit', 'edit', Auth::user()->id) }}
            @elseif (is_null($application) && !is_null($profile))
            {{ link_to_route('application.create', 'start') }}
            @endif
          </li>
        </ul>

        @if (isset($submit))
          {{ $submit }}
        @endif

        @if (!empty($recommendations))
          <div class="table-responsive">
            <table class="table table-striped">

              <thead>
                <tr>
                  <th> Name </th>
                  <th> Email </th>
                  <th> Status </th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                @foreach($recommendations as $rec)
                  <tr>
                    <td>{{ $rec['first_name'] . ' ' . $rec['last_name']}}</td>
                    <td>{{ $rec['email'] }}</td>
                    <td> {{$rec['complete']}}</td>
                    @if ($rec['complete'] != 'All set!')
                      <td> {{link_to_route('resend', 'Resend Request', array('id' => $rec['id']))}}</td>
                    @endif
                  </tr>
                @endforeach
              </tbody>

            </table>
            @if (isset($add_rec_link))
              {{ $add_rec_link }}
            @endif
          </div>
        @elseif (!is_null($application))
          {{link_to_route('recommendation.create', 'Get Recommendations');}}
        @endif
      </div>
    </section>

    <section class="segment">
      <div class="wrapper">
        <h1 class="heading -delta">Important Dates</h1>
        <p><em>Dates to come...</em></p>
      </div>
    </section>


    <div class="segment contact">
      <div class="wrapper">
        <p>Need help? <a href="mailto:{{Config::get('mail.from.address')}}">Contact Us</a></p>
      </div>
    </div>

  </article>
@stop
