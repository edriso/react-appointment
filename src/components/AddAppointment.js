import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";

const AddAppointment = ({ lastId, onSendAppointment }) => {
  const emptyData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(emptyData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + " " + formData.aptTime,
      aptNotes: formData.aptNotes,
    };

    onSendAppointment(newAppointment);

    setFormData(emptyData);
    setShowForm(!showForm);
  };

  return (
    <section>
      <button
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left
        ${showForm ? "rounded-t-md" : "rounded-md"}
        `}
        onClick={() => setShowForm(!showForm)}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" />
          &nbsp; {showForm ? "Hide Form" : "Add Appointment"}
        </div>
      </button>

      {showForm && (
        <form
          className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4"
          onSubmit={handleSubmit}
        >
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="ownerName"
                id="ownerName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={formData.ownerName}
                onChange={(event) =>
                  setFormData({ ...formData, ownerName: event.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="petName"
                id="petName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={formData.petName}
                onChange={(event) =>
                  setFormData({ ...formData, petName: event.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="aptDate"
                id="aptDate"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={formData.aptDate}
                onChange={(event) =>
                  setFormData({ ...formData, aptDate: event.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="time"
                name="aptTime"
                id="aptTime"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={formData.aptTime}
                onChange={(event) =>
                  setFormData({ ...formData, aptTime: event.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="aptNotes"
                name="aptNotes"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Detailed comments about the condition"
                value={formData.aptNotes}
                onChange={(event) =>
                  setFormData({ ...formData, aptNotes: event.target.value })
                }
              ></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                disabled={!formData.petName || !formData.ownerName}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default AddAppointment;
