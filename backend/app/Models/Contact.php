<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Contact extends Model
{
    use HasFactory;
    use HasSlug;
    protected $table = 'contacts';
    protected $fillable = [
        'name',
        'address',
        'email',
        'linkedin',
        'twitter',
        'facebook',
        'instagram',
        'behance',
    ];

    public function getSlugOptions():SlugOptions { 
        return (new SlugOptions())
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug')
            ->usingSeparator('-');
    }

        /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName() {
        return 'slug';
    }
}