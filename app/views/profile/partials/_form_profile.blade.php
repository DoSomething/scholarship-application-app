

  {{-- Birthdate --}}
  <div>
    {{ Form::label('birthdate', 'Birthdate: ') }}
    {{ Form::input('date', 'birthdate') }}
    {{ errorsFor('birthdate', $errors); }}
  </div>

  {{-- Phone Number --}}
  <div>
    {{ Form::label('phone', 'Phone Number: ') }}
    {{ Form::text('phone') }}
    {{ errorsFor('phone', $errors); }}
  </div>

  {{-- Address Street --}}
  <div>
    {{ Form::label('address_street', 'Address Street: ') }}
    {{ Form::text('address_street') }}
    {{ errorsFor('address_street', $errors); }}
  </div>

  {{-- Address Premise --}}
  <div>
    {{ Form::label('address_premise', 'Apt, Suite or Floor: ') }}
    {{ Form::text('address_premise') }}
    {{ errorsFor('address_premise', $errors); }}
  </div>

  {{-- City --}}
  <div>
    {{ Form::label('city', 'City: ') }}
    {{ Form::text('city') }}
    {{ errorsFor('city', $errors); }}
  </div>

  {{-- State --}}
  <div>
    {{ Form::label('state', 'State: ') }}
    {{ Form::select('state', array('L' => 'Large', 'S' => 'Small'), 'S'); }}
    {{ errorsFor('state', $errors); }}
  </div>

  {{-- Zip --}}
  <div>
    {{ Form::label('zip', 'Zip: ') }}
    {{ Form::text('zip') }}
    {{ errorsFor('zip', $errors); }}
  </div>

  {{-- Gender --}}
  <div>
    {{ Form::label('gender', 'Gender: ') }}
    {{ Form::select('gender', array('M' => 'Male', 'F' => 'Female')); }}
    {{ errorsFor('gender', $errors); }}
  </div>

  {{-- Race --}}
  <div>
    {{ Form::label('race', 'Race: ') }}
    {{ Form::text('race') }}
    {{ errorsFor('race', $errors); }}
  </div>

  {{-- School --}}
  <div>
    {{ Form::label('school', 'School: ') }}
    {{ Form::text('school') }}
    {{ errorsFor('school', $errors); }}
  </div>

  {{-- Grade --}}
  <div>
    {{ Form::label('grade', 'Grade: ') }}
    {{ Form::selectRange('grade', 9, 12); }}
    {{ errorsFor('grade', $errors); }}
  </div>