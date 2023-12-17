import { FC, useEffect, useRef, useState } from "react";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";
import { KTIcon } from "../../../../_metronic/helpers";
import { StepperComponent } from "../../../../_metronic/assets/ts/components";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import {
  createAccountSchemas,
  ICreateAccount,
  inits,
} from "./CreateAccountWizardHelper";
import "./style.css";
const Horizontal: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const [stepper, setStepper] = useState<StepperComponent | null>(null);
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0]);
  const [initValues] = useState<ICreateAccount>(inits);
  const [isSubmitButton, setSubmitButton] = useState(false);

  const loadStepper = () => {
    setStepper(
      StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    );
  };

  const prevStep = () => {
    if (!stepper) {
      return;
    }

    stepper.goPrev();

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);

    setSubmitButton(stepper.currentStepIndex === stepper.totalStepsNumber);
  };

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper) {
      return;
    }

    if (stepper.currentStepIndex !== stepper.totalStepsNumber) {
      stepper.goNext();
    } else {
      stepper.goto(1);
      actions.resetForm();
    }

    setSubmitButton(stepper.currentStepIndex === stepper.totalStepsNumber);

    console.log(values);

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);
  };

  useEffect(() => {
    if (!stepperRef.current) {
      return;
    }

    loadStepper();
  }, [stepperRef]);

  return (
    <div
      ref={stepperRef}
      className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid overflow-hidden"
      id="kt_create_account_stepper"
    >
      <div
        style={{
          backgroundImage: `url("https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_.jpg")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="card d-flex justify-content-start justify-content-xl-center flex-row-auto w-200 w-xl-400px w-xxl-500px me-9"
      >
        {/* begin::Wrapper*/}

        {/* end::Wrapper*/}
      </div>
      <div className="card w-100 w-xl-1000px w-xxl-1200px">
        <div className="card-body overflow-auto">
          <div
            ref={stepperRef}
            className="stepper stepper-links d-flex flex-column pt-10"
            id="kt_create_account_stepper"
          >
            <div className="stepper-nav mb-5 flex-row">
              <div
                className="stepper-item current"
                data-kt-stepper-element="nav"
              >
                <h3 className="stepper-title">Informations sur l'Équipe</h3>
              </div>

              <div className="stepper-item" data-kt-stepper-element="nav">
                <h3 className="stepper-title">Détails du Capitain</h3>
              </div>

              <div className="stepper-item" data-kt-stepper-element="nav">
                <h3 className="stepper-title">Business Info</h3>
              </div>

              <div className="stepper-item" data-kt-stepper-element="nav">
                <h3 className="stepper-title">Completed</h3>
              </div>
            </div>

            <Formik
              validationSchema={currentSchema}
              initialValues={initValues}
              onSubmit={submitStep}
            >
              {() => (
                <Form
                  className="mx-auto mw-600px w-100 pt-15 pb-10"
                  id="kt_create_account_form"
                >
                  <div className="current" data-kt-stepper-element="content">
                    {/* <Step1 /> */}
                    <Step3 />
                  </div>

                  <div data-kt-stepper-element="content">
                    <Step2 />
                  </div>

                  <div data-kt-stepper-element="content">
                    <Step1 />
                  </div>

                  <div data-kt-stepper-element="content">
                    <Step5 />
                  </div>

                  <div className=" pt-15">
                    {/* <div className="mr-2">
                      <button
                        onClick={prevStep}
                        type="button"
                        className="btn btn-lg btn-light-primary me-3"
                        data-kt-stepper-action="previous"
                      >
                        <KTIcon iconName="arrow-left" className="fs-4 me-1" />
                        Back
                      </button>
                    </div> */}

                    <button className="primary button2 me-3 float-start "  data-kt-stepper-action="previous"  onClick={prevStep} type="button">
          <div className="label">
            <span className="hover-effect"></span>
            <span className="label-text fs-6 fw-bold">
            <KTIcon iconName="arrow-left" className="fs-4 me-1" />
                        Back
              
              </span>
          </div>
        </button>
                    {/* <div>
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary me-3"
                      >
                        <span className="indicator-label">
                          {!isSubmitButton && "Continue"}
                          {isSubmitButton && "Submit"}
                          <KTIcon
                            iconName="arrow-right"
                            className="fs-3 ms-2 me-0"
                          />
                        </span>
                      </button>
                    </div> */}
                  </div>
                  <button className="primary button2 me-3 float-end " type="submit">
          <div className="label">
            <span className="hover-effect"></span>
            <span className="label-text fs-6 fw-bold">
            <span className="indicator-label">
                          {!isSubmitButton && "Continue"}
                          {isSubmitButton && "Submit"}
                          <KTIcon
                            iconName="arrow-right"
                            className="fs-3 ms-2 me-0"
                          />
                        </span>
              
              </span>
          </div>
        </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Horizontal };
