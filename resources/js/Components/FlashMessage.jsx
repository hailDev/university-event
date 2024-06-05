import React from "react";
import { usePage } from "@inertiajs/react";

const FlashMessage = () => {
    const { flash } = usePage().props;

    return (
        flash.message && (
            <div className={`flash-message ${flash.type}`}>{flash.message}</div>
        )
    );
};

export default FlashMessage;
