// export default ( err, vm, info ) => {

// }

const ErrorHandler = (err, vm ,info) => {
    console.log(`[ErrorHandler: Error] ${err}`);
    console.log(`[ErrorHandler: ViewModel] ${vm}`);
    console.log(`[ErrorHandler: Information] ${info}`);
}

export default ErrorHandler;