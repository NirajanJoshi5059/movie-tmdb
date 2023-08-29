import {
  Card,
  Input,
  Button,
  Typography,
  Radio,
  Checkbox,
  Select,
  Option, Textarea
} from "@material-tailwind/react";
import { checkData, countryData, genders } from "../data/forms_data";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";
import { nanoid } from "@reduxjs/toolkit";


const AddForm = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const userSchema = Yup.object().shape({
    username: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required(),
    email: Yup.string().email().required('required'),
    gender: Yup.string().required('required'),
    habits: Yup.array().min(1).required('required'),
    country: Yup.string().required('required'),
    msg: Yup.string().min(10).max(200).required('required'),
    image: '',
    imageFile: Yup.mixed().test('invalid image', (val) => {
      return ["image/jpeg", "image/jpg", "image/png"].includes(val.type)
    }).required()

  });


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      gender: '',
      habits: [],
      country: '',
      msg: '',
      image: '',
      id: nanoid(),
      imageFile: null
    },
    onSubmit: (val) => {
      // dispatch(addUser(val));
      // nav(-1);
    },
    validationSchema: userSchema
  });



  return (
    <Card color="transparent" shadow={true} className="max-w-lg p-5 mx-auto">

      <Typography color="gray" className="mt-1 font-normal">
        Enter your details.
      </Typography>
      <form onSubmit={formik.handleSubmit} className="mt-3 mb-2 ">
        <div className="mb-4 flex flex-col gap-4">
          <Input
            onChange={formik.handleChange}
            name="username"
            value={formik.values.username}
            size="lg" label="Name" />

          {formik.errors.username && formik.touched.username && <h1 className="text-pink-300">{formik.errors.username}</h1>}
          <Input
            onChange={formik.handleChange}
            name="email"
            value={formik.values.email}
            size="lg" label="Email" />
          {formik.errors.email && formik.touched.email && <h1 className="text-pink-300">{formik.errors.email}</h1>}


          <div>
            <Typography color="gray" className="mt-1 font-normal">
              Select Your gender
            </Typography>


            <div className="flex gap-10">
              {genders.map((gen, i) => {
                return <Radio color={gen.color} name="gender" label={gen.label} value={gen.value}
                  onChange={formik.handleChange}
                  key={i} />;
              })}


            </div>
            {formik.errors.gender && formik.touched.gender && <h1 className="text-pink-300">{formik.errors.gender}</h1>}
          </div>


          <div>
            <Typography color="gray" className="mt-1 font-normal">
              Select Your habits
            </Typography>


            <div className="flex gap-10">
              {checkData.map((check, i) => {
                return <Checkbox color={check.color}
                  onChange={formik.handleChange}
                  name="habits" label={check.label} value={check.value} key={i} />;
              })}


            </div>
            {formik.errors.habits && formik.touched.habits && <h1 className="text-pink-300">{formik.errors.habits}</h1>}
          </div>


          <div>
            <Typography color="gray" className="mt-1 font-normal">
              Select Your Country
            </Typography>


            <div className="my-3">
              <Select name="country"
                onChange={(e) => formik.setFieldValue('country', e)}
                label="Select Your Contry">
                {countryData.map((country, i) => {
                  return <Option value={country.value} key={i}>{country.label}</Option>
                })}
              </Select>

            </div>
            {formik.errors.country && formik.touched.country && <h1 className="text-pink-300">{formik.errors.country}</h1>}
          </div>

          <div className="w-96">
            <Textarea
              onChange={formik.handleChange}
              name="msg"
              value={formik.values.msg}
              label="Message" />
            {formik.errors.msg && formik.touched.msg && <h1 className="text-pink-300">{formik.errors.msg}</h1>}
          </div>




          <div>
            <Typography color="gray" className="mt-1 font-normal">
              Select Your Image
            </Typography>
            <Input
              onChange={(e) => {
                const file = e.target.files[0];
                formik.setFieldValue('imageFile', file);
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {
                  formik.setFieldValue('image', e.target.result);
                })
              }}
              name="imageFile" type="file" />
            {formik.values.image && <img className="my-2" src={formik.values.image} alt="" />}
            {formik.errors.imageFile && formik.touched.imageFile && <h1 className="text-pink-300">{formik.errors.imageFile}</h1>}
          </div>





        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  );
}

export default AddForm