package com.mobileuikit;

import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    CustomModule(ReactApplicationContext context)
    {
        super(context);
        reactContext= context;
    }

    @ReactMethod
    public void show(){
        Toast.makeText(reactContext, "Hi from android", Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void getDeviceId(Promise promise){
        try{
            String android_Id = Settings.Secure.getString(reactContext.getContentResolver(),Settings.Secure.ANDROID_ID);
            promise.resolve(android_Id);
        } catch (Exception e){
            promise.reject("Error", e);
        }
    }

    @NonNull
    @Override
    public String getName() {
        return "ABC";
    }
}
