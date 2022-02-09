package com.josegomez.core.exceptions;

public class GuestExceptions extends Exception{

    private String message;

    public GuestExceptions(String message) {
        this.message = message;
    }

    public GuestExceptions(String message, String message1) {
        super(message);
        this.message = message1;
    }

    public GuestExceptions(String message, Throwable cause, String message1) {
        super(message, cause);
        this.message = message1;
    }

    public GuestExceptions(Throwable cause, String message) {
        super(cause);
        this.message = message;
    }

    public GuestExceptions(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, String message1) {
        super(message, cause, enableSuppression, writableStackTrace);
        this.message = message1;
    }
}
