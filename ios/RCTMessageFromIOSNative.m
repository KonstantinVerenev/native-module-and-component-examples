//
//  RCTMessageFromIOSNative.m
//  NativeModulesAndComponents
//
//  Created by Kanstantsin Veraniou on 11.03.22.
//

#import "RCTMessageFromIOSNative.h"

@implementation RCTMessageFromIOSNative

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(MessageFromIosNative);

RCT_EXPORT_METHOD(getMessage:(RCTResponseSenderBlock)callback)
{
  callback(@[@"text from ios native code"]);
}

@end
