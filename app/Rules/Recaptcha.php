<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Recaptcha implements Rule
{
    /**
     * Required Google ReCAPTCHA score.
     *
     * @var float
     */
    protected $score;

    /**
     * Create a new rule instance.
     *
     * @param float $score
     */
    public function __construct($score = 0.5)
    {
        $this->score = $score;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if (config('recaptcha.site_key') !== null && config('recaptcha.secret_key') !== null) {
            $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
            $recaptcha = file_get_contents($recaptcha_url . '?secret=' . config('recaptcha.secret_key') . '&response=' . $value);
            $recaptcha = json_decode($recaptcha);

            return $recaptcha->score >= $this->score;
        }

        // If we don't have reCAPTCHA credentials set, allow the submission.
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Sorry, you have not passed Google ReCAPTCHA verification.';
    }
}
