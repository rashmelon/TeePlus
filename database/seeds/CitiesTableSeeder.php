<?php

use App\City;
use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $cities = config('cities');

        foreach ($cities as $city) {
            if (!City::where('name', $city)->first()) {
                City::create([
                    'name' => $city
                ]);
            }
        }
    }
}
