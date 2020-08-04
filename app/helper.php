<?php

use App\Media;

if (!function_exists('download_file'))
{
    function download_file($file, $path)
    {
        $new_name = md5(time() . $file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension();
        $file->move('storage/'.$path, $new_name);
        return $new_name;
    }
}

if (!function_exists('createAndDownloadMedia'))
{
    function createAndDownloadMedia($file, $path)
    {
        $data = [
            'old_name' => $file->getClientOriginalName(),
        ];
        $data['url'] = download_file($file, $path);
        return Media::create($data);
    }
}
