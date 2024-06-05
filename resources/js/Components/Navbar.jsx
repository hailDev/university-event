import { Link } from "@inertiajs/react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex items-center justify-between flex-1">
                <div className="flex items-center gap-2">
                    <a href="/" className="btn btn-ghost normal-case text-xl">
                        University Event
                    </a>
                    {/* {user && (
                        <ul className="hidden md:flex items-center gap-4">
                            <li>
                                <InertiaLink href={route("event.lists")}>
                                    Events
                                </InertiaLink>
                            </li>
                            <li>
                                <a href="">Recap</a>
                            </li>
                        </ul>
                    )} */}
                    {/* list */}
                    {/* <div className="md:hidden dropdown dropdown-end">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <span className="text-xl">☰</span>
                        </button>
                        <ul className="hidden md:flex items-center gap-4">
                            <li className="md:hidden sm:hidden">
                                <InertiaLink href={route("event.lists")}>
                                    Events
                                </InertiaLink>
                            </li>
                            <li className="md:hidden sm:hidden">
                                <InertiaLink href={route("event.lists")}>
                                    Webinar
                                </InertiaLink>
                            </li>
                            <li className="md:hidden sm:hidden">
                                <InertiaLink href={route("belmawa.lists")}>
                                    Belmawa
                                </InertiaLink>
                            </li>
                            <li className="md:hidden sm:hidden">
                                <InertiaLink href={route("community.lists")}>
                                    Community
                                </InertiaLink>
                            </li>
                        </ul>
                    </div> */}
                    <ul className="hidden md:flex items-center gap-4">
                        <li>
                            <InertiaLink href={route("event.lists")}>
                                Events
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink href={route("webinar.lists")}>
                                Webinar
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink href={route("belmawa.lists")}>
                                Belmawa
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink href={route("community.lists")}>
                                Community
                            </InertiaLink>
                        </li>
                    </ul>
                    {/* list */}
                </div>
                {/* <div className="form-control mr-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div> */}
            </div>
            <div className="flex-none gap-2">
                {!user ? (
                    <>
                        {/* <div className="flex items-center gap-2">
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img src="/build/assets/images-base/user-image/default.png" />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a href={route("login")}>Login</a>
                                    </li>
                                    <li>
                                        <a href={route("register")}>Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:hidden dropdown dropdown-end">
                                <button
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle"
                                >
                                    <span className="text-xl">☰</span>
                                </button>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <InertiaLink
                                            href={route("event.lists")}
                                        >
                                            Events
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            href={route("webinar.lists")}
                                        >
                                            Webinar
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            href={route("belmawa.lists")}
                                        >
                                            Bemawa activities
                                        </InertiaLink>
                                    </li>
                                    <li>
                                        <InertiaLink
                                            href={route("community.lists")}
                                        >
                                            Community
                                        </InertiaLink>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="flex items-center gap-2">
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img src="/build/assets/images-base/user-image/default.png" />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a href={route("login")}>Login</a>
                                    </li>
                                    <li>
                                        <a href={route("register")}>Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:hidden dropdown dropdown-end">
                                <button
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle"
                                >
                                    <span className="text-xl">☰</span>
                                </button>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    <li className="md:hidden">
                                        <InertiaLink
                                            href={route("event.lists")}
                                        >
                                            Events
                                        </InertiaLink>
                                    </li>
                                    <li className="md:hidden">
                                        <InertiaLink
                                            href={route("webinar.lists")}
                                        >
                                            Webinar
                                        </InertiaLink>
                                    </li>
                                    <li className="md:hidden">
                                        <InertiaLink
                                            href={route("belmawa.lists")}
                                        >
                                            Belmawa
                                        </InertiaLink>
                                    </li>
                                    <li className="md:hidden">
                                        <InertiaLink
                                            href={route("community.lists")}
                                        >
                                            Community
                                        </InertiaLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className=" flex items-center gap-2">
                        {" "}
                        {/* Tambahkan class 'md:hidden' untuk menyembunyikan elemen ini pada tampilan desktop */}
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img src={user.user_image} />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <InertiaLink
                                        href={route("profile.editInertia")}
                                    >
                                        Profile
                                    </InertiaLink>
                                </li>
                                <li>
                                    <InertiaLink href={route("dashboard")}>
                                        Dashboard
                                    </InertiaLink>
                                </li>
                                {/* <li>
                                    <InertiaLink>Settings</InertiaLink>
                                </li> */}

                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Dropdown untuk menu Events dan Recap */}
                        <div className="md:hidden dropdown dropdown-end">
                            <button
                                tabIndex={0}
                                className="btn btn-ghost btn-circle"
                            >
                                <span className="text-xl">☰</span>
                            </button>
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <InertiaLink href={route("event.lists")}>
                                        Events
                                    </InertiaLink>
                                </li>
                                <li>
                                    <InertiaLink href={route("webinar.lists")}>
                                        Webinar
                                    </InertiaLink>
                                </li>
                                <li>
                                    <InertiaLink href={route("belmawa.lists")}>
                                        Bemawa activities
                                    </InertiaLink>
                                </li>
                                <li>
                                    <InertiaLink
                                        href={route("community.lists")}
                                    >
                                        Community
                                    </InertiaLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
