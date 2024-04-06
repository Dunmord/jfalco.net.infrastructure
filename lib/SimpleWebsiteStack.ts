import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { SimpleWebsiteConstruct } from "./constructs/SimpleWebsiteConstruct";

export class CdkSimpleWebsiteTemplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new SimpleWebsiteConstruct(this, "JfalcoDotNetSPAConstructa", {
      bucketName: "jfalco.net.us-east-1",
      domainNames: ["jfalco.net", "www.jfalco.net"],
      prefixForId: "JfalcoDotNet",
      hostedZoneId: "Z05061913FQYPH06UR3W",
      terminationProtection: true,
      isSinglePageApplication: true,
    });
  }
}
