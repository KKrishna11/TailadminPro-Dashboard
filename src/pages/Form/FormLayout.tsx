import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName=" Pro Form Layout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Contact Form 2
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                {/* 
                <div className="mb-4.5">


                  
                </div> */}

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Email <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Phone
                    </label>
                    <input
                      type="phone"
                      placeholder="(321) 5555-0115"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Select Option
                  </label>

                  <div className="flex flex-wrap items-center gap-5.5">
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="radio"
                          name="roleSelect"
                          id="Graphics"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        Graphics Design
                      </label>
                    </div>
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="radio"
                          name="roleSelect"
                          id="Web"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        Web Development
                      </label>
                    </div>
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="radio"
                          name="roleSelect"
                          id="Logo"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        Logo Design
                      </label>
                    </div>
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="radio"
                          name="roleSelect"
                          id="Others"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        Others
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Sign In Form
              </h3>
            </div>

            <form action="#">
              <div className="p-6.5">
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Age
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your age"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-5.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    {' '}
                    Which option best describes you?{' '}
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ">
                      <option value="" className="text-body dark:text-bodydark">
                        Select your subject
                      </option>
                      <option
                        value="Student"
                        className="text-body dark:text-bodydark"
                      >
                        Student
                      </option>
                      <option
                        value="UX/UI Designer"
                        className="text-body dark:text-bodydark"
                      >
                        UX/UI Designer
                      </option>
                      <option
                        value="Web Developer"
                        className="text-body dark:text-bodydark"
                      >
                        Web Developer
                      </option>
                    </select>
                    <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mb-5.5">
                  <label
                    htmlFor="recommend"
                    className="mb-4.5 block text-sm font-medium text-black dark:text-white"
                  >
                    Would you recommend our site to a friend?
                  </label>
                  <div className="flex flex-col gap-2.5">
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="radio"
                          name="recommend"
                          id="Yes"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        Yes
                      </label>
                    </div>

                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="radio"
                          name="recommend"
                          id="No"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        No
                      </label>
                    </div>

                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        {/* <input className="sr-only" type="radio" name="recommend" id="No">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body"><span className="h-2.5 w-2.5 rounded-full bg-primary hidden"/></span></span>No</label></div><div><label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white"> */}
                        <input
                          className="sr-only"
                          type="radio"
                          name="recommend"
                          id="Maybe"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        Maybe
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-4.5 block text-sm font-medium text-black dark:text-white">
                    Which languages &amp; frameworks you know?
                  </label>
                  <div className="flex flex-col gap-2.5">
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="checkbox"
                          name="roleSelect"
                          id="C"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        C
                      </label>
                    </div>
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="checkbox"
                          name="roleSelect"
                          id="C++"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        C++
                      </label>
                    </div>
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="checkbox"
                          name="roleSelect"
                          id="Java"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        Java
                      </label>
                    </div>
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="checkbox"
                          name="roleSelect"
                          id="Python"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        Python
                      </label>
                    </div>
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="checkbox"
                          name="roleSelect"
                          id="JavaScript"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        JavaScript
                      </label>
                    </div>
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="checkbox"
                          name="roleSelect"
                          id="React"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        React
                      </label>
                    </div>
                    <div>
                      <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                        <input
                          className="sr-only"
                          type="checkbox"
                          name="roleSelect"
                          id="Angular"
                        />
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-body">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary hidden"></span>
                        </span>
                        Angular
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-5.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Any comments or suggestions?
                  </label>
                  <textarea
                    placeholder="Type here"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* <!-- Sign Up Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Sign Up Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
