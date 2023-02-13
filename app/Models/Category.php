<?php

namespace App\Models;
 
use App\Helpers\UniqueSlug;
use App\Traits\CheckStatusAndFeture;
use App\Traits\Imageable; 
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 
use Spatie\Activitylog\LogOptions;
use App\Enums\Status;
use App\Enums\Featured;
use Spatie\Activitylog\Traits\LogsActivity;

class Category extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;
    use CheckStatusAndFeture;
    use Imageable; 

    /**
    * The attributes that are mass assignable.
    *
    * @var array<int, string>
    */
    protected $fillable = [
        'title',
        'description', 
        'status',
        'is_featured',
        'slug',
        'user_id',
    ];

    /**
     * Override the default boot method to register some extra stuff for every child model.
     */
    protected static function boot()
    {
        static::creating(function ($model) {
            $model->slug = UniqueSlug::generate($model, 'slug', $model->title);
        });

        parent::boot();
    }

    protected static $recordEvents = ['deleted', 'created', 'updated'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logOnly(['title', 'description', 'status'])
        ->logOnlyDirty()
        ->dontSubmitEmptyLogs();
    }


    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'status' => Status::class,
        'is_featured' => Featured::class,
    ];

    public function blogs()
    {
        return $this->morphedByMany(Blog::class, 'categoryable');
    }
    public function products()
    {
        return $this->morphedByMany(Product::class, 'categoryable');
    } 
}
