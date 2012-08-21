//
//  iPhoneStreamingPlayerAppDelegate.m
//  iPhoneStreamingPlayer
//
//  Created by Matt Gallagher on 28/10/08.
//  Copyright Matt Gallagher 2008. All rights reserved.
//
//  Permission is given to use this source code file, free of charge, in any
//  project, commercial or otherwise, entirely at your risk, with the condition
//  that any redistribution (in part or whole) of source code must retain
//  this copyright and permission notice. Attribution in compiled projects is
//  appreciated but not required.
//

#import <dispatch/dispatch.h>

#ifndef kCFCoreFoundationVersionNumber_iPhoneOS_4_0
#define kCFCoreFoundationVersionNumber_iPhoneOS_4_0 550.32
#endif

#import "iPhoneStreamingPlayerAppDelegate.h"
#import "iPhoneStreamingPlayerViewController.h"
#import "AudioStreamer.h"

@implementation iPhoneStreamingPlayerAppDelegate

@synthesize window;
@synthesize viewController;

@synthesize uiIsVisible;
- (void)applicationDidFinishLaunching:(UIApplication *)application {
	self.uiIsVisible = YES;
		NSDictionary *credentialStorage =
			[[NSURLCredentialStorage sharedCredentialStorage] allCredentials];
		NSLog(@"Credentials: %@", credentialStorage);
	[viewController createTimers:YES];
	[viewController forceUIUpdate];
    // Override point for customization after app launch    
    [window addSubview:viewController.view];
    [window makeKeyAndVisible];
	[[NSNotificationCenter defaultCenter]
	 addObserver:self
	 selector:@selector(presentAlertWithTitle:)
	 name:ASPresentAlertWithTitleNotification
	 object:nil];
	[[NSThread currentThread] setName:@"Main Thread"];
}


- (void)dealloc {
    [viewController release];
    [window release];
    [super dealloc];
}

- (void)presentAlertWithTitle:(NSNotification *)notification
{
    NSString *title = [[notification userInfo] objectForKey:@"title"];
    NSString *message = [[notification userInfo] objectForKey:@"message"];

    //NSLog(@"Current Thread = %@", [NSThread currentThread]);
    dispatch_queue_t main_queue = dispatch_get_main_queue();

    dispatch_async(main_queue, ^{

        //NSLog(@"Current Thread (in main queue) = %@", [NSThread currentThread]);
        if (!uiIsVisible) {
    #ifdef TARGET_OS_IPHONE
            if(kCFCoreFoundationVersionNumber >= kCFCoreFoundationVersionNumber_iPhoneOS_4_0) {
                UILocalNotification *localNotif = [[UILocalNotification alloc] init];	
                localNotif.alertBody = message;
                localNotif.alertAction = NSLocalizedString(@"Open", @"");
                [[UIApplication sharedApplication] presentLocalNotificationNow:localNotif];
                [localNotif release];
            }
    #endif
        }
        else {
    #ifdef TARGET_OS_IPHONE
            UIAlertView *alert = [
                                  [[UIAlertView alloc]
                                   initWithTitle:title
                                   message:message
                                   delegate:nil
                                   cancelButtonTitle:NSLocalizedString(@"OK", @"")
                                   otherButtonTitles: nil]
                                  autorelease];
            /*
            [alert
             performSelector:@selector(show)
             onThread:[NSThread mainThread]
             withObject:nil
             waitUntilDone:NO];
            */
            [alert show];
    #else
            NSAlert *alert =
            [NSAlert
             alertWithMessageText:title
             defaultButton:NSLocalizedString(@"OK", @"")
             alternateButton:nil
             otherButton:nil
             informativeTextWithFormat:message];
            /*
            [alert
             performSelector:@selector(runModal)
             onThread:[NSThread mainThread]
             withObject:nil
             waitUntilDone:NO];
            */
            [alert runModal];
    #endif
        }
    });
}
- (void)applicationWillResignActive:(UIApplication *)application {
    /*
     Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
     Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
     */
	self.uiIsVisible = NO;
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    /*
     Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later. 
     If your application supports background execution, called instead of applicationWillTerminate: when the user quits.
     */
	self.uiIsVisible = NO;
	[viewController createTimers:NO];
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    /*
     Called as part of  transition from the background to the inactive state: here you can undo many of the changes made on entering the background.
     */
	self.uiIsVisible = YES;
	[viewController createTimers:YES];
	[viewController forceUIUpdate];
	[[NSNotificationCenter defaultCenter]
	 addObserver:self
	 selector:@selector(presentAlertWithTitle:)
	 name:ASPresentAlertWithTitleNotification
	 object:nil];
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    /*
     Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
     */
	self.uiIsVisible = YES;
}


- (void)applicationWillTerminate:(UIApplication *)application {
    /*
     Called when the application is about to terminate.
     See also applicationDidEnterBackground:.
     */
	self.uiIsVisible = NO;
	[[NSNotificationCenter defaultCenter]
	 removeObserver:self
	 name:ASPresentAlertWithTitleNotification
	 object:nil];
}


@end
