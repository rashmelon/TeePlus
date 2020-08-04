<?php

use Illuminate\Database\Seeder;

class PaymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            [
                'name' => 'cash',
                'pretty_name' => 'Cash'
            ]
        ];
        foreach ($types as $type) {
            \App\PaymentType::create($type);
        }
    }
}
