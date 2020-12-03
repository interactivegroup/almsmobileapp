<details>
    <summary style="font-size:20px;color:#159957;">Contents</summary>
        <ul>
        <li class="toclevel-1 tocsection-1"><a href="#Overview"><span class="tocnumber">1</span> <span class="toctext">Overview</span></a></li>
        <li class="toclevel-1 tocsection-2"><a href="#Requirements"><span class="tocnumber">2</span> <span class="toctext">Requirements</span></a>
        <ul>
        <li class="toclevel-2 tocsection-3"><a href="#Install_a_browser_for_development"><span class="tocnumber">2.1</span> <span class="toctext">Install a browser for development</span></a></li>
        <li class="toclevel-2 tocsection-4"><a href="#Install_git"><span class="tocnumber">2.2</span> <span class="toctext">Install git</span></a></li>
        <li class="toclevel-2 tocsection-5"><a href="#Install_Node.js"><span class="tocnumber">2.3</span> <span class="toctext">Install Node.js</span></a></li>
        <li class="toclevel-2 tocsection-6"><a href="#Windows_only:_Native_build_dependencies"><span class="tocnumber">2.4</span> <span class="toctext">Windows only: Native build dependencies</span></a></li>
        <li class="toclevel-2 tocsection-7"><a href="#Mac_only:_Push_notifications"><span class="tocnumber">2.5</span> <span class="toctext">Mac only: Push notifications</span></a></li>
        <li class="toclevel-2 tocsection-8"><a href="#Linux_only:_libsecret"><span class="tocnumber">2.6</span> <span class="toctext">Linux only: libsecret</span></a></li>
        </ul>
        </li>
        <li class="toclevel-1 tocsection-9"><a href="#Clone_the_app_base_code"><span class="tocnumber">3</span> <span class="toctext">Clone the app base code</span></a></li>
        <li class="toclevel-1 tocsection-10"><a href="#Setup_the_environment"><span class="tocnumber">4</span> <span class="toctext">Setup the environment</span></a></li>
        <li class="toclevel-1 tocsection-11"><a href="#Open_the_app_in_the_browser"><span class="tocnumber">5</span> <span class="toctext">Open the app in the browser</span></a></li>
        <li class="toclevel-1 tocsection-12"><a href="#Updating_ionic_and_cordova"><span class="tocnumber">6</span> <span class="toctext">Updating ionic and cordova</span></a></li>
        <li class="toclevel-1 tocsection-13"><a href="#Updating_plugins"><span class="tocnumber">7</span> <span class="toctext">Updating plugins</span></a></li>
        <li class="toclevel-1 tocsection-14"><a href="#Building_for_Android_and_iOS"><span class="tocnumber">8</span> <span class="toctext">Building for Android and iOS</span></a></li>
        <li class="toclevel-1 tocsection-15"><a href="#Compiling_using_AOT"><span class="tocnumber">9</span> <span class="toctext">Compiling using AOT</span></a></li>
        <details>
            <summary class="toclevel-1 tocsection-16"><a href="#Troubleshooting"><span class="tocnumber">10</span> <span class="toctext">Troubleshooting </a></span></summary>
            <ul>
            <li class="toclevel-2 tocsection-17"><a href="#Strange_NPM_errors"><span class="tocnumber">10.1</span> <span class="toctext">Strange NPM errors</span></a></li>
            <li class="toclevel-2 tocsection-18"><a href="#Error:_libsass_bindings_not_found._Try_reinstalling_node-sass.3F"><span class="tocnumber">10.2</span> <span class="toctext">Error: libsass bindings not found. Try reinstalling node-sass?</span></a></li>
            <li class="toclevel-2 tocsection-19"><a href="#com.android.dex.DexException:_Multiple_dex_files_define_XXX"><span class="tocnumber">10.3</span> <span class="toctext">com.android.dex.DexException: Multiple dex files define XXX</span></a></li>
            <li class="toclevel-2 tocsection-20"><a href="#Could_not_resolve_all_dependencies_for_configuration_.27:_debugCompile.27."><span class="tocnumber">10.4</span> <span class="toctext">Could not resolve all dependencies for configuration ':_debugCompile'.</span></a></li>
            <li class="toclevel-2 tocsection-21"><a href="#Could_not_find_com.android.support:support-v4:XXX"><span class="tocnumber">10.5</span> <span class="toctext">Could not find com.android.support:support-v4:XXX</span></a></li>
            <li class="toclevel-2 tocsection-22"><a href="#ERROR:_In_.3Cdeclare-styleable.3E_FontFamilyFont.2C_unable_to_find_attribute_android:font"><span class="tocnumber">10.6</span> <span class="toctext">ERROR: In &lt;declare-styleable&gt; FontFamilyFont, unable to find attribute android:font</span></a></li>
            <li class="toclevel-2 tocsection-23"><a href="#Error:_Could_not_find_gradle_wrapper_within_Android_SDK._Might_need_to_update_your_Android_SDK."><span class="tocnumber">10.7</span> <span class="toctext">Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK.</span></a></li>
            <li class="toclevel-2 tocsection-24"><a href="#Could_not_find_com.android.support:support-v4:27.1.0"><span class="tocnumber">10.8</span> <span class="toctext">Could not find com.android.support:support-v4:27.1.0</span></a></li>
            <li class="toclevel-2 tocsection-25"><a href="#Error:_not_found:_make"><span class="tocnumber">10.9</span> <span class="toctext">Error: not found: make</span></a></li>
            <li class="toclevel-2 tocsection-26"><a href="#Current_working_directory_is_not_a_Cordova-based_project."><span class="tocnumber">10.10</span> <span class="toctext">Current working directory is not a Cordova-based project.</span></a></li>
            <li class="toclevel-2 tocsection-27"><a href="#ReferenceError:_internalBinding_is_not_defined"><span class="tocnumber">10.11</span> <span class="toctext">ReferenceError: internalBinding is not defined</span></a></li>
            <li class="toclevel-2 tocsection-28"><a href="#npm_update_check_failed"><span class="tocnumber">10.12</span> <span class="toctext">npm update check failed</span></a></li>
            <li class="toclevel-2 tocsection-29"><a href="#Unhandled_rejection_Error:_Command_failed:_C:.5Ccygwin64.5Cbin.5Cgit.EXE_..."><span class="tocnumber">10.13</span> <span class="toctext">Unhandled rejection Error: Command failed: C:\cygwin64\bin\git.EXE ...</span></a></li>
            <li class="toclevel-2 tocsection-30"><a href="#The_product_name_change_.28.3Cname.3E_tag.29_in_config.xml_is_not_supported_dynamically"><span class="tocnumber">10.14</span> <span class="toctext">The product name change (&lt;name&gt; tag) in config.xml is not supported dynamically</span></a></li>
            <li class="toclevel-2 tocsection-31"><a href="#Failed_to_install_.27cordova-plugin-file-transfer.27:_CordovaError:_Version_of_installed_plugin:_.22cordova-plugin-file.404.3.3.22_does_not_satisfy_dependency_plugin_requirement_.22cordova-plugin-file.40.3E.3D5.0.0.22."><span class="tocnumber">10.15</span> <span class="toctext">Failed to install 'cordova-plugin-file-transfer': CordovaError: Version of installed plugin: "cordova-plugin-file@4.3.3" does not satisfy dependency plugin requirement "cordova-plugin-file@&gt;=5.0.0".</span></a></li>
            <li class="toclevel-2 tocsection-32"><a href="#doc.find_is_not_a_function"><span class="tocnumber">10.16</span> <span class="toctext">doc.find is not a function</span></a></li>
            <li class="toclevel-2 tocsection-33"><a href="#Mac:_linker_code_failed_with_exit_code_1"><span class="tocnumber">10.17</span> <span class="toctext">Mac: linker code failed with exit code 1</span></a></li>
            <li class="toclevel-2 tocsection-34"><a href="#Windows:_npm_start_hangs_after_.22Starting_.27watch.27.22"><span class="tocnumber">10.18</span> <span class="toctext">Windows: npm start hangs after "Starting 'watch'"</span></a></li>
            </ul>
        </details>
    <li class="toclevel-1 tocsection-35"><a href="#See_also"><span class="tocnumber">11</span> <span class="toctext">See also</span></a></li>
