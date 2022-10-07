import { useState } from "react";
import Dropzone from "react-dropzone";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { checkIcon, deleteIcon, imageIcon } from "../../assets/images/icons";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export const CreateCompanyPage = () => {

  const navigate = useNavigate()

  // Form
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => console.log("hola");
  const [formStep, setFormStep] = useState(1)
  const nextPage = ()=>{
    setFormStep(page=>page+1)
  }
  const previousPage = ()=>{
    setFormStep(page=>page-1)
  }
  const [startDate, setStartDate] = useState(new Date());

  // Image Input (Dropzone)
  const [imageURL, setImageURL] = useState(null);
  const showImageInput = (files) => {
    const file = files[0];
    if (!file) return;
    const path = URL?.createObjectURL(file);
    setImageURL(path);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="main flex flex-col justify-center items-center py-8 text-gray-600">
        <h1 className="text-center text-xl font-bold">
          Tell us about your company
        </h1>
        <div className="navigate-form flex justify-center items-center gap-4 p-8">
          <div className="item-form flex flex-col items-center relative">
            <p
              className={`flex justify-center items-center number-item h-6 w-6 rounded-full border-solid border-2 text-xs border-blue-500 text-blue-500 ${
                formStep > 1 && "bg-blue-500"
              }`}
            >
              {formStep > 1 ? (
                <img src={checkIcon} className="h-3 w-3" alt="" />
              ) : (
                "1"
              )}
            </p>
            <p className="description-item absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-blue-500">
              Information
            </p>
          </div>
          <div
            className={`line-divide w-20 border-t-2 ${
              formStep > 1 ? "border-t-blue-500" : "border-t-gray-300"
            }`}
          ></div>
          <div className="item-form flex flex-col items-center relative">
            <p
              className={`flex justify-center items-center number-item h-6 w-6 rounded-full border-solid border-2 text-xs ${
                formStep < 2
                  ? "border-gray-400 text-gray-400"
                  : formStep == 2
                  ? "border-blue-500 text-blue-500"
                  : "border-blue-500 text-blue-500 bg-blue-500"
              }`}
            >
              2
            </p>
            <p
              className={`description-item absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs  ${
                formStep < 2 ? "text-gray-400" : "text-blue-500"
              }`}
            >
              Preferences
            </p>
          </div>
        </div>
        <form className="form-create-company" onSubmit={handleSubmit(onSubmit)}>
          {formStep == 1 && (
            <div className="form-1 bg-white rounded-lg mt-8 p-8 grid grid-cols-4 gap-4">
              <div className="formItem flex flex-col gap-1.5 col-span-4 sm:col-span-3">
                <label htmlFor="ruc" className="text-sm text-gray-800">
                  * N° RUC
                </label>
                <input
                  id="ruc"
                  {...register("ruc", { required: true })}
                  className="bg-gray-100 h-10 rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
                />
                {errors.ruc && <span>This field is required</span>}
              </div>
              <div className="formItem flex flex-col gap-1.5 col-span-4 sm:col-span-1">
                <label htmlFor="dv" className="text-sm text-gray-800">
                  DV
                </label>
                <input
                  id="dv"
                  {...register("dv")}
                  className="bg-gray-100 h-10 rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
                />
              </div>
              <div className="formItem flex flex-col gap-1.5 col-span-4 sm:col-span-2">
                <label
                  htmlFor="bussiness-name"
                  className="text-sm text-gray-800"
                >
                  * Business name
                </label>
                <input
                  type="text"
                  id="bussiness-name"
                  {...register("bussinessName", { required: true })}
                  className="bg-gray-100 h-10 rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
                />
                {errors.bussinessName && <span>This field is required</span>}
              </div>
              <div className="formItem flex flex-col gap-1.5 col-span-4 sm:col-span-2">
                <label htmlFor="web-site" className="text-sm text-gray-800">
                  Web site
                </label>
                <input
                  type="text"
                  id="web-site"
                  {...register("webSite")}
                  className="bg-gray-100 h-10 rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
                />
              </div>
              <div className="formItem flex flex-col gap-1.5 col-span-4">
                <Dropzone
                  onDrop={(acceptedFiles) => showImageInput(acceptedFiles)}
                  accept={{ "image/*": [] }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input
                          {...getInputProps()}
                          // accept={["jpg"]}
                          multiple={false}
                        />
                        <label htmlFor="logo" className="text-sm text-gray-800">
                          Logo of company (64x64)
                        </label>
                        <div className="mt-2 contentImageInput flex flex-col items-center justify-center h-40 bg-gray-100 border-2 border-gray-300 border-dashed rounded-lg hover:cursor-pointer">
                          <div className="flex gap-2 items-baseline">
                            <img
                              src={imageURL ? imageURL : imageIcon}
                              className={`${imageURL ? "w-24" : "w-8"}`}
                              alt=""
                            />
                            {imageURL && (
                              <img
                                src={deleteIcon}
                                onClick={(e) => {
                                  setImageURL(null);
                                }}
                                className="w-6"
                                alt=""
                              />
                            )}
                          </div>
                          <p className="text-gray-400">
                            Drag and drop an image
                          </p>
                        </div>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className="intruction-form col-span-4 text-center text-slate-400">
                <p>Input field that contain * are required.</p>
              </div>
              <div className="buttons-form flex justify-center gap-5 col-span-4">
                <button
                  onClick={() => navigate("/select-company")}
                  type="button"
                  className="border border-gray-200 hover:bg-gray-100 rounded-md py-2 px-4"
                >
                  Cancel
                </button>
                <button
                  onClick={nextPage}
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-4 disabled:opacity-75 disabled:bg-gray-100 disabled:hover:bg-gray-100"
                  disabled={!isValid}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {formStep == 2 && (
            <div className="form-2 bg-white rounded-lg mt-8 p-8 grid grid-cols-4 gap-4">
              <div className="formItem flex flex-col gap-1.5 col-span-4">
                <div htmlFor="ruc" className="text-sm text-gray-800">
                  * Pay frecuency
                </div>
                <div className="input-radio w-full flex justify-around mx-auto">
                  <label htmlFor="biweekly" className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="biweekly"
                      value="Weekly"
                      {...register("payFrecuency", { required: true })}
                      className="appearance-none checked:bg-blue-500  w-4 h-4 border border-slate-400 rounded-sm"
                    />
                    <p>Weekly</p>
                  </label>
                  <label htmlFor="monthly" className="flex gap-2">
                    <input
                      type="radio"
                      id="monthly"
                      value="monthly"
                      {...register("payFrecuency", { required: true })}
                      className="appearance-none checked:bg-blue-500  w-4 h-4 border border-slate-400 rounded-sm"
                    />
                    <p>Monthly</p>
                  </label>
                </div>
              </div>
              <div className="formItem flex flex-col gap-1.5 col-span-4">
                <label htmlFor="datePay" className="text-sm text-gray-800">
                  * Date to settle
                </label>
                <Controller
                  control={control}
                  name="datePay"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => setStartDate(date)}
                      showPopperArrow={false}
                      {...field}
                      placeholderText="Month and year"
                      dateFormat="MM/yyyy"
                      className="bg-gray-100 h-10 w-full rounded-lg p-3 border border-gray-300 text-sm text-gray-400 focus:outline-none"
                      showMonthYearPicker
                    />
                  )}
                />
                {errors.datePay && <span>This field is required</span>}
              </div>
              <div className="intruction-form col-span-4 text-center text-slate-400">
                <p>Input field that contain * are required.</p>
              </div>
              <div className="buttons-form flex justify-center gap-5 col-span-4">
                <button
                  onClick={previousPage}
                  className="border border-gray-200 hover:bg-gray-100 rounded-md py-2 px-4"
                >
                  Back
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-4 disabled:opacity-75 disabled:bg-gray-100 disabled:hover:bg-gray-100"
                  disabled={!isValid}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          <span>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </span>
        </form>
      </div>
    </div>
  );
}
