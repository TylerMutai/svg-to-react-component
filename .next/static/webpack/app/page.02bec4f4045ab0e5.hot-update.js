"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx":
/*!********************************************************************************!*\
  !*** ./src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_contexts_formContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/contexts/formContext */ \"(app-pages-browser)/./src/utils/contexts/formContext.ts\");\n/* harmony import */ var _CustomButton_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CustomButton/CustomButton */ \"(app-pages-browser)/./src/components/CustomButton/CustomButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CustomFileInputDisplay = (param)=>{\n    let { className = \"\", name } = param;\n    _s();\n    const { watch, setValue } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_contexts_formContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const files = watch(name);\n    const handleRemove = (index)=>{\n        const filesCopy = [\n            ...files !== null && files !== void 0 ? files : []\n        ];\n        const filesToAdd = [];\n        for(let i = 0; i < filesCopy.length; i += 1){\n            if (i !== index) {\n                filesToAdd.push(filesCopy[i]);\n            }\n        }\n        setValue(name, filesToAdd);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className, \" flex flex-col gap-3 w-full h-full\"),\n        children: (files === null || files === void 0 ? void 0 : files.length) ? files === null || files === void 0 ? void 0 : files.map((f, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex-col gap-2 flex border border-solid border-[##E3E3E3] rounded-[5px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center justify-between w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"whitespace-nowrap overflow-clip px-2\",\n                                children: f.name\n                            }, void 0, false, {\n                                fileName: \"/Users/brianbaliach/Documents/git/typescript/raw/svg-to-component/src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomButton_CustomButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: ()=>handleRemove(i),\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brianbaliach/Documents/git/typescript/raw/svg-to-component/src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brianbaliach/Documents/git/typescript/raw/svg-to-component/src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[4px] bg-[#35A839]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brianbaliach/Documents/git/typescript/raw/svg-to-component/src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, f.name, true, {\n                fileName: \"/Users/brianbaliach/Documents/git/typescript/raw/svg-to-component/src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row items-center w-full h-full rounded-[10px] bg-secondary-color-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"overflow-clip px-2 \",\n                children: \"Uploaded files shall, and will appear here. Otherwise what's my purpose? Why do I exist? Why does anything exist though? Why all these redundant letters in 'queue' just to say 'Q'? Why not 'randevoooo' instead of 'rendezvous'? Why not 'rendezvas' then?\"\n            }, void 0, false, {\n                fileName: \"/Users/brianbaliach/Documents/git/typescript/raw/svg-to-component/src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/brianbaliach/Documents/git/typescript/raw/svg-to-component/src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx\",\n            lineNumber: 44,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/brianbaliach/Documents/git/typescript/raw/svg-to-component/src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomFileInputDisplay, \"Qe8FdG2c6f6syQMpm7bZUMkWbJ0=\");\n_c = CustomFileInputDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomFileInputDisplay);\nvar _c;\n$RefreshReg$(_c, \"CustomFileInputDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9JbnB1dC9DdXN0b21GaWxlSW5wdXQvQ3VzdG9tRmlsZUlucHV0RGlzcGxheS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFDdUI7QUFDSDtBQU85RCxNQUFNSSx5QkFBeUI7UUFBQyxFQUM5QkMsWUFBWSxFQUFFLEVBQ2RDLElBQUksRUFDaUI7O0lBQ3JCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1AsaURBQVVBLENBQUNDLG1FQUFXQTtJQUNsRCxNQUFNTyxRQUFRRixNQUFNRDtJQUVwQixNQUFNSSxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLFlBQVk7ZUFBS0gsa0JBQUFBLG1CQUFBQSxRQUFTLEVBQUU7U0FBRTtRQUNwQyxNQUFNSSxhQUFhLEVBQUU7UUFDckIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLFVBQVVHLE1BQU0sRUFBRUQsS0FBSyxFQUFHO1lBQzVDLElBQUlBLE1BQU1ILE9BQU87Z0JBQ2ZFLFdBQVdHLElBQUksQ0FBQ0osU0FBUyxDQUFDRSxFQUFFO1lBQzlCO1FBQ0Y7UUFDQU4sU0FBU0YsTUFBTU87SUFDakI7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSVosV0FBVyxHQUFhLE9BQVZBLFdBQVU7a0JBQzFCSSxDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9NLE1BQU0sSUFDWk4sa0JBQUFBLDRCQUFBQSxNQUFPUyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0wsa0JBQ2IsOERBQUNHO2dCQUVDWixXQUFVOztrQ0FFViw4REFBQ1k7d0JBQUlaLFdBQVU7OzBDQUNiLDhEQUFDZTtnQ0FBRWYsV0FBVTswQ0FBd0NjLEVBQUViLElBQUk7Ozs7OzswQ0FDM0QsOERBQUNILGtFQUFZQTtnQ0FBQ2tCLFNBQVMsSUFBTVgsYUFBYUk7MENBQUk7Ozs7Ozs7Ozs7OztrQ0FFaEQsOERBQUNHO3dCQUFJWixXQUFVOzs7Ozs7O2VBUFZjLEVBQUViLElBQUk7Ozs7MkNBV2YsOERBQUNXO1lBQUlaLFdBQVU7c0JBQ2IsNEVBQUNlO2dCQUFFZixXQUFVOzBCQUFzQjs7Ozs7Ozs7Ozs7Ozs7OztBQVU3QztHQTdDTUQ7S0FBQUE7QUErQ04sK0RBQWVBLHNCQUFzQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvSW5wdXQvQ3VzdG9tRmlsZUlucHV0L0N1c3RvbUZpbGVJbnB1dERpc3BsYXkudHN4PzJmZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtQ29udGV4dCBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvY29udGV4dHMvZm9ybUNvbnRleHRcIjtcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4uLy4uLy4uL0N1c3RvbUJ1dHRvbi9DdXN0b21CdXR0b25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21GaWxlSW5wdXRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBDdXN0b21GaWxlSW5wdXREaXNwbGF5ID0gKHtcbiAgY2xhc3NOYW1lID0gXCJcIixcbiAgbmFtZSxcbn06IEN1c3RvbUZpbGVJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgd2F0Y2gsIHNldFZhbHVlIH0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcbiAgY29uc3QgZmlsZXMgPSB3YXRjaChuYW1lKSBhcyBGaWxlW107XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmaWxlc0NvcHkgPSBbLi4uKGZpbGVzID8/IFtdKV07XG4gICAgY29uc3QgZmlsZXNUb0FkZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXNDb3B5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcbiAgICAgICAgZmlsZXNUb0FkZC5wdXNoKGZpbGVzQ29weVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNldFZhbHVlKG5hbWUsIGZpbGVzVG9BZGQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZmxleCBmbGV4LWNvbCBnYXAtMyB3LWZ1bGwgaC1mdWxsYH0+XG4gICAgICB7ZmlsZXM/Lmxlbmd0aCA/IChcbiAgICAgICAgZmlsZXM/Lm1hcCgoZiwgaSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17Zi5uYW1lfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgtY29sIGdhcC0yIGZsZXggYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItWyMjRTNFM0UzXSByb3VuZGVkLVs1cHhdXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgb3ZlcmZsb3ctY2xpcCBweC0yXCI+e2YubmFtZX08L3A+XG4gICAgICAgICAgICAgIDxDdXN0b21CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKGkpfT5YPC9DdXN0b21CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzRweF0gYmctWyMzNUE4MzldXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtZnVsbCByb3VuZGVkLVsxMHB4XSBiZy1zZWNvbmRhcnktY29sb3ItNTAwXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctY2xpcCBweC0yIFwiPlxuICAgICAgICAgICAgVXBsb2FkZWQgZmlsZXMgc2hhbGwsIGFuZCB3aWxsIGFwcGVhciBoZXJlLiBPdGhlcndpc2Ugd2hhdCdzIG15XG4gICAgICAgICAgICBwdXJwb3NlPyBXaHkgZG8gSSBleGlzdD8gV2h5IGRvZXMgYW55dGhpbmcgZXhpc3QgdGhvdWdoPyBXaHkgYWxsXG4gICAgICAgICAgICB0aGVzZSByZWR1bmRhbnQgbGV0dGVycyBpbiAncXVldWUnIGp1c3QgdG8gc2F5ICdRJz8gV2h5IG5vdFxuICAgICAgICAgICAgJ3JhbmRldm9vb28nIGluc3RlYWQgb2YgJ3JlbmRlenZvdXMnPyBXaHkgbm90ICdyZW5kZXp2YXMnIHRoZW4/XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21GaWxlSW5wdXREaXNwbGF5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkZvcm1Db250ZXh0IiwiQ3VzdG9tQnV0dG9uIiwiQ3VzdG9tRmlsZUlucHV0RGlzcGxheSIsImNsYXNzTmFtZSIsIm5hbWUiLCJ3YXRjaCIsInNldFZhbHVlIiwiZmlsZXMiLCJoYW5kbGVSZW1vdmUiLCJpbmRleCIsImZpbGVzQ29weSIsImZpbGVzVG9BZGQiLCJpIiwibGVuZ3RoIiwicHVzaCIsImRpdiIsIm1hcCIsImYiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/inputs/Input/CustomFileInput/CustomFileInputDisplay.tsx\n"));

/***/ })

});