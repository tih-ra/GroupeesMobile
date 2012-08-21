//
//  MacStreamingPlayerController.h
//  MacStreamingPlayer
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

#import <Cocoa/Cocoa.h>

@class AudioStreamer;

@interface MacStreamingPlayerController : NSObject
{
	IBOutlet NSTextField *downloadSourceField;
	IBOutlet NSButton *button;
	IBOutlet NSTextField *positionLabel;
	IBOutlet NSSlider *progressSlider;
	AudioStreamer *streamer;
	NSTimer *progressUpdateTimer;
}

- (IBAction)buttonPressed:(id)sender;
- (void)spinButton;
- (void)updateProgress:(NSTimer *)aNotification;
- (IBAction)sliderMoved:(NSSlider *)aSlider;

@end

