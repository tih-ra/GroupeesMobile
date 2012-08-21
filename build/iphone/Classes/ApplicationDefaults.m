/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"rhino"] forKey:@"ti.android.runtime"];
    [_property setObject:[TiUtils stringValue:@"DZ9AezITZbd4BrKG2kf3nuLjbgTaVVGh"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"DWnaCutKlq2C5SQAMmIBdPVW49dd44uJ"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"uy6MhDfFNbaXTj6TVzpTAby70FJF6xWN"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"taYR50MJAvTCjJshAWK4qG0h9wv12deA"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"82iLbKZwF2EfuVRXSsmmVJ66ZojYnug6"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"IKD9Aiy6L53y9rjKrHA4g8thmr8zv3Rx"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