</details>
<h2><span class="mw-headline" id="Overview">Overview</span></h2>
<p>The structure of this page is
</p>
<ul><li> the first part, up to the point where you get the <tt>npm start</tt> command to work is what you need to be able to do development on the app and test it in a browser.</li>
<li> the second part is about how to build a version of the app that can be run on a device.</li>
<li> then at the end is a list of troubleshooting advice. If you encounter a problem that is not already listed, please consider adding it.</li></ul>
<p>The majority of your development will be done using a browser. You will probably only begin to use an emulator once you need to simulate a real mobile device.
</p><p>If you want to be able to to write <a href="/dev/Acceptance_testing_for_the_mobile_app" title="Acceptance testing for the mobile app">automated acceptance tests for the app</a> then you need to follow this page at least as far as getting the <tt>npm start</tt> command to work on this page.
</p>
<h2><span class="mw-headline" id="Requirements">Requirements</span></h2>
<p>Windows tip: ingore any use of the sudo command below. Just use the command without it. Most things work that way. And if they don't, try in a Powershell window that you have opened with 'Run as administrator ...'.
</p>
<h3><span class="mw-headline" id="Install_a_browser_for_development">Install a browser for development</span></h3>
<p>We recommend Chromium browser (Google Chrome open source version) <a rel="nofollow" class="external free" href="https://download-chromium.appspot.com/">https://download-chromium.appspot.com/</a>
</p>
<h3><span class="mw-headline" id="Install_git">Install git</span></h3>
<p><a rel="nofollow" class="external free" href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>
</p>
<h3><span class="mw-headline" id="Install_Node.js">Install Node.js</span></h3>
<p>On Linux we recommend you use <a rel="nofollow" class="external text" href="https://github.com/creationix/nvm">nvm</a> - this lets you switch Node versions, and makes the installation a bit easier than the official installation route.
</p>
<pre>nvm install node
nvm use 11 # This is important, npm commands will not work in other versions
</pre>
<p>On Windows we recommend you use <a rel="nofollow" class="external free" href="https://github.com/coreybutler/nvm-windows">https://github.com/coreybutler/nvm-windows</a>. Same nvm commands as for Linux.
</p><p>On Mac we recommend installing NodeJS via Macports.
</p><p>(It may seem simpler and easier to install directly from <a rel="nofollow" class="external free" href="http://nodejs.org">http://nodejs.org</a>, but actually it is more tricky to get that to work. If you have previously installed Node directly, and want to switch to nvm, you need to uninstall node completely before installing nvm - or Google for trouble-shooting instructions, for example <a rel="nofollow" class="external free" href="https://github.com/coreybutler/nvm-windows/issues/58#issuecomment-272608696">https://github.com/coreybutler/nvm-windows/issues/58#issuecomment-272608696</a>.)
</p>
<h3><span class="mw-headline" id="Windows_only:_Native_build_dependencies">Windows only: Native build dependencies</span></h3>
<p>node-gyp requires native build tools for your platform.  If you're developing on Mac or Linux, you'll probably have these already (<a rel="nofollow" class="external text" href="https://github.com/nodejs/node-gyp/blob/master/README.md">refer to the docs if you don't</a>). On Windows, run the following command as administrator (in cmd or Powershell):
</p>
<pre>npm install --global --production windows-build-tools
</pre>
<p>Warning! this installer can take a very, very long time to run. We were seeing it take hours. Literally. Be prepared to be very patient. Don't just make the natural assumption that it has crashed.
</p>
<h3><span class="mw-headline" id="Mac_only:_Push_notifications">Mac only: Push notifications</span></h3>
<p>Phonegap plugin push 1.9.0 requires CocoaPods to work on a Mac. The installation steps can be found in <a rel="nofollow" class="external free" href="https://cocoapods.org/">https://cocoapods.org/</a>
</p>
<pre>sudo gem install cocoapods
pod setup
</pre>
<p>Please note that for compiling the app in Mac you need to open the <b>ALMS.xcworkspace</b> file, more information here: <a rel="nofollow" class="external text" href="http://tracker.aldermin.com/browse/MOBILE-1970">MOBILE-1970</a>
</p>
<h3><span class="mw-headline" id="Linux_only:_libsecret">Linux only: libsecret</span></h3>
<p>In ALMS App 1.0.0 we'll include a new script to easily push diff URLs to ALMS Tracker (Jira): <a href="#" title="ALMS App scripts: gulp push">gulp push</a>. One of the libraries used requires the libsecret library to be installed in Linux before running <i>npm install</i>. Depending on your distribution, you will need to run the following command:
</p><p>Debian/Ubuntu: sudo apt-get install libsecret-1-dev
</p><p>Red Hat-based: sudo yum install libsecret-devel
</p><p>Arch Linux: sudo pacman -S libsecret
</p>
<h2><span class="mw-headline" id="Clone_the_app_base_code">Clone the app base code</span></h2>
<p>Clone the code base into a local directory in your computer.
It may be a good idea to work from the integration branch rather than master.
</p>
<pre>git clone <a rel="nofollow" class="external free" href="https://github.com/interactivegroup/almsmobileapp">https://github.com/interactivegroup/almsmobileapp.git</a> almsmobileapp
cd almsmobileapp
git checkout integration
</pre>
<h2><span class="mw-headline" id="Setup_the_environment">Setup the environment</span></h2>
<p>Please, note that if you are creating a custom app with a custom URL scheme, you should edit the /package.json and /config.xml files and specify there your custom URL_SCHEME (replacing the existing value) and your <a rel="nofollow" class="external text" href="https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/INSTALLATION.md">GCMPN SENDER_ID</a>.
</p><p>The following command must be run in the project's root folder:</p>
<pre>npm run setup
</pre>
<p>If this fails, you can see what it is doing by looking at the 'scripts' section in package.json. At the moment it is doing <tt>npm install &amp;&amp; npx cordova prepare &amp;&amp; npx gulp</tt> (installing npm dependencies, preparing cordova and running default gulp tasks). That is, running three commands back-to-back, but only carrying on if the previous one succeeds completely. You can try running the three commands separately. If you do, <tt>npm start</tt> (see below) may work, even if <tt>npx cordova prepare</tt> gives errors. You only really need <tt>npx cordova prepare</tt> to work if you are going to go on and build the app for a mobile device or emulator.
</p>
<h2><span class="mw-headline" id="Open_the_app_in_the_browser">Open the app in the browser</span></h2>
<p>Then, start the Ionic server:</p>
<pre>npm start
</pre>
<p>Congratulations! Now that you have got to the point where the <tt>npm start</tt> command works, you can start doing development on the app. You only need to read the rest of the page if you want to build packaged versions of the app.
</p>
<h2><span class="mw-headline" id="Updating_ionic_and_cordova">Updating ionic and cordova</span></h2>
<p>Update project platforms:
</p>
<pre>npx ionic cordova platform remove android
npx ionic cordova platform remove ios
npx ionic cordova platform add android
npx ionic cordova platform add ios
</pre>
<h2><span class="mw-headline" id="Updating_plugins">Updating plugins</span></h2>
<pre>npx cordova plugin remove your_plugin_id
npx cordova plugin add your_plugin_id
</pre>
<h2><span class="mw-headline" id="Building_for_Android_and_iOS">Building for Android and iOS</span></h2>
<p>Please see the guides below to be able to build for Android and iOS using the command line:
</p><p>Android: <a rel="nofollow" class="external free" href="https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html">https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html</a>
</p><p>iOS: <a rel="nofollow" class="external free" href="https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html">https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html</a>
</p><p>For convenience, you can use the following commands:
</p>
<pre>npm run dev:android
npm run dev:ios
npm run prod:android # Uses aot compilation, read below
npm run prod:ios        # Uses aot compilation, read below
</pre>
If the build fails, please run <pre>npx cordova requirements</pre> to check that you fulfilled all requirements for the platform.
<p>If you get errors while building, please see the Troubleshooting section below.
</p><p>If using <b>Ubuntu</b> you should install the packages: <tt>gradle</tt> and <tt>libgradle-android-plugin-java</tt> (and all its dependencies) to build.
</p>
<h2><span class="mw-headline" id="Compiling_using_AOT">Compiling using AOT</span></h2>
<p>Angular has 2 ways of compiling: JIT and AOT. Running <tt>npm start</tt> or <tt>npx ionic build</tt> compiles using JIT by default, which is faster to compile but the app takes longer to start.
</p><p>When building for release you should always compile using AOT, otherwise the app can take too long to start in some devices. The default AOT compiling causes some issues with the database activity and the <a href="/dev/Mobile_support_for_plugins" title="Mobile support for plugins">Mobile support for plugins</a>, so you have to modify a couple of files in order to make this work.
</p><p>First you need to open the file: <i>node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js</i>. Search the variable called "<i>_NO_RESOURCE_LOADER</i>", you'll see it has a function named "<i>get</i>" with this line:
</p>
<pre class="javascript" style="font-family:monospace;"><span style="color: #000066; font-weight: bold;">throw</span> <span style="color: #000066; font-weight: bold;">new</span> Error<span style="color: #009900;">(</span><span style="color: #3366CC;">"No ResourceLoader implementation has been provided. Can't read the url <span style="color: #000099; font-weight: bold;">\"</span>"</span> <span style="color: #339933;">+</span> url <span style="color: #339933;">+</span> <span style="color: #3366CC;">"<span style="color: #000099; font-weight: bold;">\"</span>"</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre>
<p>Remove that line and put this code instead:
</p>
<pre class="javascript" style="font-family:monospace;">url <span style="color: #339933;">=</span> <span style="color: #3366CC;">'templates/'</span> <span style="color: #339933;">+</span> url<span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #000066; font-weight: bold;">var</span> resolve<span style="color: #339933;">;</span>
        <span style="color: #000066; font-weight: bold;">var</span> reject<span style="color: #339933;">;</span>
        <span style="color: #000066; font-weight: bold;">var</span> promise <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">new</span> Promise<span style="color: #009900;">(</span><span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">(</span>res<span style="color: #339933;">,</span> rej<span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
            resolve <span style="color: #339933;">=</span> res<span style="color: #339933;">;</span>
            reject <span style="color: #339933;">=</span> rej<span style="color: #339933;">;</span>
        <span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
        <span style="color: #000066; font-weight: bold;">var</span> xhr <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">new</span> XMLHttpRequest<span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">open</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'GET'</span><span style="color: #339933;">,</span> url<span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">true</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">responseType</span> <span style="color: #339933;">=</span> <span style="color: #3366CC;">'text'</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">onload</span> <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
            <span style="color: #006600; font-style: italic;">// responseText is the old-school way of retrieving response (supported by IE8 &amp; 9)</span>
            <span style="color: #006600; font-style: italic;">// response/responseType properties were introduced in ResourceLoader Level2 spec (supported by IE10)</span>
            <span style="color: #000066; font-weight: bold;">var</span> response <span style="color: #339933;">=</span> xhr.<span style="color: #660066;">response</span> <span style="color: #339933;">||</span> xhr.<span style="color: #660066;">responseText</span><span style="color: #339933;">;</span>
            <span style="color: #006600; font-style: italic;">// normalize IE9 bug (http://bugs.jquery.com/ticket/1450)</span>
            <span style="color: #000066; font-weight: bold;">var</span> status <span style="color: #339933;">=</span> xhr.<span style="color: #660066;">status</span> <span style="color: #339933;">===</span> <span style="color: #CC0000;">1223</span> <span style="color: #339933;">?</span> <span style="color: #CC0000;">204</span> <span style="color: #339933;">:</span> xhr.<span style="color: #660066;">status</span><span style="color: #339933;">;</span>
            <span style="color: #006600; font-style: italic;">// fix status code when it is 0 (0 status is undocumented).</span>
            <span style="color: #006600; font-style: italic;">// Occurs when accessing file resources or on Android 4.1 stock browser</span>
            <span style="color: #006600; font-style: italic;">// while retrieving files from application cache.</span>
            <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span>status <span style="color: #339933;">===</span> <span style="color: #CC0000;">0</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
                status <span style="color: #339933;">=</span> response <span style="color: #339933;">?</span> <span style="color: #CC0000;">200</span> <span style="color: #339933;">:</span> <span style="color: #CC0000;">0</span><span style="color: #339933;">;</span>
            <span style="color: #009900;">}</span>
            <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span><span style="color: #CC0000;">200</span> <span style="color: #339933;">&lt;=</span> status <span style="color: #339933;">&amp;&amp;</span> status <span style="color: #339933;">&lt;=</span> <span style="color: #CC0000;">300</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
                resolve<span style="color: #009900;">(</span>response<span style="color: #009900;">)</span><span style="color: #339933;">;</span>
            <span style="color: #009900;">}</span>
            <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #009900;">{</span>
                reject<span style="color: #009900;">(</span><span style="color: #3366CC;">"Failed to load "</span> <span style="color: #339933;">+</span> url<span style="color: #009900;">)</span><span style="color: #339933;">;</span>
            <span style="color: #009900;">}</span>
        <span style="color: #009900;">}</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">onerror</span> <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span> reject<span style="color: #009900;">(</span><span style="color: #3366CC;">"Failed to load "</span> <span style="color: #339933;">+</span> url<span style="color: #009900;">)</span><span style="color: #339933;">;</span> <span style="color: #009900;">}</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">send</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
        <span style="color: #000066; font-weight: bold;">return</span> promise<span style="color: #339933;">;</span></pre>
