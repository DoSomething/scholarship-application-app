<!DOCTYPE html>

<html>
  <head>
    <title>Scholarship Application</title>
    <link rel="icon" type="image/ico" href="/favicon.ico?v1"/>
  </head>

  <body>
    @include('layouts.partials.header')


    @if (Session::has('flash_message'))
      <div class="flash">
        <em>{{ Session::get('flash_message') }}</em>
      </div>
    @endif

    <main role="main">
      @yield('main_content')
    </main>

    @include('layouts.partials.navigation')

    @include('layouts.partials.footer')
  </body>
</html>
