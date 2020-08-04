<?php

use App\Status;
use Illuminate\Database\Seeder;

class StatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $cities = config('status');

        foreach ($cities as $city) {
            if (!Status::where('name', $city)->first()) {
                Status::create([
                    'name' => $city
                ]);
            }
        }
    }
}
