<?php

namespace App\Http\Responses;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use League\Fractal\TransformerAbstract;
use Spatie\Fractal\Fractal;

class CrudResponse
{
    /**
     * @var array
     */
    private $data;

    /**
     * @var null
     */
    private $meta;

    /**
     * @var string
     */
    private $message;

    /**
     * @var int
     */
    private $status_code;

    /**
     * @var null
     */
    private $errors;

    /**
     * CrudResponse constructor.
     */
    public function __construct()
    {
        $this->data = [];
        $this->meta = null;
        $this->message = "Successful Operation";
        $this->status_code = 200;
        $this->errors = null;
    }

    /**
     * @param integer $status_code
     * @return CrudResponse
     */
    public function setStatusCode($status_code)
    {
        $this->status_code = $status_code;
        return $this;
    }

    /**
     * @param mixed $data
     * @return CrudResponse
     */
    public function setData($data)
    {
        $this->data = $data;
        return $this;
    }

    /**
     * @param object $meta
     * @return CrudResponse
     */
    public function setMeta($meta)
    {
        $this->meta = $meta;
        return $this;
    }

    /**
     * @param string $message
     * @return CrudResponse
     */
    public function setMessage($message)
    {
        $this->message = $message;
        return $this;
    }

    /**
     * @param object $errors
     * @return CrudResponse
     */
    public function setErrors($errors)
    {
        $this->errors = $errors;
        return $this;
    }

    /**
     *
     * @return JsonResponse
     */
    public function execute()
    {
        return response()->json([
            'message' => $this->message,
            'data' => $this->data,
            'meta' => $this->meta,
            'errors' => $this->errors
        ])->setStatusCode($this->status_code);
    }

    /**
     * @param $errors
     * @param string $message
     * @return CrudResponse
     */
    public function errorRespond($errors, $message = "an error has encountered")
    {
        $this->errors = $errors;
        $this->message  = $message;
        return $this;
    }

    /**
     * @param Collection $data
     * @param $transformer
     * @param $includes
     * @param string $message
     * @return CrudResponse
     */
    public function indexRespond($data, $transformer, $includes = [], $message = "Data fetched successfully")
    {
        $this->mapTransformerData(fractal($data, new $transformer)->parseIncludes($includes));
        $this->message  = $message;
        return $this;
    }

    /**
     * @param Builder $builder
     * @param $transformer
     * @param $includes
     * @param string $message
     * @return CrudResponse
     */
    public function fluentIndexRespond(Builder $builder, $transformer, $includes = [], $message = "Data fetched successfully")
    {
        $this->mapTransformerData(fractal((new IndexResponse($builder))->execute(), new $transformer)->parseIncludes($includes));
        $this->message = $message;
        return $this;
    }

    /**
     * @param Collection $data
     * @param $transformer
     * @param $includes
     * @param string $message
     * @return CrudResponse
     */
    public function showRespond($data, $transformer, $includes = [], $message = "Item fetched successfully")
    {
        $this->mapTransformerData(fractal($data, new $transformer)->parseIncludes($includes));
        $this->message  = $message;
        return $this;
    }

    /**
     * @param Collection $data
     * @param $transformer
     * @param $includes
     * @param string $message
     * @return CrudResponse
     */
    public function createRespond($data, $transformer, $includes = [], $message = "Item Created successfully")
    {
        $this->mapTransformerData(fractal($data, new $transformer)->parseIncludes($includes));
        $this->data = $data;
        $this->message  = $message;
        return $this;
    }

    /**
     * @param Collection $data
     * @param $transformer
     * @param $includes
     * @param string $message
     * @return CrudResponse
     */
    public function updateRespond($data,  $transformer, $includes = [], $message = "Item updated successfully")
    {
        $this->mapTransformerData(fractal($data, new $transformer)->parseIncludes($includes));
        $this->message  = $message;
        return $this;
    }

    /**
     * @param $message
     * @return CrudResponse
     */
    public function deleteRespond($message = "Item deleted successfully")
    {
        $this->message  = $message;
        return $this;
    }

    /**
     * if data is paginated then it contains data and meta object and the usual data passed to
     * response function contains only data
     *
     * @param $data
     * @return void
     */
    private function mapTransformerData($data)
    {
        if ($data instanceof Fractal){
            $data = $data->toArray();
            if (array_key_exists('meta', $data)){
                $this->meta = $data['meta'];
            }
            $this->data = $data['data'];
        }
    }
}
