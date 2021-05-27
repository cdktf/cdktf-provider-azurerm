// https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterAssessmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#additional_data SecurityCenterAssessment#additional_data}
  */
  readonly additionalData?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#assessment_policy_id SecurityCenterAssessment#assessment_policy_id}
  */
  readonly assessmentPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#target_resource_id SecurityCenterAssessment#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#status SecurityCenterAssessment#status}
  */
  readonly status: SecurityCenterAssessmentStatus[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#timeouts SecurityCenterAssessment#timeouts}
  */
  readonly timeouts?: SecurityCenterAssessmentTimeouts;
}
export interface SecurityCenterAssessmentStatus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#cause SecurityCenterAssessment#cause}
  */
  readonly cause?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#code SecurityCenterAssessment#code}
  */
  readonly code: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#description SecurityCenterAssessment#description}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#create SecurityCenterAssessment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#delete SecurityCenterAssessment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#read SecurityCenterAssessment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html#update SecurityCenterAssessment#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html azurerm_security_center_assessment}
*/
export class SecurityCenterAssessment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment.html azurerm_security_center_assessment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCenterAssessmentConfig
  */
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
