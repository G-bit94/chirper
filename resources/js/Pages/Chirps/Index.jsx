import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import { useForm, Head } from '@inertiajs/react';
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";


export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('chirps.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Chirps" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    {/* <textarea

                        placeholder=""
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    ></textarea> */}

                    <div className="grid w-full gap-2">
                        <Label htmlFor="message-2">Your Message</Label>
                        <Textarea
                            value={data.message}
                            placeholder="What's on your mind?"
                            onChange={e => setData('message', e.target.value)} />
                        <InputError message={errors.message} className="mt-2" />
                        <Button className="mt-4" variant="primary" disabled={processing}>Send Chirp</Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}