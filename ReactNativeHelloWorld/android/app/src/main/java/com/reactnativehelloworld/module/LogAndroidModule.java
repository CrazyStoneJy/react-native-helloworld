package com.reactnativehelloworld.module;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by Administrator on 2016/6/28.
 */
public class LogAndroidModule extends ReactContextBaseJavaModule {

    public static final String MODULE_NAME="LogAndroid";

    public LogAndroidModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void log(String tag,String msg){
        Log.d(tag,msg);
    }

    @ReactMethod
    public void logwithName(String msg){
        Log.d("LogAndroid",msg);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }
}
