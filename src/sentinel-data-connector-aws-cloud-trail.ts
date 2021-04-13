// https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_aws_cloud_trail.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorAwsCloudTrailConfig extends cdktf.TerraformMetaArguments {
  readonly awsRoleArn: string;
  readonly logAnalyticsWorkspaceId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: SentinelDataConnectorAwsCloudTrailTimeouts;
}
export interface SentinelDataConnectorAwsCloudTrailTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function sentinelDataConnectorAwsCloudTrailTimeoutsToTerraform(struct?: SentinelDataConnectorAwsCloudTrailTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SentinelDataConnectorAwsCloudTrail extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SentinelDataConnectorAwsCloudTrailConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_aws_cloud_trail',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsRoleArn = config.awsRoleArn;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_role_arn - computed: false, optional: false, required: true
  private _awsRoleArn: string;
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }
  public set awsRoleArn(value: string) {
    this._awsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnInput() {
    return this._awsRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId: string;
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SentinelDataConnectorAwsCloudTrailTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SentinelDataConnectorAwsCloudTrailTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_role_arn: cdktf.stringToTerraform(this._awsRoleArn),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: sentinelDataConnectorAwsCloudTrailTimeoutsToTerraform(this._timeouts),
    };
  }
}
