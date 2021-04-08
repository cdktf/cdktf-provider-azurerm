// https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterAssessmentConfig extends cdktf.TerraformMetaArguments {
  readonly additionalData?: { [key: string]: string };
  readonly assessmentPolicyId: string;
  readonly targetResourceId: string;
  /** status block */
  readonly status: SecurityCenterAssessmentStatus[];
  /** timeouts block */
  readonly timeouts?: SecurityCenterAssessmentTimeouts;
}
export interface SecurityCenterAssessmentStatus {
  readonly cause?: string;
  readonly code: string;
  readonly description?: string;
}

function securityCenterAssessmentStatusToTerraform(struct?: SecurityCenterAssessmentStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cause: cdktf.stringToTerraform(struct!.cause),
    code: cdktf.stringToTerraform(struct!.code),
    description: cdktf.stringToTerraform(struct!.description),
  }
}

export interface SecurityCenterAssessmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function securityCenterAssessmentTimeoutsToTerraform(struct?: SecurityCenterAssessmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SecurityCenterAssessment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityCenterAssessmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_assessment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalData = config.additionalData;
    this._assessmentPolicyId = config.assessmentPolicyId;
    this._targetResourceId = config.targetResourceId;
    this._status = config.status;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_data - computed: false, optional: true, required: false
  private _additionalData?: { [key: string]: string };
  public get additionalData() {
    return this.interpolationForAttribute('additional_data') as any;
  }
  public set additionalData(value: { [key: string]: string } ) {
    this._additionalData = value;
  }
  public resetAdditionalData() {
    this._additionalData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDataInput() {
    return this._additionalData
  }

  // assessment_policy_id - computed: false, optional: false, required: true
  private _assessmentPolicyId: string;
  public get assessmentPolicyId() {
    return this.getStringAttribute('assessment_policy_id');
  }
  public set assessmentPolicyId(value: string) {
    this._assessmentPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentPolicyIdInput() {
    return this._assessmentPolicyId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId: string;
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId
  }

  // status - computed: false, optional: false, required: true
  private _status: SecurityCenterAssessmentStatus[];
  public get status() {
    return this.interpolationForAttribute('status') as any;
  }
  public set status(value: SecurityCenterAssessmentStatus[]) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterAssessmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecurityCenterAssessmentTimeouts ) {
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
      additional_data: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalData),
      assessment_policy_id: cdktf.stringToTerraform(this._assessmentPolicyId),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      status: cdktf.listMapper(securityCenterAssessmentStatusToTerraform)(this._status),
      timeouts: securityCenterAssessmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
