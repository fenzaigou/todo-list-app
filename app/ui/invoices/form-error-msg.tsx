import React from 'react';

export default function FormErrorMsg({ errors, name }: { errors: string[] | undefined; name: string; }) {

    if (!errors || errors.length < 1) {
        return null;
    }

    return (
        <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
            {errors.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                </p>
            ))}
        </div>
    )
}
