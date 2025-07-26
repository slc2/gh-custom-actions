core = require('@actions/core');
github = require('@actions/github');
exec = require('@actions/exec');

function run() { 
    // get input values
    const bucket_name = core.getInput('bucket-name', { required: true}); // Dummy input for now

    core.notice('Hello from custom javascript action!');
    core.info(`Bucket name: ${bucket_name}`);

    core.setOutput('website-url', `https://${bucket_name}.restofurlhere.com`);
}

run();