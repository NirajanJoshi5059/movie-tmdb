import React from 'react'
import {
    Button,
    Input,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';

const SearchCompo = () => {
    const nav = useNavigate();

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: (val, {resetForm}) => {
            nav(`movieSearch/${val.search}`)
        }
    });
    return (
        <div className="relative ">
            <form onSubmit={formik.handleSubmit}>
                <Input onChange={formik.handleChange} name='search' value={formik.values.search}
                    type="search"
                    color="white"
                    label="Search..."
                    className="pr-24"

                />
                <Button type='submit'
                    size="sm"
                    color='deep-purple'
                    className="!absolute right-1 top-1 rounded ">
                    Search
                </Button>
            </form>
        </div>
    )
}

export default SearchCompo