<p>We tried to replace the default loader with our own implementation, but we weren't able to make the compiler work so the only solution left was to modify the default one.
</p><p>Now you need to open the file: <i>node_modules/@ionic/app-scripts/dist/util/config.js</i>. In that file you need to remove the <i>context.isProd</i> condition from the options <i>optimizeJs</i>. So the final code for that part should be like this:
</p>
<pre class="javascript" style="font-family:monospace;">context.<span style="color: #660066;">optimizeJs</span> <span style="color: #339933;">=</span> <span style="color: #009900;">[</span>
        context.<span style="color: #660066;">optimizeJs</span><span style="color: #339933;">,</span>
        hasArg<span style="color: #009900;">(</span><span style="color: #3366CC;">'--optimizeJs'</span><span style="color: #009900;">)</span>
    <span style="color: #009900;">]</span>.<span style="color: #660066;">find</span><span style="color: #009900;">(</span><span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">(</span>val<span style="color: #009900;">)</span> <span style="color: #009900;">{</span> <span style="color: #000066; font-weight: bold;">return</span> <span style="color: #000066; font-weight: bold;">typeof</span> val <span style="color: #339933;">===</span> <span style="color: #3366CC;">'boolean'</span><span style="color: #339933;">;</span> <span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre>
<p>We want to compile in production mode but without optimizing Javascript because that breaks our plugins support. However, Ionic doesn't let you do that, so the only option is to do this change.
</p><p>With these changes done you can now compile using production mode:
</p>
<pre class="php" style="font-family:monospace;">npm run ionic<span style="color: #339933;">:</span>build <span style="color: #339933;">--</span> <span style="color: #339933;">--</span>prod</pre>
<p>This command will generate the app files and put them inside <i>www</i> folder. If you now want to install that app in a real device you can run "<i>npx cordova run android</i>" or "<i>npx cordova build ios</i>" (please don't use "<i>npx ionic cordova ...</i>" nor "<i>npm start</i>" because it will override your build files!).
</p>
    <details>
        <summary id="Troubleshooting" style="font-size:20px;color:#159957;">Troubleshooting</summary>
        <h3><span class="mw-headline" id="Strange_NPM_errors">Strange NPM errors</span></h3>
        <p>To get more debug output from npm commands, see <a rel="nofollow" class="external free" href="https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties">https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties</a>. In particular try adding <tt>--loglevel verbose</tt> (or <tt>--loglevel info</tt> or <tt>--loglevel silly</tt>) to the command-line.
        </p>
        <h3><span class="mw-headline" id="Error:_libsass_bindings_not_found._Try_reinstalling_node-sass.3F">Error: libsass bindings not found. Try reinstalling node-sass?</span></h3>
        <p>Sometimes running the following command will fix the problem:
        </p>
        <pre>npm rebuild node-sass
        </pre>
        <p>If the issue persists, please read: <a rel="nofollow" class="external free" href="http://fettblog.eu/gulp-and-node4-first-aid/">http://fettblog.eu/gulp-and-node4-first-aid/</a>, alternatively you must be sure that you installed Node v0.12
        </p>
        <h3><span class="mw-headline" id="com.android.dex.DexException:_Multiple_dex_files_define_XXX">com.android.dex.DexException: Multiple dex files define XXX</span></h3>
        <p>Open the file <i>platforms/android/build.gradle</i> and add this code at the end:
        </p>
        <pre> configurations {
            all*.exclude group: 'com.android.support', module: 'support-v4'
        }
        </pre>
        <h3><span class="mw-headline" id="Could_not_resolve_all_dependencies_for_configuration_.27:_debugCompile.27.">Could not resolve all dependencies for configuration ':_debugCompile'.</span></h3>
        <p>Open the Android SDK Manager and make sure you have installed: Android Support Repository, Android Support Library, Google Play Services and Google Repository.
        </p>
        <h3><span class="mw-headline" id="Could_not_find_com.android.support:support-v4:XXX">Could not find com.android.support:support-v4:XXX</span></h3>
        <p>Open the file <i>platforms/android/build.gradle</i> and add this code at the end:
        </p>
        <pre> configurations.all {
            resolutionStrategy.force 'com.android.support:support-v4:24.0.0'
        }
        </pre>
        <h3><span class="mw-headline" id="ERROR:_In_.3Cdeclare-styleable.3E_FontFamilyFont.2C_unable_to_find_attribute_android:font">ERROR: In &lt;declare-styleable&gt; FontFamilyFont, unable to find attribute android:font</span></h3>
        <p>Open the file <i>platforms/android/build.gradle</i> and add this code at the end:
        </p>
        <pre>android {
            compileSdkVersion 26
            buildToolsVersion "26.0.1"
        }
        </pre>
        <h3><span class="mw-headline" id="Error:_Could_not_find_gradle_wrapper_within_Android_SDK._Might_need_to_update_your_Android_SDK.">Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK.</span></h3>
        <p>1. Download Android studio - <a rel="nofollow" class="external free" href="https://developer.android.com/studio/">https://developer.android.com/studio/</a>
        </p><p>2. Copy the folder android-studio/plugins/android/lib/templates
        </p><p>3. Paste in the folder android-sdk-folder/Sdk/tools
        </p>
        <h3><span class="mw-headline" id="Could_not_find_com.android.support:support-v4:27.1.0">Could not find com.android.support:support-v4:27.1.0</span></h3>
        <p>Open the file <i>platforms/android/build.gradle</i> and configure like this:
        </p>
        <pre> allprojects {
            repositories {
                jcenter()
                maven {
                    url "<a rel="nofollow" class="external free" href="https://maven.google.com">https://maven.google.com</a>"
                }
            }
        }
        </pre>
        <h3><span class="mw-headline" id="Error:_not_found:_make">Error: not found: make</span></h3>
        <p>If you see this error in Ubuntu, run <tt>sudo apt-get install build-essential</tt> and retry.
        </p>
        <h3><span class="mw-headline" id="Current_working_directory_is_not_a_Cordova-based_project.">Current working directory is not a Cordova-based project.</span></h3>
        <p>If you see this error during <tt>npm setup</tt>, run <tt>mkdir www</tt> and retry.
        </p>
        <h3><span class="mw-headline" id="ReferenceError:_internalBinding_is_not_defined">ReferenceError: internalBinding is not defined</span></h3>
        <p>This <a rel="nofollow" class="external text" href="https://stackoverflow.com/questions/53146394/node-app-fails-to-run-on-mojave-referenceerror-internalbinding-is-not-defined">seems to be</a> an error with 'natives' prior to 1.1.6. I fixed it using <tt>npm install natives@1.1.6</tt>.
        </p>
        <h3><span class="mw-headline" id="npm_update_check_failed">npm update check failed</span></h3>
        <p>I got the error</p>
        <pre>
        │                   npm update check failed                     │
        │             Try running with sudo or get access               │ 
        │            to the local update config store via               │
        │ sudo chown -R $USER:$(id -gn $USER) C:\Users\username\.config │
        </pre>
        <p>on Windows because I installed too much as admin, and the suggested command does not work on Windows. The is to manually check the ownership of all the files in C:\Users\username\.config\configstore. In my case it was update-notifier-npm.json which got changed to be owned by Administrator.
        </p>
        <h3><span class="mw-headline" id="Unhandled_rejection_Error:_Command_failed:_C:.5Ccygwin64.5Cbin.5Cgit.EXE_...">Unhandled rejection Error: Command failed: C:\cygwin64\bin\git.EXE ...</span></h3>
        <p>You need to heed the advice at <a rel="nofollow" class="external free" href="https://www.npmjs.com/package/npm#installing-on-cygwin">https://www.npmjs.com/package/npm#installing-on-cygwin</a>. Cygwin users are not welcome in the Node world. However, you just need to ensure that Msysgit is on your windows path and that the cygwin bin folder is not. Then always use another shell like Powershell for your ALMS mobile development. (You don't need your Cygwin bin folder on the Windows path. It automatically gets added to the path when you lauch Cygwin bash.)
        </p>
        <h3><span class="mw-headline" id="The_product_name_change_.28.3Cname.3E_tag.29_in_config.xml_is_not_supported_dynamically">The product name change (&lt;name&gt; tag) in config.xml is not supported dynamically</span></h3>
        <p>According to Google, this happens when you create the iOS platform with a certain &lt;name&gt; and then you change that name in config.xml. It's weird that the installation process does that, it should create the platform with the right name unless it was changed manually.
        </p><p>The solution seems to be removing and adding the iOS platform again:
        </p>
        <pre>npx ionic platform remove ios
        npx ionic platform add ios
        </pre>
        <p>Note that this does not seem to prevent <tt>ionic --serve</tt> from serving a working app if you run gulp after <tt>npm run setup</tt> has failed with this error.
        </p>
        <h3><span class="mw-headline" id="Failed_to_install_.27cordova-plugin-file-transfer.27:_CordovaError:_Version_of_installed_plugin:_.22cordova-plugin-file.404.3.3.22_does_not_satisfy_dependency_plugin_requirement_.22cordova-plugin-file.40.3E.3D5.0.0.22.">Failed to install 'cordova-plugin-file-transfer': CordovaError: Version of installed plugin: "cordova-plugin-file@4.3.3" does not satisfy dependency plugin requirement "cordova-plugin-file@&gt;=5.0.0".</span></h3>
        <p>The <i>cordova-plugin-file</i> version specified in config.xml is 6.0.1, for some reason the installation process installed a wrong version for that plugin. You can manually install the <i>cordova-plugin-file</i> plugin like this:
        </p>
        <pre>npx cordova plugin remove cordova-plugin-file
        npx cordova plugin add cordova-plugin-file@6.0.1
        </pre>
        <p>Please notice that if there is any plugin installed that depends on <i>cordova-plugin-file</i> you'll have to remove and re-add them too.
        </p><p>Note that this does not seem to prevent <tt>npm start</tt> from serving a working app if you run <tt>npx gulp</tt> after <tt>npm run setup</tt> has failed with this error.
        </p>
        <h3><span class="mw-headline" id="doc.find_is_not_a_function">doc.find is not a function</span></h3>
        <p>This happens in some environments, the solution is to run <tt>npx cordova platform add ios</tt> before running <tt>npm run setup</tt> (but you'll need to run <tt>npm install</tt> if you hadn't). If you get this error, you'll need to remove the platforms and plugins folders before running this sequence of commands to fix your environment.
        </p><p><a rel="nofollow" class="external text" href="https://stackoverflow.com/questions/47404622/edit-config-for-ios-usage-descriptions-doc-find-is-not-a-function">Find more about this in StackOverflow</a>
        </p>
        <h3><span class="mw-headline" id="Mac:_linker_code_failed_with_exit_code_1">Mac: linker code failed with exit code 1</span></h3>
        <p>If you get this error when trying to build the ALMS app with XCode, some dependencies might not have installed correctly.
        </p><p>Ensure you have followed the <a rel="nofollow" class="external text" href="#Mac_only:_Push_notifications%7C">Mac only: Push notifications</a> steps above (particularly opening the .xcworkspace file rather than the .xcodeproj file). Then run the following:
        </p>
        <pre> npm run setup
        cd platforms/ios
        pod install
        </pre>
        <p>Now try running the build again in XCode.
        </p>
        <h3><span class="mw-headline" id="Windows:_npm_start_hangs_after_.22Starting_.27watch.27.22">Windows: <pre>npm start</pre> hangs after "Starting 'watch'"</span></h3>
        <p>This appears to have happened since the move to npx. Try running the npx commands generated by npm run directly in bash:
        </p>
        <pre> npx gulp watch &amp; npx ionic-app-scripts serve -b --devapp --address=0.0.0.0
        </pre>
    </details>