import Button from '@/Components/Atomic/Atoms/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Atomic/Atoms/Input';
import Label from '@/Components/Atomic/Atoms/Label';
import React, { useEffect } from 'react';
import ValidationErrors from '@/Components/Atomic/Atoms/ValidationErrors';
import { useForm } from '@inertiajs/inertia-react';
import route from 'ziggy-js';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData('password', event.target.value);
    };

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <Guest>
            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
