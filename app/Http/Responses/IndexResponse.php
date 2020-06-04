<?php

namespace App\Http\Responses;


use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use League\Fractal\TransformerAbstract;
use Illuminate\Database\Eloquent\Builder;
use App\Traits\FiltersListsTrait;
use App\Traits\PaginatesResponsesTrait;

class IndexResponse
{
    use PaginatesResponsesTrait, FiltersListsTrait;
    /**
     * The response resource builder.
     *
     * @var Builder
     */
    protected $builder;

    /**
     * Index response constructor.
     *
     * @param Builder $builder
     */
    public function __construct(Builder $builder)
    {
        $this->builder = $builder;
    }

    /**
     * Create an HTTP response that represents the object.
     *
     * @return Collection
     */
    public function execute()
    {
        $this
            ->buildFilters()
            ->buildSorting()
            ->buildWith();
        if ($this->hasPagination()) {
            return $this->toPaginatedResponse();
        }
        return $this->builder->get();
    }

    /**
     * Add sorting to the query builder.
     *
     * @return $this
     */
    protected function buildSorting()
    {
        if (request()->has('latest')) {
            $this->builder = $this->builder->latest('created_at');
        }
        if (request()->has('sortAsc')) {
            $this->builder = $this->builder->orderBy(request()->sortAsc, 'asc');
        }
        if (request()->has('sortDesc')) {
            $this->builder = $this->builder->orderBy(request()->sortDesc, 'desc');
        }
        return $this;
    }

    public function buildWith()
    {
        if (request()->has('with')) {
            $withs = explode(',', request()->with);
            foreach ($withs as $with){
                $this->builder->with($with);
            }
        }
        return $this;
    }
}
