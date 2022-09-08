// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} key
 * @returns {Promise.<string>}
 */
export async function ReadCookie(key) {
	// BEGIN USER CODE
    const value = (_a = document.cookie
        .split("; ")
        .find(row => row.startsWith(`${key}=`))) === null || _a === void 0 ? void 0 : _a.split("=")[1];
    return value !== null && value !== void 0 ? value : "";
	// END USER CODE
}
