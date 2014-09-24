<?php

class Block extends Eloquent {

  protected $fillable = ['block_type', 'block_title', 'block_body'];

  public function page()
  {
    return $this->belongsTo('Page');
  }


  /**
   * Return an array of block types.
   * @return array Block types
   */
  public static function getTypes()
  {
    $types = [
      'default' => 'Default',
      'introduction' => 'Introduction',
      'timeline' => 'Timeline',
      'steps-vertical' => 'Numbered Steps (vertical)',
      'steps-horizontal' => 'Numbered Steps (horizontal)',
      'cta' => 'Call to Action'
    ];

    return $types;
  }

}
