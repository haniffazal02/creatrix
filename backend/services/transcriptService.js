/**
 * Transcript Service
 * Currently returns a mock transcript.
 * Will be replaced with real YouTube extraction later.
 */

async function getTranscript(videoUrl) {
    console.log(`[TranscriptService] Mock transcript for: ${videoUrl}`);

    // Mock transcript simulating a Tamil/Tanglish creator's video
    const mockTranscript = `
Hey guys welcome back to the channel. Inniki naan ungalukku oru amazing video editing tutorial 
panna poraen. So basically guys, naan indha video la explain pannuvaen how to use CapCut for 
professional editing. First thing first, neenga CapCut app open pannunga. Then import your footage.

Okay guys so basically what we're gonna do is, we're gonna add transitions. Transitions add 
pannuradhu romba easy guys. Just select the clip, then go to transitions tab, and choose any 
transition you want. I personally use the smooth zoom transition romba nalla irukkum guys.

Now let me tell you something guys, color grading is the most important part. Without color grading 
your video will look flat and boring. So what I do is, first I adjust the brightness, then contrast, 
then saturation. Indha three things correct ah set pannaa, your video will look cinematic guys.

Okay guys, let me show you the thumbnail creation process. Thumbnail is the most important part of 
your video guys. Without a good thumbnail, no one will click on your video. So I use Canva for 
creating thumbnails. Canva la romba nalla templates irukkum guys.

So guys remember, consistency is the key. Upload pannunga regularly. At least two videos per week. 
Engage with your audience in the comments. Reply pannunga every comment ku. Algorithm will push 
your video if you have good engagement guys.

Alright guys that's it for today's video. If you liked this video, smash that like button, subscribe 
to the channel, and hit the bell icon for notifications. Comment pannunga guys what topic you want 
next. Love you all, see you in the next one. Bye bye!
  `.trim();

    return mockTranscript;
}

module.exports = { getTranscript };
